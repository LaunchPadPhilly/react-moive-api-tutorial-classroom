#!/usr/bin/env node

/**
 * Educational Project Generator
 *
 * Generates complete educational project structures matching the
 * STEP-BY-STEP-GUIDE format with 30+ files including:
 * - CCC.1 Level 10 documentation
 * - 4 detailed milestone guides
 * - Facilitation and business case materials
 * - Learning resources and templates
 */

import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateProjectStructure } from './generators/structure-generator.js';
import { generateProblemStatement } from './generators/problem-generator.js';
import { generateProjectScope } from './generators/scope-generator.js';
import { generateMilestones } from './generators/milestone-generator.js';
import { generateFacilitationGuides } from './generators/facilitation-generator.js';
import { generateBusinessCase } from './generators/business-case-generator.js';
import { analyzeProjectDomain } from './utils/domain-analyzer.js';
import { selectTechStack } from './utils/tech-stack-selector.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CLI Configuration
program
  .name('generate-project')
  .description('Generate complete educational project structures')
  .version('1.0.0')
  .argument('[project-topic]', 'Project topic or name')
  .option('-o, --output <directory>', 'Output directory', './generated-project')
  .option('-t, --tech-stack <stack>', 'Tech stack preset (react-vite, nextjs, vue)')
  .option('-d, --duration <days>', 'Project duration in days', '10')
  .option('-s, --skill-level <level>', 'Target skill level (beginner, intermediate, advanced)', 'intermediate')
  .option('--no-interactive', 'Skip interactive prompts')
  .parse();

const options = program.opts();
const [projectTopicArg] = program.args;

/**
 * Main generator function
 */
async function main() {
  console.log(chalk.blue.bold('\n🎓 Educational Project Generator\n'));

  let config = {
    projectTopic: projectTopicArg,
    outputDir: options.output,
    techStack: options.techStack,
    duration: parseInt(options.duration),
    skillLevel: options.skillLevel,
    interactive: options.interactive !== false
  };

  // Interactive mode
  if (config.interactive) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'projectTopic',
        message: 'What is your project topic?',
        default: config.projectTopic || 'Recipe Sharing App',
        validate: (input) => input.length > 0 || 'Project topic is required'
      },
      {
        type: 'list',
        name: 'projectType',
        message: 'What type of project?',
        choices: [
          { name: 'Web Application (SPA)', value: 'web-spa' },
          { name: 'Full-Stack Web App', value: 'web-fullstack' },
          { name: 'REST API', value: 'api-rest' },
          { name: 'Mobile App (React Native)', value: 'mobile-react-native' },
          { name: 'Desktop App (Electron)', value: 'desktop-electron' }
        ],
        default: 'web-spa'
      },
      {
        type: 'list',
        name: 'techStack',
        message: 'Choose a tech stack:',
        choices: (answers) => {
          if (answers.projectType === 'web-spa') {
            return [
              { name: 'React + Vite', value: 'react-vite' },
              { name: 'Next.js', value: 'nextjs' },
              { name: 'Vue + Vite', value: 'vue-vite' },
              { name: 'Svelte + Vite', value: 'svelte-vite' }
            ];
          }
          return [{ name: 'Auto-detect', value: 'auto' }];
        },
        default: config.techStack || 'react-vite'
      },
      {
        type: 'list',
        name: 'skillLevel',
        message: 'Target skill level:',
        choices: [
          { name: 'Beginner (learning basics)', value: 'beginner' },
          { name: 'Intermediate (comfortable with fundamentals)', value: 'intermediate' },
          { name: 'Advanced (experienced developer)', value: 'advanced' }
        ],
        default: config.skillLevel
      },
      {
        type: 'number',
        name: 'duration',
        message: 'Project duration (days):',
        default: config.duration,
        validate: (input) => input > 0 && input <= 30 || 'Duration must be between 1 and 30 days'
      },
      {
        type: 'input',
        name: 'outputDir',
        message: 'Output directory:',
        default: config.outputDir,
        validate: (input) => input.length > 0 || 'Output directory is required'
      },
      {
        type: 'confirm',
        name: 'includeTests',
        message: 'Include testing documentation?',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeAccessibility',
        message: 'Include accessibility requirements?',
        default: true
      }
    ]);

    config = { ...config, ...answers };
  }

  console.log(chalk.cyan('\n📊 Analyzing project domain...'));
  const domainAnalysis = await analyzeProjectDomain(config.projectTopic, config.projectType);

  console.log(chalk.cyan('🔧 Selecting tech stack...'));
  const techStackConfig = await selectTechStack(config.techStack, config.projectType, domainAnalysis);

  console.log(chalk.cyan('📁 Creating project structure...\n'));

  const projectData = {
    ...config,
    domainAnalysis,
    techStackConfig,
    projectName: generateProjectName(config.projectTopic),
    generatedDate: new Date().toISOString().split('T')[0]
  };

  try {
    // Create output directory
    await fs.mkdir(config.outputDir, { recursive: true });

    // Generate all components
    console.log(chalk.yellow('  ├─ Generating project structure...'));
    await generateProjectStructure(config.outputDir, projectData);

    console.log(chalk.yellow('  ├─ Generating problem statement...'));
    await generateProblemStatement(config.outputDir, projectData);

    console.log(chalk.yellow('  ├─ Generating project scope (CCC.1 Level 10)...'));
    await generateProjectScope(config.outputDir, projectData);

    console.log(chalk.yellow('  ├─ Generating 4 milestone guides...'));
    await generateMilestones(config.outputDir, projectData);

    console.log(chalk.yellow('  ├─ Generating facilitation guides...'));
    await generateFacilitationGuides(config.outputDir, projectData);

    console.log(chalk.yellow('  ├─ Generating business case materials...'));
    await generateBusinessCase(config.outputDir, projectData);

    console.log(chalk.yellow('  └─ Generating supporting documents...\n'));

    // Summary
    console.log(chalk.green.bold('✅ Project generated successfully!\n'));
    console.log(chalk.white('📦 Project Details:'));
    console.log(chalk.gray(`   Topic: ${projectData.projectTopic}`));
    console.log(chalk.gray(`   Name: ${projectData.projectName}`));
    console.log(chalk.gray(`   Tech Stack: ${techStackConfig.name}`));
    console.log(chalk.gray(`   Duration: ${projectData.duration} days`));
    console.log(chalk.gray(`   Skill Level: ${projectData.skillLevel}`));
    console.log(chalk.gray(`   Output: ${path.resolve(config.outputDir)}\n`));

    console.log(chalk.cyan('📚 Generated Files:'));
    console.log(chalk.gray('   ✓ README.md (CCC.1 Level 10)'));
    console.log(chalk.gray('   ✓ CLAUDE.md (AI context)'));
    console.log(chalk.gray('   ✓ start_here.md'));
    console.log(chalk.gray('   ✓ overview.md'));
    console.log(chalk.gray('   ✓ 00-problem.md'));
    console.log(chalk.gray('   ✓ 01-project-scope.md'));
    console.log(chalk.gray('   ✓ 02-wireframes-overview.md'));
    console.log(chalk.gray('   ✓ 03-trello-project-board-guide.md'));
    console.log(chalk.gray('   ✓ 04-SETUP_INSTRUCTIONS.md'));
    console.log(chalk.gray('   ✓ 4 Milestone guides (m1.md - m4.md)'));
    console.log(chalk.gray('   ✓ Facilitation guides (4 files)'));
    console.log(chalk.gray('   ✓ Business case materials (4 files)'));
    console.log(chalk.gray('   ✓ Learning resources'));
    console.log(chalk.gray('   ✓ Templates (2 fillable templates)\n'));

    console.log(chalk.blue('🚀 Next Steps:'));
    console.log(chalk.white(`   1. cd ${config.outputDir}`));
    console.log(chalk.white(`   2. Review start_here.md`));
    console.log(chalk.white(`   3. Follow 04-SETUP_INSTRUCTIONS.md\n`));

  } catch (error) {
    console.error(chalk.red.bold('\n❌ Error generating project:\n'));
    console.error(chalk.red(error.message));
    if (error.stack) {
      console.error(chalk.gray('\n' + error.stack));
    }
    process.exit(1);
  }
}

/**
 * Generate project name from topic
 */
function generateProjectName(topic) {
  return topic
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Run the generator
main().catch((error) => {
  console.error(chalk.red.bold('\n❌ Fatal error:\n'));
  console.error(chalk.red(error.message));
  process.exit(1);
});
