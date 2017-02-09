var crypto = require('crypto');
var fs = require('fs');
var q = require('q');
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
    var algo = 'md5';
    getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Md5: ') + chalk.green(d)));
}
function getSha1(file) {
    var algo = 'sha1';
    getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Sha1: ') + chalk.green(d)));
}
function getSha256(file) {
    var algo = 'sha256';
    getHashOfFile(algo, file)
        .then(d => console.log(chalk.gray('Sha256: ') + chalk.green(d)));
}
function getHashOfFile(algo, file){
    const deferred = q.defer();
    var shasum = crypto.createHash(algo);

    var s = fs.ReadStream(file);
    s.on('data', function(d) { shasum.update(d); });
    s.on('end', function() {
        const d = shasum.digest('hex');
        deferred.resolve(d);
    });

    return deferred.promise;
}
