var reAnnotator = require('commonform-regexp-annotator')
var escape = require('escape-regexp')

module.exports = function (phrases, annotator) {
  return reAnnotator(
    phrases.map(function (phrase) {
      return new RegExp(
        ('\\b(' + escape(phrase) + ')\\b'),
        'i'
      )
    }),
    function (form, path, expression, match) {
      return annotator(form, path, match[1])
    }
  )
}
