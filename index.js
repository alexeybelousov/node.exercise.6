const { Transform } = require('stream');
const fs = require('fs');
const crypto = require('crypto');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');

function sha1(data) {
   var hash = crypto.createHash('md5');
   hash.update(data);
   return hash.digest('hex');
}

const CTransform = new Transform({
  transform(chunk, encoding, done) {
    this.push(sha1(chunk));
    done();
  }
});

input.pipe(CTransform);
CTransform.pipe(output);
CTransform.pipe(process.stdout);
