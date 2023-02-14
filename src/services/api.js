import customers from './data/customers';
import transactions from './data/transactions';
import urls from './urls';

export const mockedFetch = (url, timeout) =>
  new Promise((resolve) => {
    let data = null;
    switch (url) {
      case urls.getCustomersUrl:
        data = customers;
        break;
      case urls.getTransactionsUrl:
        data = transactions;
        break;
      default:
        break;
    }
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
