class TransactionRouter {
  async route (httpRequest) {
    const { transactionAmount, cardNumber } = httpRequest.body
    if (!transactionAmount || !cardNumber) {
      return {
        statusCode: 400
      }
    }
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
  })
})
