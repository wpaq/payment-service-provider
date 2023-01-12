class TransactionRouter {
  async route (httpRequest) {
    const { transactionAmount, cardNumber } = httpRequest.body
    if (!transactionAmount) {
      return HttpResponse.badRequest('transactionAmount')
    }
    if (!cardNumber) {
      return HttpResponse.badRequest('cardNumber')
    }
  }
}

class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}

class MissingParamError extends Error {
  constructor (paramName) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}

describe('Transaction Router', () => {
  test('Should return 400 if no transaction amount is provided', async () => {
    const sut = new TransactionRouter()
    const httpRequest = {
      body: {
        transactionDescription: 'any_description'
      }
    }
    const httpResponse = await sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('transactionAmount'))
  })

  test('Should return 400 if no card number is provided', async () => {
    const sut = new TransactionRouter()
    const httpRequest = {
      body: {
        transactionAmount: 'any_amount',
        transactionDescription: 'any_description'
      }
    }
    const httpResponse = await sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('cardNumber'))
  })
})
