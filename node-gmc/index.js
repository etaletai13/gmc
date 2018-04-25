const download = require('download-git-repo');

download('Musicoin/go-musicoin', 'go-musicoin/', function (err) {
  console.log(err ? 'Error' : 'Success')
})
