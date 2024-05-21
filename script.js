
//? Question1
const fs = require('fs')

fs.readFile("file.txt", (err, data) => {
    if (err) throw 'error';
  
    console.log(data.toString());
    let arr=data.toString().replace('\r\n',' ').split(' ')
    console.log(arr.length)
  });

  //? Question2
  const readXlsxFile = require('read-excel-file/node')

  // File path.
  readXlsxFile('./students.xlsx').then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    console.log(rows);
    let sum = 0
    rows.forEach(element => sum+=element[1])
    console.log(sum/rows.length)
  })