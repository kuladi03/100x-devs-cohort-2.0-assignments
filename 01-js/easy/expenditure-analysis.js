/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let j = 0;
  let result = [];

  while (j < transactions.length) {
    let attribute = transactions[j].category;
    let totalprice = 0;

    for (let i = 0; i < transactions.length; i++) {
      if (attribute === transactions[i].category) {
        totalprice += transactions[i].price;
      }
    }

    let categoryExists = result.some(entry => entry.category === attribute);

    if (!categoryExists) {
      result.push({ category: attribute, totalSpent: totalprice });
    }

    j++;
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

