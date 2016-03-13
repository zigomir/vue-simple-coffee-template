stringToInt = (v) -> parseInt(v, 10)

numberProp = (required = true) ->
    type     : Number
    required : required
    coerce   : stringToInt

objectProp = (required = true) ->
    type     : Object
    required : required

stringProp = (required = true) ->
    type: String,
    required: required

arrayProp = (required = true) ->
    type     : Array
    required : required

module.exports =
    numberProp : numberProp
    objectProp : objectProp
    stringProp : stringProp
    arrayProp  : arrayProp
