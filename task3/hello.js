var fs = require('fs');

// Read the requested file content from file system
/*fs.readFile('welcome.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });*/

  // OR by Reading data directly in utf-8 format
  
  fs.readFile('welcome.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  