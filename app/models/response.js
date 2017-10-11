'use strict'

const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
  response: {
    type: Boolean,
    required: true
  }
  // _owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
// }, {
  // timestamps: true,
  // toJSON: {
  //   virtuals: true,
  //   transform: function (doc, ret, options) {
  //     const userId = (options.user && options.user._id) || false
  //     ret.editable = userId && userId.equals(doc._owner)
  //     return ret
  //   }
  // }
})

const Response = mongoose.model('Response', responseSchema)

module.exports = Response
