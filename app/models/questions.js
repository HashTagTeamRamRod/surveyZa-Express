'use strict'

const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true
    // },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Question = mongoose.model('Question', questionSchema)

module.exports = { Question, questionSchema }
