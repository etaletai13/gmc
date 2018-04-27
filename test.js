var task = require('child_process').exec;

task('gmc/build/bin/gmc\ version', function (err, stdout) {
  console.log(err ? 'Error.' : 'Passed √')
});
