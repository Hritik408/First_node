const fs = require('fs');
const transformStream = require('stream');
let fileStream = fs.createReadStream(__dirname + "/input.txt");
// let filestream = fs.createReadStream(__dirname, "/input.txt");
let outputStream = process.stdout;

let middleStream = new transformStream.Transform({
         transform(chunk, enc, nextCB) {
            let modifyChunk = chunk.toString().toUpperCase();
            this.push(modifyChunk);
            setTimeout(nextCB, 1000);
         }
})

let newReadableStream = fileStream.pipe(middleStream)
newReadableStream.pipe(outputStream);   // writeStream.pipe(readStream)