var reAnnotator = require('commonform-regexp-annotator')

var rePattern = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
var reReplace = '\\$&'

function commonformPhraseAnnotator(phrases, annotator) {
  return reAnnotator(
    phrases
      .map(function(phrase) {
        return new RegExp(
          ( '\\b(' + phrase.replace(rePattern, reReplace) + ')\\b' ),
          'i') }),
    function(form, path, expression, match) {
      return annotator(form, path, match[1]) }) }

module.exports = commonformPhraseAnnotator
