var buf = new Buffer('Hello', 'utf8');
console.log(buf);  // returns <Buffer 48 65 6c 6c 6f>
console.log(buf[2]);  // return the third value in the buffer
console.log(buf.toString());  // converts the buffer vaue back into a string
console.log(buf.toJSON());  // converts the buffer value into a JSON object
buf.write('wo')  //  replaces the first 2 objects in the buffer as buffers are set to finite lengths
console.log(buf.toString());
