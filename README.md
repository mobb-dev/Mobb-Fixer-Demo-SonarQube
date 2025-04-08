# Mobb Fixer for GitHub - Demo

### A demo repo showing how Mobb Fixer for GitHub works

Mobb Fixer monitors your pull requests for security issues and produces accurate code fix suggestions on the spot.

> [!IMPORTANT]  
> For the workflow to run you must first:  
>
> 1. [Enable GitHub Actions](/../../actions) on this repo.  
> 2. Define the following secrets in the [repo's secrets page](/../../settings/secrets/actions):  
>    - `SONAR_TOKEN`: Your SonarCloud or SonarQube token ([guide](https://docs.sonarsource.com/sonarqube-cloud/advanced-setup/ci-based-analysis/github-actions-for-sonarcloud/))  
>    - `SONAR_HOST_URL`: Your Sonar instance URL (e.g., `https://sonarcloud.io`)  
>    - `SONAR_PROJECT_KEY`: Your project's key as defined in Sonar (see how to get it ([here](https://docs.sonarsource.com/sonarqube-cloud/advanced-setup/analysis-parameters/)) )
>    - `SONAR_ORGANIZATION`: Your SonarCloud organization key (see how to get it ([here](https://docs.sonarsource.com/sonarqube-cloud/advanced-setup/analysis-parameters/), or use `none` for on-prem)  

Then, click below to see how automatic fixes on pull requests work:

[<img width="250" alt="Start a vulnerable pull request" src="https://app.mobb.ai/gh-action/pull-request-button.svg" />](/../../compare/main...introduce-new-security-issue)

This will let you start a pull request from branch `introduce-new-security-issue` to branch `main`.

Once the PR is created, **SonarQube** will automatically start a security scan and report vulnerabilities.

**Mobb Fixer** will immediately run and present a fix suggestion in the PR conversation tab.

> [!TIP]  
> Click ***Commit fix*** to immediately apply the fix on the pull request.  
> The security scan will run again and flag the issue as "Fixed".

<br/>

<img src="mobb-fixer-demo.gif" />
