// template varies

var bscript = require('../../script')
var types = require('../../types')
var typeforce = require('typeforce')
var OPS = require('ravencoin-ops')

function check (script) {
  var buffer = bscript.compile(script)

  return buffer.length > 31 &&
    buffer[25] === OPS.OP_RVN_ASSET
}
check.toJSON = function () { return 'assetScript output' }

function decode (buffer) {
  typeforce(check, buffer)

  return buffer.slice(3, 23)
}

module.exports = {
  check: check,
  decode: decode
}
