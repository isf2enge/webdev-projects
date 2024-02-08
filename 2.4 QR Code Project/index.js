/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";

import qr from "qr-image";

import fs from "fs";

inquirer.prompt([{

    name: 'Link',
    message: "Write your link: "


},]).then(answers=>{

    console.info('Answer:', answers.Link)
    var c = answers.Link;
    var qr_svg = qr.image(c, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(c+"."+"png"));
    var svg_string = qr.imageSync('c', { type: 'png' });
})






