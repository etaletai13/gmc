var task = require('child_process').exec;

console.log('Building gmc...');
task('cd gmc/ && build/env.sh go run build/ci.go install ./cmd/gmc', function (err, stdout) {
  console.log(err ? 'Error.' : 'Success.')
});
