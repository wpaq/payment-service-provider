const TransactionRouter = require('./transaction-router')
const MissingParamError = require('../errors/missing-param-error')

const makeSut = () => {
  return new TransactionRouter()
}

describe('Transaction Router', () => {
  test('Should return 400 if no transaction amount is provided', async () => {
    const sut = makeSut()
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
    const sut = makeSut()
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

  test('Should return 500 if no httpRequest is provided', async () => {
    const sut = makeSut()
    const httpResponse = await sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Should return 500 if httpRequest has no body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })
})
