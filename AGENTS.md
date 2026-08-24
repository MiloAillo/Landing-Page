delegate sub agent if needed. When prompting a subagent, always follow the user main prompt and be as detail as possible. Analyze any edge cases before prompting to subagent and make the subagent know about it.

## Closed-Loop Bug Fix Process

### User Instructions for Bug Fix Workflow:
1. **Commit access**: YES - Can commit after each fix step in git and push to GitHub
2. **Test/Lint commands**: Auto-verify using available npm scripts (lint, build)
3. **Approval gate**: AUTO-VERIFY - No manual approval needed, but create a log of pass/caveat
4. **Scope**: Fix ALL issues from CRITICAL → HIGH → MEDIUM → LOW
5. **Special note**: Re-read BUG_REPORT.md - ONE POINT DOESN'T NEED FIXING (user indicated this)
6. **Dependencies**: YES - Consider interdependencies (e.g., API URL fix before testing API calls)

### Workflow for Each Fix:
```
1. Read affected file(s)
2. Implement the fix
3. Run: npm run lint && npm run build
4. If passes → git commit with clear message + git push
5. If fails → diagnose and fix, then retry
6. Move to next issue
7. Log results: PASS or CAVEAT
```

### Git/GitHub Info:
- **User**: mischikomoe
- **Repo**: https://github.com/MiloAillo/Landing-Page.git
- **Current branch**: main
- **Push strategy**: Commit to main and push (user approved)
- **Commit message format**: `fix: [description]` or similar conventional commits

### Important Reminders:
- BUG_REPORT.md has 30 issues total (1 Critical, 6 High, 10 Medium, 13 Low)
- One point in the report doesn't need fixing - verify which one during execution
- Always push to GitHub after each commit
- Create implementation log showing pass/caveat status