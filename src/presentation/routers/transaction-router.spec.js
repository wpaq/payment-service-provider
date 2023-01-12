class TransactionRouter {
  async route (httpRequest) {
    if (!httpRequest.body.transaction_amount) {
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
        transaction_description: 'any_description'
      }
    }
    const httpResponse = await sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
