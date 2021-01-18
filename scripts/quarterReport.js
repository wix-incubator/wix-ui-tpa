#!/usr/bin/env node

const fs = require('fs');
const simpleGit = require('simple-git/promise');
const chalk = require('chalk');
const yargs = require('yargs');

const arguments = yargs
    .scriptName('quarter-report')
    .option('start', {
        alias: 's',
        demandOption: true,
        describe: 'start date (YYYY-MM-DD)'
    })
    .option('end', {
        alias: 'e',
        demandOption: true,
        describe: 'end date (YYYY-MM-DD)'
    })
    .help()
    .argv

const sGit = simpleGit();
const { start, end } = arguments;

(async function () {
    const commits = await sGit.log([`--since=${start}`, `--until=${end || Date.now()}`]);
    const data = commits.all.reduce((acc, commit) => {
        return `${acc}
    \"${commit.message.replace(/"/g, '')}\",\"${commit.author_name}\",\"${commit.author_email}\",\"${new Date(commit.date).toUTCString()}\"`
    }, '')
    console.log(chalk.green('writing data to report.csv'));
    fs.writeFileSync('report.csv', data)
}())
