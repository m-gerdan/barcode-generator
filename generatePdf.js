const fs = require('fs');
const htmlPdf = require('html-pdf');

const generatePdf = ( encodedValue, skuCode, filePath, fileName, toBeGenFileName)=>{
    try{
        let htmlFilePath = `.${filePath}${fileName}`;

        if(!fs.existsSync(htmlFilePath)){
            console.log('File Dont exist buddy');
        }
        toBeGenFileName+='.pdf'
        let htmlContent = fs.readFileSync(htmlFilePath,'utf-8');
        htmlContent= htmlContent.replace('PLACEHOLDER',encodedValue);
        htmlContent = htmlContent.replace('HUMANREADABLE',skuCode)
        const htmlToPdfOptions = {
            type:'pdf',
            height:'3cm',
            width: '10cm',
            renderDelay:2000,
        }
        htmlPdf.create(htmlContent, htmlToPdfOptions)
        .toFile(toBeGenFileName,(err,result)=>{
            if(err){return console.log(err);}
            console.log(result);
        })
    }catch(err){
        console.log('Error on html to pdf create',err);
    }
}

module.exports = generatePdf;