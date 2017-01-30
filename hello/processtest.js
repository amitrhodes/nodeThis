/**
 * Created by akumar2 on 1/29/2017.
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(text) {
    process.stdout.write(text.toUpperCase());
});