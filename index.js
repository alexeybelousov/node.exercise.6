const { Transform } = require('stream');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');

const CTransform = new Transform({
  transform(chunk, encoding, callback) {

    // тут необходимо конвертировать бинарные данные?

    this.push(chunk);
    callback();
  }
});

input.pipe(CTransform).pipe(output);

// const Transform = require('stream').Transform;
//
// class CTransform extends Transform {
//   constructor(options) {
//     super(options);
//   }
//
//   _transform(chunk, encoding, done) {
//     console.log('_transform');
//     this.push(chunk);
//     done();
//   }
// }















// const fs = require('fs');
//
// const input = fs.createReadStream('input.txt');
// const output = fs.createWriteStream('output.txt');
//
// input.on('readable', function() {
//   while(data = input.read()) {
//     console.log(data.length);
//   }
// });
//
// output.write('hello');
// output.end('world');

// const crypto = require('crypto');
// const fs = require('fs');
//
// const md5sum = crypto.createHash('md5');
// //
// const input = fs.createReadStream('input.txt');
// const output = fs.createWriteStream('output.txt');
//
// input.
//   pipe(crypto.createHash('md5').setEncoding('hex')).
//   pipe(output);


//---------------------------------------------------

// const Readable = require('stream').Readable;
//
// class CReadable extends Readable {
//   constructor(options) {
//     super(options);
//     this.count = 0;
//   }
//
//   _read(size) {
//     const result = this.push(this.count + ' | ' + size.toString());
//   }
// }
//
// const input = new CReadable();
//
// input.on('data', console.log)
// input.on('readable', function() {
//   let data;
//
//   while(data = input.read()) {
//     console.log(data.toString());
//   }
// });
//
// input.pause();
//
// //---------------------------------------------------
//
// const Writable = require('stream').Writable;
//
// class CWritable extends Writable {
//   constructor(options) {
//     super(options);
//   }
//
//   _write(chunk, encoding, done) {
//     console.log('_write');
//     console.log(chunk.toString());
//     done();
//   }
// }
//
// let tt = new CWritable();
//
// tt.write('START');
// tt.write('1');
// tt.write('2');
// setTimeout(function() {
//   tt.end('DONE');
// }, 2000)

// //---------------------------------------------------------

// const crypto = require('crypto');
// const fs = require('fs');
//
// const input = fs.createReadStream('input.txt');
// const output = fs.createWriteStream('output.txt');
//
// input
//   .pipe(crypto.createHash('sha1').setEncoding('hex'))
//   .on('finish', function () {
//     let data = this.read();
//     console.log(data)
//     output.write(data);
//   });

// Эта запись короче но не понятно как вывестиданные в консоль хеш
// input
//   .pipe(crypto.createHash('md5').setEncoding('hex'))
//   .pipe(output);


// Или так? но как получить в стриме записи данные чтобы вывести в консоль?
// const hash = crypto.createHash('sha1').setEncoding('hex');
//
// input
//   .pipe(hash)
//   .pipe(output)
//   .on('finish', function () {
//     console.log(?);
//   });
