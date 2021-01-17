const fs = require('fs');
const simpleGit = require('simple-git/promise');
const chalk = require('chalk');

const sGit = simpleGit();

const [, , startDate, endDate] = process.argv;

(async function () {
    const commits = await sGit.log([`--since=${startDate}`, `--until=${endDate || Date.now()}`]);
    const data = commits.all.reduce((acc, commit) => {
        return `${acc}
    \"${commit.message.replace(/"/g, '')}\",\"${commit.author_name}\",\"${commit.author_email}\",\"${new Date(commit.date).toUTCString()}\"`
    }, '')
    console.log(chalk.green('writing data to report.csv'));
    fs.writeFileSync('report.csv', data)
}())
