const reader = require('./reader');
const chalk = require('chalk');

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

module.exports.md5 = outputMd5;
module.exports.sha1 = outputSha1;
module.exports.sha256 = outputSha256;
