const chalk = require('chalk');
const dashdash = require('dashdash');
const file = process.argv[2];

const output = require('./outputter');

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
        output.sha1(file);
    }
    if (opts.sha256) {
        output.sha256(file);
    }
    if (opts.md5) {
        output.md5(file);
    }
    if (opts.sha1 === undefined && opts.sha256 === undefined && opts.md5 === undefined){
        output.sha1(file);
        output.sha256(file);
        output.md5(file);
    }
}
