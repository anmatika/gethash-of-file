const reader = require('./reader');
const chalk = require('chalk');
const dashdash = require('dashdash');
const file = process.argv[2];

if (file === undefined){
    console.log(chalk.red('ERROR: Please give the file.'));
    process.exit(1);
}

run();

function run() {
    const opts = getCommandlineOptions();
    outputHashes(opts);
}

function getCommandlineOptions() {
    const options = [
        { name: 'sha1', type: 'bool' },
        { name: 'sha256', type: 'bool' },
        { name: 'md5', type: 'bool' }
    ];
    const opts = dashdash.parse({options: options});
    return opts;
}

function outputHashes(opts){
    if (opts.sha1) {
        outputSha1(file);
    }
    if (opts.sha256) {
        outputSha256(file);
    }
    if (opts.md5) {
        outputMd5(file);
    }
    if (opts.sha1 === undefined && opts.sha256 === undefined && opts.md5 === undefined){
        outputSha1(file);
        outputSha256(file);
        outputMd5(file);
    }
}

function outputMd5(file) {
    const algo = 'md5';
    reader.getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Md5: ') + chalk.green(d)))
        .catch(e => console.log(chalk.red('ERROR: MD5 failed.', e)));
}
function outputSha1(file) {
    const algo = 'sha1';
    reader.getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Sha1: ') + chalk.green(d)))
        .catch(e => console.log(chalk.red('ERROR: Sha1 failed.', e)));
}
function outputSha256(file) {
    const algo = 'sha256';
    reader.getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Sha256: ') + chalk.green(d)))
        .catch(e => console.log(chalk.red('ERROR: Sha256 failed.', e)));
}
