# commonform-phrase-annotator

The module exports a single function that takes an array of strings and a function for generating annotations, returning an annotator function to apply to Common Forms.

```javascript
var phrases = ['thereof', 'whereof']
```

The annotation function receives the form in which a string was found, its path within the overall form, and the string that matches. It must return a [Common Form Annotations](https://npmjs.com/packages/commonform-annotation).

```javascript
function annotator (form, path, string) {
  return {
    message: '"' + string + '" is archaic',
    path: path,
    source: 'example-annotator',
    url: null
  }
}

var phraseAnnotator = require('commonform-phrase-annotator')

var annotator = phraseAnnotator(phrases, annotator)
```

The library does the job of finding matches and calculating paths.

```javascript
var assert = require('assert')

assert.deepEqual(
  annotator({content: ['all rights thereof and whereof']}),
  [
    {
      message: '"thereof" is archaic',
      path: ['content', 0],
      source: 'example-annotator',
      url: null
    },
    {
      message: '"whereof" is archaic',
      path: ['content', 0],
      source: 'example-annotator',
      url: null
    }
  ]
)
```
