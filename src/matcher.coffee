jsdom = require 'jsdom'

module.exports = (expression, input, callback) =>
  jsdom.env input, ['../node_modules/jquery/dist/jquery.min.js']
  , (err, window) ->
    $ = window.jQuery
    callback($(window.document).find expression)
    return

    
