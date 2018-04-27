const git = require('download-git-repo');

console.log('\nDownloading source ...');
git('Musicoin/go-musicoin', 'gmc', function (err) {
  console.log(err ? 'Error downloading.' : '✨')
});
