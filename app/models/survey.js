'use strict'

const mongoose = require('mongoose')
const questions = require('./questions')

const surveySchema = new mongoose.Schema({
  // _id: {
  //   type: mongoose.Schema.Types.ObjectId
  // },
  title: {
    type: String,
    required: true
  },
  questions: [questions.questionSchema],
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      const userId = (options.user && options.user._id) || false
      ret.editable = userId && userId.equals(doc._owner)
      return ret
    }
  }
})

const Survey = mongoose.model('Survey', surveySchema)

module.exports = Survey
