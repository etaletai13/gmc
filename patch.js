var task = require('child_process').exec;

task('sed -e "s/1.7/1.10/g" -i gmc/build/ci.go', function (err) {
  console.log(err ? 'Error.' : 'Patched for Go >= 1.10')
});
