const fs = require('fs');
const xml2js = require('xml2js');

fs.readFile('./prices.xml', 'utf-8', (err, data) => {

  if (err) {
    console.error('Error on lecture XML', err);
    return;
  }

  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error('Error on analyze XML:', err);
      return;
    }

    // Object JS with XML content
    console.log(result);
  });
});







