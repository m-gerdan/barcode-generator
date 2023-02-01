const fs = require('fs');
const code128Encoder = require('code-128-encoder');
const generatePdf = require('./generatePdf');
const code128 = new code128Encoder();

const rawCsvData = fs.readFileSync('./CSVData.csv', 'utf-8')
const parsedCsvData = rawCsvData.split(',\r\n')

parsedCsvData.forEach(skuCode => {
    const encodedskuCode = code128.encode(skuCode);
    if(encodedskuCode){
        generatePdf(encodedskuCode,skuCode, '/', 'barcodeTemplate.html', './output/'+skuCode)
    }
});





