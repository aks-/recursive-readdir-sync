var test = require('tap').test
var path = require('path')
var listFiles = require('./')

test('list the files with extension, cut the garbage', function(t) {
  var expectedext = '.js'
  var files = listFiles('./fixtures', expectedext) 

  files.filter(function(f) {
    var ext = path.extname(f)
    t.same(ext, expectedext)
  })

  t.end()

})

test('should not return files with different extentions', function(t) {
  var expectedext = '.md'
  var files = listFiles('./fixtures', expectedext) 

  var exts = files.map(function(f) {
    return path.extname(f)
  })

  t.ok(exts.indexOf('.js') === -1)

  t.end()

})

test('should return all files when no ext is given', function(t) {
  var files = listFiles('./fixtures')

  var exts = files.map(function(f) {
    return path.extname(f)
  })

  t.ok(exts.indexOf('.js') > -1)
  t.ok(exts.indexOf('.md') > -1)

  t.end()

})
