/**
 * Business Case Generator
 * Creates assessment materials including rubrics and presentation templates
 */

import fs from 'fs/promises';
import path from 'path';

export async function generateBusinessCase(outputDir, projectData) {
  await fs.mkdir(path.join(outputDir, 'business-case'), { recursive: true });

  await generateOralDefenseRubric(outputDir, projectData);
  await generatePresentationTemplate(outputDir, projectData);
  await generateIncentiveRequirements(outputDir, projectData);
  await generateCanvaGuide(outputDir, projectData);
}

async function generateOralDefenseRubric(outputDir, projectData) {
  const content = `# Oral Defense Rubric - ${projectData.projectTopic}

## Overview

**Total Points:** 100
**Passing Score:** 70/100
**Duration:** 15-20 minutes per student

## Rubric Breakdown

### 1. Problem Analysis (CCC.1.1) - 20 points

| Criteria | Excellent (18-20) | Good (15-17) | Satisfactory (12-14) | Needs Improvement (0-11) |
|----------|-------------------|--------------|----------------------|--------------------------|
| **Problem Understanding** | Demonstrates deep understanding of user needs, constraints, and context | Clear understanding with minor gaps | Basic understanding, some context missing | Limited or unclear understanding |
| **Stakeholder Analysis** | Identifies primary, secondary, tertiary stakeholders with detailed analysis | Identifies main stakeholders adequately | Basic stakeholder identification | Incomplete stakeholder analysis |
| **Competing Solutions** | Thorough analysis of 3+ alternatives with pros/cons | Analyzes 2-3 alternatives | Mentions alternatives briefly | Little to no competitive analysis |

### 2. Solution Planning (CCC.1.2) - 20 points

| Criteria | Excellent (18-20) | Good (15-17) | Satisfactory (12-14) | Needs Improvement (0-11) |
|----------|-------------------|--------------|----------------------|--------------------------|
| **Technical Challenges** | Identifies 4+ challenges with detailed solutions | Identifies 3 challenges with solutions | Identifies 2 challenges | Minimal challenge identification |
| **Resource Planning** | Comprehensive resource plan with realistic estimates | Good resource planning | Basic resource outline | Incomplete or unrealistic planning |
| **Agile Methodology** | Detailed sprint plan with clear deliverables | Good sprint structure | Basic milestone outline | Unclear or missing plan |

### 3. Implementation (CCC.1.3) - 20 points

| Criteria | Excellent (18-20) | Good (15-17) | Satisfactory (12-14) | Needs Improvement (0-11) |
|----------|-------------------|--------------|----------------------|--------------------------|
| **Code Quality** | Clean, well-organized, follows best practices | Good structure, minor issues | Functional but inconsistent | Poor organization or quality |
| **Tools & Practices** | Uses 3+ industry tools effectively | Uses 2-3 tools appropriately | Uses basic tools | Limited tool usage |
| **Implementation Approach** | Clear methodology, well-documented | Good approach, adequate docs | Basic approach | Unclear or undocumented |

### 4. Testing & Improvement (CCC.1.4) - 20 points

| Criteria | Excellent (18-20) | Good (15-17) | Satisfactory (12-14) | Needs Improvement (0-11) |
|----------|-------------------|--------------|----------------------|--------------------------|
| **Testing Coverage** | ≥ 70% coverage, multiple test types | 50-69% coverage | 30-49% coverage | < 30% coverage |
| **Accessibility** | WCAG 2.1 AA compliant, well-tested | Mostly compliant, minor issues | Basic accessibility | Poor accessibility |
| **Performance** | Lighthouse scores ≥ ${projectData.techStackConfig.performanceTargets.lighthousePerformance}/90 | Scores 70-84 | Scores 60-69 | Scores < 60 |
| **User Testing** | Tests with 3+ user categories | Tests with 2 categories | Limited user testing | No user testing |

### 5. Documentation & Communication (CCC.1.5) - 20 points

| Criteria | Excellent (18-20) | Good (15-17) | Satisfactory (12-14) | Needs Improvement (0-11) |
|----------|-------------------|--------------|----------------------|--------------------------|
| **Documentation** | Comprehensive, professional docs | Good documentation | Basic documentation | Incomplete or unclear |
| **Technical Terminology** | Accurate, appropriate terminology | Mostly accurate | Some inaccuracies | Poor terminology usage |
| **Presentation Skills** | Clear, confident, well-organized | Good presentation | Adequate presentation | Poor presentation |
| **Demo Quality** | Smooth, comprehensive demo | Good demo, minor issues | Basic demo | Poor or incomplete demo |

## Additional Criteria

### Bonus Points (up to 10 extra)

- **Innovation:** Creative solutions or features (+5)
- **Advanced Features:** Beyond MVP requirements (+5)
- **Open Source Contribution:** Documentation, PRs (+3)
- **Performance Excellence:** All Lighthouse scores ≥ 90 (+2)

### Deductions

- **Late Submission:** -5 points per day
- **Missing Deliverables:** -10 points per major item
- **Non-functional Demo:** -20 points
- **Plagiarism:** 0 points, academic integrity violation

## Oral Defense Format

### Part 1: Presentation (10 minutes)

1. **Problem & Solution** (2 min)
   - What problem are you solving?
   - Why is your solution valuable?

2. **Technical Implementation** (3 min)
   - Architecture overview
   - Key technical decisions
   - Tools and technologies used

3. **Demo** (3 min)
   - Live demonstration of key features
   - Mobile and desktop views
   - Error handling

4. **Results & Metrics** (2 min)
   - Performance metrics
   - Testing results
   - User feedback

### Part 2: Q&A (5-10 minutes)

**Sample Questions:**
- Why did you choose ${projectData.techStackConfig.name}?
- How did you handle [specific technical challenge]?
- What would you improve if you had more time?
- How does your solution compare to existing alternatives?
- Walk me through your testing strategy.

## Grading Guidelines

### Level 10 Competency Indicators

**Excellent (90-100):**
- Demonstrates mastery of all CCC.1 competencies
- Professional-quality deliverables
- Comprehensive testing and documentation
- Clear, confident communication

**Good (80-89):**
- Strong competency in all areas
- High-quality deliverables
- Good testing and documentation
- Effective communication

**Satisfactory (70-79):**
- Meets all competency requirements
- Functional deliverables
- Adequate testing and documentation
- Clear communication

**Needs Improvement (< 70):**
- Does not meet Level 10 competency standards
- Incomplete or poor-quality deliverables
- Insufficient testing or documentation
- Unclear communication

## Instructor Notes

- Schedule defenses at least 1 week in advance
- Provide rubric to students at project start
- Test demo setup before defense
- Take notes during presentation
- Provide written feedback within 3 days

## Student Preparation Checklist

- [ ] Presentation slides prepared
- [ ] Demo environment tested
- [ ] Backup demo (video) ready
- [ ] Project deployed and accessible
- [ ] Documentation complete
- [ ] Practice presentation (< 10 min)
- [ ] Anticipate Q&A questions
- [ ] Metrics and results ready to share
`;

  await fs.writeFile(path.join(outputDir, 'business-case/oral-defense-rubric.md'), content);
}

async function generatePresentationTemplate(outputDir, projectData) {
  const content = `# Oral Defense Presentation Template

## Slide Structure (10-12 slides)

### Slide 1: Title
- **Project Name:** ${projectData.projectTopic}
- **Your Name**
- **Date**
- **CCC.1 Level 10 Competency**

### Slide 2: Problem Statement
- What problem are you solving?
- Who are the target users?
- Why is this problem important?

**Key Points:**
- ${projectData.domainAnalysis.problemContext}
- Target users: ${projectData.domainAnalysis.targetUsers.slice(0, 2).join(', ')}

### Slide 3: Existing Solutions Analysis
- What alternatives exist?
- What are their limitations?
- Why is a new solution needed?

**Competing Solutions:**
${projectData.domainAnalysis.competingSolutions.map(s => `- **${s.name}:** ✅ ${s.pros} | ❌ ${s.cons}`).join('\n')}

### Slide 4: Solution Overview
- Your solution in one sentence
- Key features (3-5 bullets)
- Unique value proposition

**Our Solution:**
A ${projectData.techStackConfig.name} application featuring:
${projectData.domainAnalysis.coreFeatures.slice(0, 4).map(f => `- ${capitalize(f)}`).join('\n')}

### Slide 5: Technical Architecture
- Tech stack diagram
- Key technologies used
- Architecture decisions

**Tech Stack:**
- Frontend: ${projectData.techStackConfig.frontend}
- Routing: ${projectData.techStackConfig.routing}
- Data: ${projectData.techStackConfig.dataFetching}
- Styling: ${projectData.techStackConfig.styling}
- Testing: ${projectData.techStackConfig.testing}

### Slide 6: Technical Challenges
- 3-4 major challenges faced
- How you solved each one
- Lessons learned

**Challenges:**
${projectData.domainAnalysis.suggestedApis[0] !== 'No external API (local storage)'
  ? `1. API rate limiting → Caching with ${projectData.techStackConfig.dataFetching}`
  : '1. Data persistence → localStorage with error handling'}
2. Mobile performance → Image lazy loading, bundle optimization
3. Accessibility → WCAG 2.1 AA compliance

### Slide 7: Demo (Live)
- **Don't create a slide** - Live demo instead
- Show 3-4 key features
- Mobile and desktop views
- Error handling example

**Demo Flow:**
1. ${projectData.domainAnalysis.coreFeatures[0]}
2. ${projectData.domainAnalysis.coreFeatures[1] || 'View details'}
3. ${projectData.domainAnalysis.coreFeatures[2] || 'Save to favorites'}
4. Responsive design demonstration

### Slide 8: Testing & Quality
- Testing approach
- Coverage metrics
- Accessibility compliance
- Performance results

**Metrics:**
- Test Coverage: ≥ 70%
- Lighthouse Performance: ≥ ${projectData.techStackConfig.performanceTargets.lighthousePerformance}
- Lighthouse Accessibility: ≥ ${projectData.techStackConfig.performanceTargets.lighthouseAccessibility}
- WCAG 2.1 AA: Compliant

### Slide 9: Results & Impact
- Key metrics achieved
- User feedback (if available)
- Success criteria met

**Success Indicators:**
✅ All core features functional
✅ Responsive on all devices
✅ Meets performance targets
✅ Accessible to all users

### Slide 10: Lessons Learned
- What went well
- What was challenging
- What you would do differently
- Skills gained

### Slide 11: Future Enhancements
- Features not implemented (stretch goals)
- Scalability improvements
- Potential next steps

**Possible Enhancements:**
- User authentication
- Social features
- Advanced filtering
- Offline support
- Mobile app version

### Slide 12: Thank You
- Thank you message
- Live demo link
- GitHub repository link
- Questions?

## Presentation Tips

### Before the Presentation
- Practice your presentation 3+ times
- Time yourself (aim for 8-10 minutes)
- Test demo environment
- Prepare backup (video) if live demo fails
- Anticipate questions

### During the Presentation
- Speak clearly and confidently
- Make eye contact with audience
- Don't read slides verbatim
- Use technical terminology accurately
- Show enthusiasm for your project
- Handle demo issues gracefully

### Demo Best Practices
- Have application open in advance
- Clear browser cache if needed
- Use zoom for mobile view demonstration
- Narrate what you're doing
- Show both happy path and error handling
- Keep demo under 3 minutes

### Q&A Preparation

**Expected Questions:**
1. Why did you choose this tech stack?
2. How did you ensure accessibility?
3. What was the hardest technical challenge?
4. How does your solution compare to [competitor]?
5. What would you improve with more time?
6. Walk me through your testing strategy.
7. How did you handle [specific technical issue]?

**Answer Framework:**
1. Acknowledge the question
2. Provide context
3. Give specific answer with examples
4. Connect to competency framework

### Common Pitfalls to Avoid
- ❌ Reading slides word-for-word
- ❌ Rushing through demo
- ❌ Technical jargon without explanation
- ❌ Blaming tools or circumstances
- ❌ Admitting you didn't test something
- ❌ Not knowing your own code

### Do's
- ✅ Tell a story (problem → solution → results)
- ✅ Show genuine enthusiasm
- ✅ Acknowledge limitations honestly
- ✅ Highlight what you learned
- ✅ Demonstrate technical depth
- ✅ Connect to CCC.1 competencies
`;

  await fs.writeFile(path.join(outputDir, 'business-case/oral-defense-presentation-template.md'), content);
}

async function generateIncentiveRequirements(outputDir, projectData) {
  const content = `# Incentive Requirements - ${projectData.projectTopic}

## Bonus Point Opportunities

### Category 1: Technical Excellence (up to 15 points)

**Advanced Features (5 points each, max 10)**
- Implement user authentication
- Add social features (sharing, comments)
- Create offline support with Service Workers
- Build advanced search with filters
- Add data visualization (charts, graphs)
- Implement real-time features (WebSockets)

**Performance Excellence (5 points)**
- All Lighthouse scores ≥ 95
- Bundle size < 300KB
- First Contentful Paint < 1s
- Perfect accessibility score (100)

### Category 2: Testing & Quality (up to 10 points)

**Comprehensive Testing (5 points)**
- Test coverage ≥ 90%
- E2E tests with Playwright/Cypress
- Visual regression testing
- Performance testing suite

**Code Quality (5 points)**
- Zero ESLint warnings
- 100% TypeScript type coverage (if using TS)
- Automated CI/CD pipeline
- Code review comments addressed

### Category 3: Documentation & Communication (up to 10 points)

**Exceptional Documentation (5 points)**
- Complete API documentation
- Component Storybook
- Video tutorials for setup
- Architecture decision records (ADRs)

**Community Contribution (5 points)**
- Open source the project
- Write blog post about implementation
- Create YouTube tutorial
- Contribute to related open source projects

### Category 4: Innovation & Creativity (up to 10 points)

**Innovative Features (5 points)**
- AI/ML integration
- Unique UX patterns
- Novel technical solutions
- Creative problem-solving

**Design Excellence (5 points)**
- Professional UI/UX design
- Custom illustrations or animations
- Accessibility beyond AA (AAA compliance)
- Dark mode with theme switching

### Category 5: Learning & Growth (up to 5 points)

**Learning Reflection (3 points)**
- Detailed retrospective document
- Technical blog post
- Presentation to peers
- Mentor other students

**Skill Development (2 points)**
- Learn new technology during project
- Obtain relevant certification
- Complete related online course
- Contribute to tech community

## Recognition Programs

### Level 10 Excellence Award
**Criteria:** Score ≥ 95/100 + 10 bonus points
**Recognition:**
- Certificate of excellence
- Featured on department website
- Portfolio highlight
- Recommendation letter

### Innovation Award
**Criteria:** Exceptional creativity and technical innovation
**Recognition:**
- Special recognition certificate
- Present at department showcase
- Potential industry partnership

### Community Impact Award
**Criteria:** Significant open source contribution or community benefit
**Recognition:**
- Community recognition
- Featured in department newsletter
- Mentorship opportunities

## Stretch Goals by Skill Level

### Beginner Level
- Implement all MVP features with high quality
- Achieve 70%+ test coverage
- Meet all accessibility standards
- Deploy successfully

### Intermediate Level
- All beginner goals +
- Add 1-2 advanced features
- Achieve 80%+ test coverage
- Lighthouse scores ≥ 90
- Comprehensive documentation

### Advanced Level
- All intermediate goals +
- Add 3+ advanced features
- Achieve 90%+ test coverage
- All Lighthouse scores ≥ 95
- Open source contribution
- Innovative technical solutions

## Submission for Bonus Points

**Requirements:**
1. Document feature in README
2. Demonstrate in oral defense
3. Include in GitHub repository
4. Provide evidence of completion

**Deadline:** Same as main project deadline

**Evaluation:**
- Instructor will review during oral defense
- Bonus points added to final grade
- Maximum total score: 110/100

## Tips for Earning Bonus Points

1. **Plan Early:** Identify bonus opportunities during sprint planning
2. **Prioritize:** Focus on MVP first, then add extras
3. **Document:** Keep detailed notes on bonus work
4. **Quality Over Quantity:** One excellent feature > multiple mediocre features
5. **Ask Questions:** Clarify requirements with instructor

## Important Notes

- Bonus points cannot replace missing core requirements
- Must achieve ≥ 70/100 on base rubric first
- Bonus work must be functional and well-documented
- Submit bonus work documentation separately
`;

  await fs.writeFile(path.join(outputDir, 'business-case/incentive-requirements.md'), content);
}

async function generateCanvaGuide(outputDir, projectData) {
  const content = `# Canva Presentation Design Guide

## Using Canva for Your Oral Defense

Canva is a free, easy-to-use design tool perfect for creating professional presentations.

**Website:** https://www.canva.com/

## Getting Started

1. **Create Account:** Sign up with your student email for free
2. **Choose Template:** Search "Tech Presentation" or "Project Presentation"
3. **Customize:** Replace placeholder content with your project information

## Recommended Templates

Search Canva for:
- "Software Development Presentation"
- "Tech Startup Pitch Deck"
- "Project Portfolio Presentation"
- "Modern Tech Presentation"

## Design Principles

### 1. Color Scheme
- **Use 2-3 colors maximum**
- Match your project branding
- Ensure good contrast for readability
- Suggested: Blue (#3b82f6) + Gray (#111827) + White

### 2. Typography
- **Headings:** Bold, large (36-48pt)
- **Body Text:** Regular, readable (18-24pt)
- **Code Snippets:** Monospace font
- Maximum 2 font families

### 3. Layout
- **Consistent:** Use same layout template for similar slides
- **White Space:** Don't overcrowd slides
- **Alignment:** Keep elements aligned (use grid)
- **Hierarchy:** Clear visual hierarchy

### 4. Images & Icons
- **High Quality:** Use HD images only
- **Relevant:** Images should support your content
- **Icons:** Use Canva's icon library for consistency
- **Screenshots:** Crop and annotate project screenshots

## Slide Templates

### Title Slide
- Large project name
- Your name and date
- Simple background (gradient or solid color)
- Optional: Project logo or icon

### Content Slide
- Bold heading at top
- 3-5 bullet points
- Icon or image on right
- Page number at bottom

### Technical Slide
- Diagram or architecture visual
- Minimal text
- High contrast for readability

### Demo Slide
- Large screenshot of your app
- Annotations with arrows
- Clear labels

## Canva Features to Use

### Elements
- **Lines & Shapes:** Create dividers, backgrounds
- **Icons:** Add visual interest (search by keyword)
- **Charts:** Display metrics and results
- **Frames:** Add borders to screenshots

### Design Tools
- **Grid:** Align elements perfectly
- **Spacing:** Consistent padding
- **Color Picker:** Match project colors
- **Transparency:** Layer elements

### Pro Tips
- Use **Templates** for consistency
- **Duplicate slides** for similar layouts
- **Brand Kit** (free for students) for color consistency
- **Present mode** to test before oral defense

## Exporting Your Presentation

**Recommended Format:**
- **PDF** (safest, works everywhere)
- **PowerPoint** (if you need animations)

**Export Steps:**
1. Click "Share" button
2. Select "Download"
3. Choose "PDF - Standard" or "PowerPoint"
4. Download and test on presentation computer

## Accessibility in Canva

- Use high contrast text (black on white, white on dark)
- Font size ≥ 18pt for body text
- Add alt text to images (right-click → Alt text)
- Avoid red/green only color combinations
- Test with "Accessibility Checker" (Canva Pro feature)

## Sample Slide Content

### Slide: Problem Statement
**Layout:**
- Heading: "Problem Statement"
- 3-4 bullet points with icons
- Image or illustration on right
- Source citation if needed

**Content:**
- ${projectData.domainAnalysis.problemContext}
- Users: ${projectData.domainAnalysis.targetUsers[0]}
- Impact: [your project's impact]

### Slide: Tech Stack
**Layout:**
- Heading: "Tech Stack"
- Logo grid (3x3 or 4x4)
- Each logo with label underneath

**Content:**
- ${projectData.techStackConfig.frontend}
- ${projectData.techStackConfig.routing}
- ${projectData.techStackConfig.dataFetching}
- ${projectData.techStackConfig.styling}
- ${projectData.techStackConfig.testing}

### Slide: Results
**Layout:**
- Heading: "Results & Metrics"
- 4 stat boxes with icons
- Color-coded (green for good, yellow for warning)

**Content:**
- Lighthouse Performance: ${projectData.techStackConfig.performanceTargets.lighthousePerformance}+
- Lighthouse Accessibility: ${projectData.techStackConfig.performanceTargets.lighthouseAccessibility}+
- Test Coverage: 70%+
- WCAG 2.1 AA: Compliant

## Presentation Day Checklist

- [ ] Export presentation as PDF
- [ ] Test PDF on multiple devices
- [ ] Have backup copy on USB drive
- [ ] Have backup copy in email
- [ ] Test on presentation computer before defense
- [ ] Bring laptop as backup
- [ ] Have video demo as backup

## Alternatives to Canva

If Canva doesn't work for you:
- **Google Slides** (free, collaborative)
- **PowerPoint** (full-featured)
- **Figma** (for designers)
- **Keynote** (Mac only)
- **Slidev** (code-based, for developers)

## Resources

- [Canva Design School](https://www.canva.com/learn/)
- [Presentation Tips](https://www.canva.com/learn/presentation-design/)
- [Color Palette Generator](https://coolors.co/)
- [Free Stock Photos](https://unsplash.com/)
`;

  await fs.writeFile(path.join(outputDir, 'business-case/canva-presentation-design-guide.md'), content);
}

// Helper function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
