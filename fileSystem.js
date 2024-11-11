
const fs = require('fs');

// Create welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt has been created.');

  // Read hello.txt (assuming it exists)
  fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('hello.txt not found.');
      return;
    }
    console.log(data);
  });
});
