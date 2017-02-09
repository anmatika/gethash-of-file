const crypto = require('crypto');
const fs = require('fs');
const chalk = require('chalk');
const file = process.argv[2];

if (file === undefined){
    console.log(chalk.red('ERROR: Please give the file.'));
    process.exit(1);
}

getMd5(file);
getSha1(file);
getSha256(file);

function getMd5(file) {
    const algo = 'md5';
    getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Md5: ') + chalk.green(d)))
        .catch(e => console.log(chalk.red('ERROR: MD5 failed.', e)));
}
function getSha1(file) {
    const algo = 'sha1';
    getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Sha1: ') + chalk.green(d)))
        .catch(e => console.log(chalk.red('ERROR: Sha1 failed.', e)));
}
function getSha256(file) {
    const algo = 'sha256';
    getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Sha256: ') + chalk.green(d)))
        .catch(e => console.log(chalk.red('ERROR: Sha256 failed.', e)));
}
function getHashOfFile(algo, file){
    const promise = new Promise((resolve, reject) => {
        const shasum = crypto.createHash(algo);
        const s = fs.ReadStream(file);
        s.on('error', e => { reject(e); });
        s.on('data', d => { shasum.update(d); });
        s.on('end', () => {
            const d = shasum.digest('hex');
            resolve(d);
        });
    });

    return promise;
}
