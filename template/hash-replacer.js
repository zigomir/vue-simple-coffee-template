// TODO: extract to npm module as CLI package or use something similar
var fs = require('fs')
var distDir = 'dist'
var inputFileName = 'index.html'
var inputFile = fs.readFileSync(inputFileName, 'utf8')
var manifest = JSON.parse(fs.readFileSync('dist/manifest.json', 'utf8'))

manifest.forEach(function (hash) {
  inputFile = inputFile.replace(distDir + hash.path, hash.hashedPath)
})

fs.writeFile(distDir + '/' + inputFileName, inputFile)
