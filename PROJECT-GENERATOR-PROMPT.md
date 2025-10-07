# Educational Project Generator - Engineered Prompt

> **Purpose:** Generate a complete educational project structure with documentation, milestones, and learning materials from just a project topic or name.

---

## START OF PROMPT ⬇️

PROJECT_TOPIC=[NEXTJS MOVIE BROWSER USING OMDB API]
```
I need you to generate a complete educational project structure for: [PROJECT_TOPIC]

Generate a comprehensive, student-friendly project following this exact structure and documentation format:

## PROJECT REQUIREMENTS:

### 1. CORE STRUCTURE
Create the following directory structure:

```
[project-name]/
├── README.md                              # Main project scope (CCC.1 Level 10 format)
├── CLAUDE.md                              # AI assistant context file
├── .gitignore                             # Git ignore file
├── start_here.md                          # Student onboarding guide
├── overview.md                            # High-level project overview
├── 00-problem.md                          # Problem statement
├── 01-project-scope.md                    # Detailed scope document
├── 02-wireframes-overview.md              # UI/UX design guide
├── 03-trello-project-board-guide.md       # Agile board setup
├── 04-SETUP_INSTRUCTIONS.md               # Setup and deployment
├── project-requirements-scope.md          # Fillable requirements template
├── PROJECT-SCOPE-TEMPLATE.md              # Fillable CCC.1 Level 10 template
├── TODO.md                                # Project checklist
│
├── milestone/
│   ├── Milestone1/
│   │   └── m1.md                         # Sprint 1 detailed guide
│   ├── Milestone2/
│   │   └── m2.md                         # Sprint 2 detailed guide
│   ├── Milestone3/
│   │   └── m3.md                         # Sprint 3 detailed guide
│   └── Milestone4/
│       └── m4.md                         # Sprint 4 detailed guide
│
├── img/                                   # Wireframes and diagrams
│   ├── Step-0.png                        # Initial state
│   ├── Step-01.png                       # Core feature
│   ├── Step-02.png                       # Advanced feature
│   ├── Step-03.png                       # Detail view
│   └── Step-04.png                       # Complete flow
│
├── learn-more/
│   └── resources.md                      # Learning resources
│
├── tech-skills/
│   ├── [skill-1].md                      # Technical skill guide 1
│   ├── [skill-2].md                      # Technical skill guide 2
│   └── [skill-3].md                      # Technical skill guide 3
│
├── facilitation-guide/
│   ├── project-schedule.md               # Instructor timeline
│   ├── example-week.md                   # Weekly breakdown
│   ├── micro-milestones.md               # Daily objectives
│   └── term-example.md                   # Full term schedule
│
└── business-case/
    ├── oral-defense-rubric.md            # Grading rubric
    ├── oral-defense-presentation-template.md
    ├── incentive-requirements.md         # Bonus criteria
    └── canva-presentation-design-guide.md
```

### 2. DOCUMENTATION STANDARDS

Each document must follow these requirements:

#### README.md (Main Project Scope)
- CCC.1 Level 10 competency framework format
- 5 major sections (CCC.1.1 through CCC.1.5)
- Problem statement with stakeholder analysis
- Technical challenges with solutions
- 4-sprint Agile plan
- Tools and best practices with code examples
- Testing strategy with user categories
- Metrics and success criteria
- Professional, formal tone throughout

#### CLAUDE.md (AI Context File)
- Tech stack overview
- Essential commands (package manager, dev, build, test)
- Architecture and component hierarchy
- Directory structure explanation
- State management patterns
- Critical requirements (environment variables, styling conventions)
- API integration details
- Development milestones overview
- Testing guidelines
- Common code patterns
- Important project-specific notes

#### Milestone Files (m1.md - m4.md)
Each milestone must include:
- **Goal:** One-sentence sprint objective
- **Duration:** Time estimate (e.g., Days 1-2)
- **Learning Objectives:** Skills students will develop
- **Deliverables Checklist:** With ✅ checkboxes
- **Step-by-Step Instructions:** Numbered tasks with:
  - Detailed explanations
  - Code examples
  - Terminal commands
  - File paths
  - Expected output
- **Testing Tasks:** How to verify completion
- **Common Issues & Solutions:** Troubleshooting guide
- **Resources:** Links to documentation
- **Success Criteria:** Clear completion criteria

#### project-requirements-scope.md (Fillable Template)
- Section for every planning aspect
- [FILL IN] placeholders throughout
- 💡 Tips and examples in each section
- Guided instructions for students
- Includes: goals, users, features, tech stack, timeline, risks, testing strategy

#### PROJECT-SCOPE-TEMPLATE.md (CCC.1 Level 10 Template)
- Follows exact CCC.1 competency structure
- [FILL IN] placeholders for all sections
- Learning objectives for each section
- Tips, examples, and anti-patterns
- Success indicators checklist at end
- Approval sign-off section

### 3. CONTENT GENERATION RULES

When generating content, follow these principles:

**For Technical Projects:**
- Identify appropriate tech stack (frontend framework, backend, database, APIs)
- Define clear folder structure matching best practices
- Include package manager setup (prefer pnpm)
- Specify environment variables needed
- Include deployment instructions

**For Problem Statements:**
- Research real-world pain points in the domain
- Identify 3-5 competing solutions with pros/cons
- Define primary, secondary, and tertiary stakeholders
- List technical, resource, and accessibility constraints
- Identify future scalability challenges

**For Sprint Planning:**
- Sprint 1: Setup, routing, basic structure, base CSS
- Sprint 2: Core feature implementation with API integration
- Sprint 3: Advanced features, data persistence, detail views
- Sprint 4: Testing, accessibility, performance optimization, deployment

**For User Stories:**
Format as: "As a [user type], I want [feature] so that [benefit]"
Include acceptance criteria for each story

**For Technical Skills Guides:**
- Beginner-friendly explanations
- Code examples with comments
- Step-by-step tutorials
- Common pitfalls section
- Links to official documentation

**For Accessibility:**
- WCAG 2.1 AA compliance targets
- Lighthouse score targets (Performance ≥ 85, A11y ≥ 90)
- Keyboard navigation requirements
- Screen reader compatibility
- Color contrast requirements (≥ 4.5:1)

**For Testing Strategy:**
- Unit tests (hooks, utilities)
- Component tests (UI components)
- Integration tests (user flows)
- Accessibility tests (keyboard nav, screen readers)
- Performance tests (Lighthouse, network throttling)
- Cross-browser testing matrix

### 4. TONE AND STYLE REQUIREMENTS

- **Student-Facing Docs:** Encouraging, instructional, use "you/your", include emojis for visual breaks
- **Technical Docs:** Professional, precise, use code examples, reference industry standards
- **Templates:** Structured with clear placeholders, extensive inline guidance, real examples
- **Assessment Docs:** Formal, objective, criteria-based, measurable

### 5. SPECIAL REQUIREMENTS

**API Integration:**
If the project requires an API, specify:
- API name and endpoint
- Authentication method
- Rate limits
- Free tier availability
- Data models with field descriptions
- Error handling strategies

**Performance Targets:**
Define measurable goals:
- Load time (< 2s preferred)
- Bundle size (< 500KB preferred)
- Lighthouse scores (Performance ≥ 85, A11y ≥ 90)
- Time to Interactive (< 3s)

**Accessibility:**
Must include:
- Semantic HTML requirements
- ARIA label examples
- Keyboard navigation flow
- Focus management strategy
- Screen reader testing instructions

**Testing Coverage:**
- Target: ≥ 70% overall coverage
- 100% coverage for critical paths
- Test types: unit, component, integration, e2e (optional), accessibility

### 6. LEARNING SCAFFOLDING

Every milestone should include:
- **Pre-requisite Skills:** What students need to know before starting
- **New Concepts Introduced:** What they'll learn in this milestone
- **Stretch Goals:** Optional advanced features
- **Reflection Questions:** Help students think critically about their work

### 7. FINAL DELIVERABLES CHECKLIST

The generated project must include:

**Documentation (13 files minimum):**
- [ ] README.md (CCC.1 Level 10 format)
- [ ] CLAUDE.md (AI context)
- [ ] start_here.md
- [ ] overview.md
- [ ] 00-problem.md
- [ ] 01-project-scope.md
- [ ] 02-wireframes-overview.md
- [ ] 03-trello-project-board-guide.md
- [ ] 04-SETUP_INSTRUCTIONS.md
- [ ] project-requirements-scope.md (template)
- [ ] PROJECT-SCOPE-TEMPLATE.md (template)
- [ ] TODO.md
- [ ] .gitignore

**Milestone Guides (4 files):**
- [ ] milestone/Milestone1/m1.md
- [ ] milestone/Milestone2/m2.md
- [ ] milestone/Milestone3/m3.md
- [ ] milestone/Milestone4/m4.md

**Support Materials:**
- [ ] learn-more/resources.md
- [ ] 3+ tech skill guides in tech-skills/
- [ ] 4+ facilitation guides in facilitation-guide/
- [ ] 4+ business case docs in business-case/

**Total: 30+ files minimum**

---

## NOW GENERATE FOR: [PROJECT_TOPIC]

Based on the topic/project name above:

1. **Analyze the domain** - Research the problem space and identify user pain points
2. **Define the tech stack** - Choose appropriate technologies for the skill level (intermediate)
3. **Structure the curriculum** - Create 4 sprints that build progressively
4. **Generate all files** - Follow the exact structure and requirements above
5. **Ensure quality** - Every document should be publication-ready, no placeholders except in templates

**Additional Context to Consider:**
- Target Audience: College/university students (ages 18-25)
- Skill Level: Intermediate (knows programming basics, learning frameworks)
- Duration: 2 weeks (10 working days)
- Competency Framework: CCC.1 Develop Technology Solutions (Level 10)
- Constraints: Free tier services only, no budget, solo developer

**Start with:** Creating the main README.md file with complete CCC.1 Level 10 documentation, then proceed through all other files systematically.
```

### END OF PROMPT ⬆️

---

## 🎓 How to Use This Prompt

### Step 1: Choose Your Project Topic

Replace `[PROJECT_TOPIC]` with any of these formats:

**Format Option 1: Simple Topic**
- "Recipe Sharing App"
- "Fitness Tracker"
- "Budget Manager"
- "Book Library System"
- "Task Management App"

**Format Option 2: Topic + Tech Preference**
- "Weather Dashboard using React and Weather API"
- "E-commerce Store with Next.js"
- "Music Player with Spotify API"
- "Blog Platform with Python Flask"

**Format Option 3: Learning Goal**
- "Full-stack web app to learn React + Node.js"
- "Mobile-responsive app to practice CSS Grid"
- "API integration project to learn data fetching"

### Step 2: Customize (Optional)

Add specific requirements after the topic:

```
Additional Requirements:
- Must use [specific technology]
- Should integrate with [specific API]
- Target skill level: [beginner/intermediate/advanced]
- Duration: [1 week / 2 weeks / 4 weeks]
- Special focus: [accessibility / performance / testing]
```

### Step 3: Generate

Paste the complete prompt to Claude Code or another AI assistant and let it generate the full project structure.

### Step 4: Review and Adjust

- Check that all 30+ files are generated
- Verify tech stack matches your environment
- Ensure API keys are obtainable (free tier)
- Adjust timeline if needed
- Customize for your specific curriculum

---

## 📐 Project Pattern Recognition

The generator follows these proven patterns:

### Architecture Pattern
```
App → Shell → Pages → Components → Hooks → Services → API
```

### Sprint Pattern
1. **Foundation** (Setup + Structure)
2. **Core Feature** (Main functionality + API)
3. **Advanced Features** (Additional functionality + Persistence)
4. **Polish** (Testing + A11y + Performance + Deploy)

### Documentation Pattern
```
Problem → Planning → Implementation → Testing → Communication
(Maps directly to CCC.1.1 → CCC.1.2 → CCC.1.3 → CCC.1.4 → CCC.1.5)
```

### Learning Progression
```
Guided (M1) → Supported (M2) → Independent (M3) → Mastery (M4)
```

---

## 🔧 Customization Variables

When generating projects, the prompt intelligently adapts:

| Variable | Determines |
|----------|------------|
| **Topic/Domain** | API choice, features, user stories, problem statement |
| **Skill Level** | Code complexity, scaffolding amount, explanation depth |
| **Duration** | Sprint length, feature scope, testing depth |
| **Tech Stack** | Folder structure, dependencies, setup instructions |
| **API Availability** | Fallback strategies, mock data, caching approach |

---

## 🎯 Quality Checklist

Generated projects should meet these standards:

**✅ Completeness**
- All 30+ files present
- No `[TODO]` or `[PLACEHOLDER]` in non-template files
- Every section filled with real content

**✅ Educational Value**
- Clear learning objectives per milestone
- Scaffolded difficulty progression
- Reflection prompts included

**✅ Technical Accuracy**
- Tech stack is current and maintained
- APIs are free and accessible
- Commands are tested and work
- Code examples follow best practices

**✅ Professional Standards**
- CCC.1 Level 10 compliance
- Industry-standard terminology
- Measurable success criteria
- Formal documentation tone

**✅ Student-Friendliness**
- Clear instructions with examples
- Troubleshooting sections included
- Resources and links provided
- Encouraging, supportive tone

---

## 📊 Example Transformations

### Input → Output Examples

**Input:** "Recipe Sharing App"

**Generated Tech Stack:**
- Frontend: React + Vite
- API: Spoonacular API (free tier)
- Storage: localStorage
- Styling: CSS3 Grid/Flexbox
- Testing: Vitest + RTL

**Generated Features:**
- Search recipes by ingredients
- View detailed recipe with instructions
- Save favorite recipes locally
- Responsive grid layout
- Nutrition information display

**Generated Milestones:**
- M1: Setup + Recipe search interface
- M2: API integration + Recipe cards
- M3: Detail view + Favorites system
- M4: Testing + Accessibility + Deploy

---

**Input:** "Budget Manager using TypeScript"

**Generated Tech Stack:**
- Frontend: React + TypeScript + Vite
- State: Zustand
- Storage: IndexedDB (Dexie.js)
- Charts: Chart.js
- Styling: CSS Modules

**Generated Features:**
- Add income/expense transactions
- Categorize transactions
- View spending by category (charts)
- Set budget limits with alerts
- Export data to CSV

**Generated Milestones:**
- M1: Setup + Transaction form + TypeScript types
- M2: Transaction list + Categories + Local storage
- M3: Charts + Budget limits + Alerts
- M4: CSV export + Testing + Performance

---

## 🚀 Advanced Usage

### Multi-Project Curriculum

Generate a series of progressive projects:

```
Project 1: [TOPIC_1] - Duration: 1 week - Focus: Basics
Project 2: [TOPIC_2] - Duration: 2 weeks - Focus: API Integration
Project 3: [TOPIC_3] - Duration: 3 weeks - Focus: Full-Stack

Each project builds on skills from previous projects.
```

### Team Projects

Modify the prompt to generate team-based projects:

```
Additional Requirement:
- Team size: 3-4 students
- Include role assignments (Frontend, Backend, DevOps, QA)
- Add collaboration milestones
- Include peer review rubric
```

### Specialized Focus

Generate projects with specific learning goals:

```
Special Focus: Accessibility
- All milestones emphasize WCAG compliance
- Include screen reader testing in every sprint
- Provide accessible component patterns
- Target Lighthouse A11y score: 100
```

---

## 📝 Maintenance and Updates

### Keeping Projects Current

To update generated projects:

1. **Tech Stack Updates:**
   - Replace deprecated packages in CLAUDE.md
   - Update version numbers in setup instructions
   - Test commands and fix breaking changes

2. **API Changes:**
   - Verify API endpoints still work
   - Update authentication methods if changed
   - Check rate limits and adjust caching

3. **Framework Updates:**
   - Update code patterns to latest best practices
   - Replace deprecated hooks/methods
   - Update testing patterns

### Version Control

Recommended versioning:

```
v1.0.0 - Initial generation
v1.1.0 - API update (OMDb API v3 → v4)
v1.2.0 - Added TypeScript variant
v2.0.0 - Tech stack upgrade (React 18 → React 19)
```

---

## 🎓 Instructor Notes

### Using Generated Projects in Curriculum

**Week-by-Week Integration:**
- Week 1-2: Students complete Milestone 1 & 2
- Week 3-4: Students complete Milestone 3 & 4
- Week 5: Presentations and peer reviews

**Assessment Alignment:**
- Use provided rubrics in business-case/
- Map milestones to course learning outcomes
- Track progress with TODO.md checklists

**Differentiation:**
- **Advanced students:** Assign stretch goals from milestones
- **Struggling students:** Provide extra scaffolding from learn-more/
- **Mixed abilities:** Use micro-milestones for daily targets

### Facilitation Tips

1. **Pre-Project Prep:**
   - Review all milestone files before assigning
   - Test API endpoints and get API keys
   - Set up example deployment
   - Prepare common issues FAQ

2. **During Project:**
   - Daily standups using facilitation-guide/
   - Check progress against TODO.md
   - Address blockers early
   - Celebrate milestone completions

3. **Post-Project:**
   - Use oral-defense-rubric.md for presentations
   - Conduct retrospectives
   - Document lessons learned
   - Update project docs based on feedback

---

## 🔍 Troubleshooting Common Issues

### Issue: API Rate Limits Hit During Testing

**Solution:** Update caching strategy in CLAUDE.md
```javascript
// Increase stale time
staleTime: 1000 * 60 * 10, // 10 minutes instead of 1
```

### Issue: Students Finish Too Quickly

**Solution:** Add stretch goals to each milestone
- Implement additional features from "Could-Have" list
- Add TypeScript types
- Improve accessibility beyond WCAG AA
- Optimize performance further

### Issue: Students Stuck on Setup

**Solution:** Create setup automation script
```bash
#!/bin/bash
# setup.sh - Automate initial setup
npm create vite@latest . -- --template react
pnpm install
pnpm install [dependencies]
cp .env.example .env
echo "Setup complete! Add your API key to .env"
```

---

## 📚 Additional Resources

### For Instructors
- [Facilitation Guide Template](./facilitation-guide/project-schedule.md)
- [Assessment Rubrics](./business-case/oral-defense-rubric.md)
- [Grading Guidelines](./business-case/incentive-requirements.md)

### For Students
- [Learning Resources](./learn-more/resources.md)
- [Technical Skill Guides](./tech-skills/)
- [Setup Instructions](./04-SETUP_INSTRUCTIONS.md)

### For Administrators
- CCC.1 Level 10 Competency Mapping
- Learning Outcomes Alignment
- Industry Standards Compliance

---

## 🎯 Success Metrics

Projects generated with this prompt should achieve:

- **95%+ Documentation Completeness** - All sections filled with real content
- **100% CCC.1 Compliance** - All 5 competency areas addressed
- **90%+ Student Completion Rate** - Students finish all 4 milestones
- **85+ Average Lighthouse Scores** - Performance and accessibility targets met
- **4.5/5+ Student Satisfaction** - Post-project surveys

---

## 📄 License & Attribution

This prompt engineering template is designed for educational use. Generated projects should include:

- Attribution to curriculum source
- Open-source licenses (MIT recommended)
- API attribution and terms of service compliance
- Student authorship acknowledgment

---

## 🔄 Continuous Improvement

**Feedback Loop:**
1. Collect student feedback after each cohort
2. Update prompt based on common issues
3. Test with new project topics
4. Refine documentation patterns
5. Share improvements with community

**Contribution Guidelines:**
- Document pain points encountered
- Suggest prompt improvements
- Share successful project topics
- Report API changes or deprecations

---

## 📞 Support

For issues with the prompt or generated projects:
- Check troubleshooting section above
- Review example projects for patterns
- Consult CLAUDE.md in generated project
- Refer to facilitation guide for instructor tips

---

**Last Updated:** 2025-10-03
**Prompt Version:** 1.0.0
**Compatible With:** Claude Code, GPT-4, Claude 3.5 Sonnet+

---

**Ready to generate your educational project? Copy the master prompt above and replace `[PROJECT_TOPIC]` with your desired project! 🚀**
