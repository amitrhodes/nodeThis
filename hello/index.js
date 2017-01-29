/**
 * Created by akumar2 on 1/27/2017.
 */
/*
var CountStream = require('./countstream');
var countStream = new CountStream('modi');
var http = require('http');
http.get('http://timesofindia.indiatimes.com', function (res) {
    res.pipe(countStream);
});
countStream.on('total', function (count) {
    console.log('Total matches:', count);
});*/

var group = require('./group');
console.log('a');
group.one();
console.log('b');
group.two();
