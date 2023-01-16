const HttpResponse = require('../helpers/http-response')

module.exports = class TransactionRouter {
  async route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
      return HttpResponse.serverError()
    }

    const { transactionAmount, cardNumber } = httpRequest.body
    if (!transactionAmount) {
      return HttpResponse.badRequest('transactionAmount')
    }
    if (!cardNumber) {
      return HttpResponse.badRequest('cardNumber')
    }
  }
}
