module.exports = function(app) {
  app.use('/', require('../routes/index'))
  app.use('/application', require('../routes/application'))
}
