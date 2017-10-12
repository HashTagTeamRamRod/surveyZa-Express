'use strict'

const mongoose = require('mongoose')
const responses = require('./responses')

const questionSchema = new mongoose.Schema({
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true
    // },
  content: {
    type: String,
    required: true
  },
  responses: [responses.responseSchema]
}, {
  timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

module.exports = { Question, questionSchema }
