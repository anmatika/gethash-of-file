const crypto = require('crypto');
const fs = require('fs');

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

module.exports.getHashOfFile = getHashOfFile;
