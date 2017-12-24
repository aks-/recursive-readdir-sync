var fs = require('fs')
var path = require('path')
var flatten = require('array-flatten')

var listFiles = function (dirname) {
  var ls = fs.readdirSync(dirname, 'utf8')

  var files = [],
    subdirs = []

  ls.forEach(function(_l) {
    var l = path.resolve(dirname, _l)
    var stats = fs.lstatSync(l)

    if (stats.isFile()) {
      files.push(l)
    } else if (stats.isDirectory()) {
      subdirs.push(l)
    }

  })

  if (subdirs.length === 0) return files

  flatten(subdirs.map(function(s) {
    return listFiles(path.resolve(dirname, s))
  })).forEach(function(file) {
    files.push(file)
  })

  return files

}

module.exports = function (dirname, ext) {
  if (ext) 
    return listFiles(dirname).filter(function(file) {
      return path.extname(file) === ext
    })

  return listFiles(dirname)
}
