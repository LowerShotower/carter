import { faker } from '@faker-js/faker';

class Factory {
  constructor(numOfCustomers, numOfTransactions) {
    this.customersIds = [];
    this.numOfCustomers = numOfCustomers;
    this.numOfTransactions = numOfTransactions;
    this.customers = this.createCustomers(numOfCustomers);
    this.transactions = this.createTransactions(numOfTransactions);
  }

  createCustomers(number) {
    const customers = new Array(number).fill().map(() => {
      const id = faker.datatype.uuid();
      this.customersIds.push(id);
      return {
        id,
        name: faker.name.firstName(),
      };
    });
    return customers;
  }

  createTransactions(number) {
    const transactions = new Array(number).fill().map(() => {
      return {
        id: faker.datatype.uuid(),
        amount: faker.datatype.number({ min: 30, max: 160 }),
        customerId:
          this.customersIds[
            faker.datatype.number({ min: 0, max: this.customersIds.length - 1 })
          ],
        date: new Date(`${faker.date.recent(90)}`),
      };
    });
    return transactions;
  }
}

const data = new Factory(4, 50);

export default data;
