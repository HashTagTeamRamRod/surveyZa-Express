'use strict'

const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true
    // },
  answer1: {
    type: String,
    required: true
  },
  answer1Count: {
    type: Number,
    default: 0
  },
  answer2: {
    type: String,
    required: true
  },
  answer2Count: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Response = mongoose.model('Response', responseSchema)

module.exports = { Response, responseSchema }
