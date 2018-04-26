const download = require('download-git-repo');

download('Musicoin/go-musicoin', 'gmc', function (err) {
  console.log(err ? 'Error' : 'Success')
})
