# AI Security Review

## Summary
Run a structured security review on a code change.

## What This Skill Does
- Walks a pull request file by file.
- Flags input validation gaps, injection risk, secret exposure.
- Checks unsafe deserialization and weak auth checks.
- Produces a prioritized findings list.

## When to Use This Skill
Before merging a non-trivial change that touches user input, auth, or third-party calls.

## Risk
This skill is rated **High** because reviewer judgement is required on every finding.
