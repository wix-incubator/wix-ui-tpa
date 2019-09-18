# Version Release Instructions

## Overview
Version releases are done from time to time, 
when there's enough content, or an important fix that we want to be published.

We use [semantic versioning](https://semver.org/) for managing our releases.  
This enables us to keep a high dev-velocity, with minimal fear of breaking our consumers' applications 
(let's be honest, there will always be this fear).

Just as a reminder, the semver rules are:
* Major version for breaking API changes.
* Minor version for adding functionality in a backwards-compatible manner.
* Patch version for backwards-compatible bug fixes

## What does a release include
So what happens when we create a release?

1. The version is updated in the `package.json` file (according to semver rules)
2. A [CHANGELOG.md](#changelog) file is generated from the latest commit messages
3. A git tag is created with the new version

## How to make a release
So how does a contributor make a release.  
It's pretty simple actually:

1. First make sure that you're on the master branch
2. Also, make sure the branch is clean and aligned to the `origin`
3. run `npm run release-candidate -- <option>`, where `option` is the new version type:
`major`, `minor`, `patch`, etc. (for more see [here](https://git-scm.com/book/en/v2/Git-Basics-Tagging)).  
If `option` is not passed then `patch` is used as a default
4. This will create a new branch `release/<version_number>`.  
Go over the differences to see that all went well.   
Push and open a PR.
5. Wait for the PR to pass all checks.
6. Merge PR with the title: `release: version <version_number>`

## CHANGELOG
The `CHANGELOG.md` file is generated using the [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) tool, which is used by Angular, among others.

In order for the `CHANGELOG` file to be generated correctly, PR's should be merged with commit messages
that follow the Angular [commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines).


