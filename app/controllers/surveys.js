'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Survey = models.survey

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Survey.find()
    .then(surveys => res.json({
      surveys: surveys.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    survey: req.survey.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const survey = Object.assign(req.body.survey, {
    _owner: req.user._id
  })
  Survey.create(survey)
    .then(survey =>
      res.status(201)
        .json({
          survey: survey.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body._owner  // disallow owner reassignment
  // const id = { _id: req.params.id }
  // console.log('req survey is ', req.survey)
  console.log('req questions is ', req.survey.questions[0]._id)
  // console.log('req responses are ', req.survey.questions.responses)
  const question = req.body.survey.questions
  // console.log('question ID is ', req.params.question.id)
  const response = req.body.survey.responses
  // const responseId = Survey.question.children.id(_id)
  req.survey.update({ $set: { questions: question, responses: response } })
    .then(console.log)
    .then(() => res.sendStatus(204))
    .catch(next)
}
// const update = (req, res, next) => {
//   console.log('params is ', req.params.id)
//   delete req.body._owner  // disallow owner reassignment.
//   console.log('params is ', req.params.id)
//   const question = req.body.survey.questions
//   const id = { _id: req.params.id }
//   Survey.findOne(id).populate(question)
//     .then(() => res.sendStatus(204))
//     .catch(next)
// }

const destroy = (req, res, next) => {
  req.survey.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Survey), only: ['show'] },
  { method: setModel(Survey, { forUser: true }), only: ['update', 'destroy'] }
] })
