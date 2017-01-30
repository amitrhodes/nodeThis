/**
 * Created by akumar2 on 1/29/2017.
 */
/*
var fs = require('fs');
var mime = 'image/jpeg';
var encoding = 'base64';
var data = fs.readFileSync('./kashi.jpg').toString(encoding);
var uri = 'data:' + mime + ';' + encoding + ',' + data;
fs.writeFileSync('./kashimonkey.txt', uri);
//console.log(uri);
*/

var fs = require('fs');
var uri = fs.readFileSync('./kashimonkey.txt').toString();
var data = uri.split(',')[1];
var buf = Buffer(data, 'base64');
fs.writeFileSync('./secondmonkey.png', buf);
