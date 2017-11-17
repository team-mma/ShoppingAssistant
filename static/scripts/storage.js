// This is the list of products from the user's shopping history.
// This is static for now(does not change with user adding or deleting the products)
// Can be personalized for each user


shoppingHistoryProductsLarry = [
  {
      'productTitle': 'Milk', 'productPic': '../images/milk.svg', 'productQuantity': 2,
      'unitAmount': 2, 'productAmount': 2, 'productUnits': 'qts', 'unitCost':5.00, 'productCost': 5.00, 'id': 0
  },
  {
      'productTitle': 'Danone Cheese', 'productPic': '../images/milk.svg', 'productQuantity': 1,
      'unitAmount': 12, 'productAmount': 12, 'productUnits': 'oz', 'unitCost':7.00, 'productCost': 7.00, 'id': 1
  },
  {
      'productTitle': 'Lindt Assorted Truffles', 'productPic': '../images/milk.svg', 'productQuantity': 1,
      'unitAmount': 16, 'productAmount': 16, 'productUnits': 'oz', 'unitCost':7.50, 'productCost': 7.50, 'id': 2
  },
  {
      'productTitle': 'Hollandia Butter', 'productPic': '../images/milk.svg', 'productQuantity': 3,
      'unitAmount': 10, 'productAmount': 10, 'productUnits': 'oz', 'unitCost':3.60, 'productCost': 3.60, 'id': 3
  },
  {
      'productTitle': 'Honey Bunches of Oats Cereal', 'productPic': '../images/milk.svg', 'productQuantity': 1,
      'unitAmount': 14, 'productAmount': 14, 'productUnits': 'oz', 'unitCost':6.99, 'productCost': 6.99, 'id': 4
  }
];

shoppingHistoryProductsLucy = [
  {
      'productTitle': 'Lucys Favorite Butter', 'productPic': '../images/milk.svg', 'productQuantity': 2,
      'unitAmount': 2, 'productAmount': 2, 'productUnits': 'qts', 'unitCost':5.00, 'productCost': 5.00, 'id': 0
  },
  {
      'productTitle': 'Danone Cheese', 'productPic': '../images/milk.svg', 'productQuantity': 1,
      'unitAmount': 12, 'productAmount': 12, 'productUnits': 'oz', 'unitCost':7.00, 'productCost': 7.00, 'id': 1
  },
  {
      'productTitle': 'Lindt Assorted Truffles', 'productPic': '../images/milk.svg', 'productQuantity': 1,
      'unitAmount': 16, 'productAmount': 16, 'productUnits': 'oz', 'unitCost':7.50, 'productCost': 7.50, 'id': 2
  },
  {
      'productTitle': 'Hollandia Butter', 'productPic': '../images/milk.svg', 'productQuantity': 3,
      'unitAmount': 10, 'productAmount': 10, 'productUnits': 'oz', 'unitCost':3.60, 'productCost': 3.60, 'id': 3
  },
  {
      'productTitle': 'Honey Bunches of Oats Cereal', 'productPic': '../images/milk.svg', 'productQuantity': 1,
      'unitAmount': 14, 'productAmount': 14, 'productUnits': 'oz', 'unitCost':6.99, 'productCost': 6.99, 'id': 4
  }
];

let shoppingHistoryProducts = [shoppingHistoryProductsLarry,shoppingHistoryProductsLucy];

// This is the complete database of all the products in the store
let storeProducts = [
    {
        'productTitle': 'Milk', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 2, 'productAmount': 2, 'productUnits': 'qts', 'unitCost':5.00, 'productCost': 5.00, 'id': 0
    },
    {
        'productTitle': 'Danone Cheese', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 12, 'productAmount': 12, 'productUnits': 'oz', 'unitCost':7.00, 'productCost': 7.00, 'id': 1
    },
    {
        'productTitle': 'Lindt Assorted Truffles', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 16, 'productAmount': 16, 'productUnits': 'oz', 'unitCost':7.50, 'productCost': 7.50, 'id': 2
    },
    {
        'productTitle': 'Hollandia Butter', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'oz', 'unitCost':3.60, 'productCost': 3.60, 'id': 3
    },
    {
        'productTitle': 'Honey Bunches of Oats Cereal', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 14, 'productAmount': 14, 'productUnits': 'oz', 'unitCost':6.99, 'productCost': 6.99, 'id': 4
    },
    {
        'productTitle': 'Hersheys Milk Chocolate', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 5
    },
    {
        'productTitle': 'Hersheys Dark Chocolate', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 6
    },
    {
        'productTitle': 'Chocolate A', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 7
    },
    {
        'productTitle': 'Chocolate B', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 8
    },
    {
        'productTitle': 'Chocolate C', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 9
    },
    {
        'productTitle': 'Chocolate D', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 10
    },
    {
        'productTitle': 'Chocolate E', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 11
    }
];
