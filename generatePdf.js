const fs = require('fs');
const htmlPdf = require('html-pdf');
/**
 * Will create a file of the specified type in the destinationi location
 * @param {htmlAsString} htmlContent 
 * @param {String} typeOfFile [PDF,PNG,JPEG]
 * @param {String} toBeGenFilePath 
 * @param {String} toBeGenFileName 
 * @returns {void}
 */
const generatePdf = ( htmlContent, typeOfFile, filePath, fileName)=>{
    try{
        // console.log(filePath, fileName);
        // let htmlFilePath = `.${filePath}${fileName}`;

        // if(!fs.existsSync(htmlFilePath)){
        //     console.log('File Dont exist buddy');
        // }

        if(!['PDF','PNG','JPEG'].includes(typeOfFile)){
            fileName+='.pdf'
        }else{
            fileName+='.'+typeOfFile
        }
        const productFilePath = `${filePath}${fileName}`

        const htmlToPdfOptions = {
            type: typeOfFile,
            height:'3cm',
            width: '7cm',
            renderDelay:2000,
        }

        htmlPdf.create(htmlContent, htmlToPdfOptions)
        .toFile(productFilePath,(err,result)=>{
            if(err){return console.log(err);}
            console.log(result);
        })
    }catch(err){
        console.log('Error on html to pdf create',err);
    }
}

module.exports = generatePdf;