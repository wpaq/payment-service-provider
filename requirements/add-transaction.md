Criar Transação

> ## Caso de Sucesso

1. Recebe uma requisição do tipo **POST** na rota **/api/transactions**
2. Valida dados obrigatórios **value, description, paymentMethod, cardNumber, cardHolder, cardExpirationDate** e **CVV**
3. **Cria** uma Transaction com os dados fornecidos
4. Retorna **204**, sem dados 

> ## Exceções

1. Retorna erro **404** se a API não existir
3. Retorna erro **400** se os dados não forem fornecidos pelo client
4. Retorna erro **500** se der erro ao tentar criar a transação