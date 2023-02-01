const fs = require('fs');
const code128Encoder = require('code-128-encoder');
const generatePdf = require('./generatePdf');
const code128 = new code128Encoder();

const htmlTemplate = fs.readFileSync('./barcodeTemplate.html','utf-8');
const rawCsvData = fs.readFileSync('C:/Users/User/Desktop/BC-orig/app/CSVDAta.csv', 'utf-8');
const parsedCsvData = rawCsvData.split(',\r\n');



parsedCsvData.forEach(skuCode => {
    //TODO allow for adding additional columns to replace values in the template
    const encodedskuCode = code128.encode(skuCode);
    let htmlContent = htmlTemplate.replace('PLACEHOLDER',encodedskuCode);
    htmlContent = htmlContent.replace('HUMANREADABLE',skuCode);

    if(encodedskuCode){
        generatePdf(htmlContent,'PDF','C:/Users/User/Desktop/BC-orig/', skuCode)
    }
});





