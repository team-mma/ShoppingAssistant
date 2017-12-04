// This is the list of products from the user's shopping history.
// This is static for now(does not change with user adding or deleting the products)
// Can be personalized for each user


shoppingHistoryProductsLarry = [
  {
      'productTitle': 'Hollandia Milk', 'productPic': '../images/milk.svg', 'productQuantity': 2,
      'unitAmount': 2, 'productAmount': 2, 'productUnits': 'qts', 'unitCost':5.00, 'productCost': 5.00, 'id': 0
  },
  {
      'productTitle': 'Danone Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
      'unitAmount': 12, 'productAmount': 12, 'productUnits': 'oz', 'unitCost':7.00, 'productCost': 7.00, 'id': 1
  },
  {
      'productTitle': 'Lindt Assorted Truffles', 'productPic': '../images/chocolate-box.svg', 'productQuantity': 1,
      'unitAmount': 16, 'productAmount': 16, 'productUnits': 'oz', 'unitCost':7.50, 'productCost': 7.50, 'id': 2
  },
  {
      'productTitle': 'Hollandia Butter', 'productPic': '../images/butter.svg', 'productQuantity': 3,
      'unitAmount': 10, 'productAmount': 10, 'productUnits': 'oz', 'unitCost':3.60, 'productCost': 3.60, 'id': 3
  },
  {
      'productTitle': 'Honey Bunches of Oats Cereal', 'productPic': '../images/cereal.svg', 'productQuantity': 1,
      'unitAmount': 14, 'productAmount': 14, 'productUnits': 'oz', 'unitCost':6.99, 'productCost': 6.99, 'id': 4
  }
];

shoppingHistoryProductsLucy = [
  {
      'productTitle': 'Lucys Favorite Butter', 'productPic': '../images/butter.svg', 'productQuantity': 2,
      'unitAmount': 2, 'productAmount': 2, 'productUnits': 'oz', 'unitCost':5.00, 'productCost': 5.00, 'id': 0
  },
  {
      'productTitle': 'Hersheys Milk Chocolate', 'productPic': '../images/chocolate.svg', 'productQuantity': 1,
      'unitAmount': 10, 'productAmount': 10, 'productUnits': 'oz', 'unitCost':6.99, 'productCost': 6.99, 'id': 1
  },
  {
      'productTitle': 'Hollandia Milk', 'productPic': '../images/milk.svg', 'productQuantity': 2,
      'unitAmount': 10, 'productAmount': 10, 'productUnits': 'oz', 'unitCost':5.00, 'productCost': 3.60, 'id': 2
  },
  {
      'productTitle': 'Cheddar Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
      'unitAmount': 12, 'productAmount': 12, 'productUnits': 'oz', 'unitCost':7.00, 'productCost': 7.00, 'id': 3
  },
  {
      'productTitle': 'Honey Bunches of Oats Cereal', 'productPic': '../images/cereal.svg', 'productQuantity': 1,
      'unitAmount': 14, 'productAmount': 14, 'productUnits': 'oz', 'unitCost':6.99, 'productCost': 6.99, 'id': 4
  }
];

let shoppingHistoryProducts = [shoppingHistoryProductsLarry,shoppingHistoryProductsLucy];

// This is the complete database of all the products in the store
let storeProducts = [
    {
        'productTitle': 'Hollandia Milk', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 2, 'productAmount': 2, 'productUnits': 'qts', 'unitCost':5.00, 'productCost': 5.00, 'id': 0
    },
    {
        'productTitle': 'Danone Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
        'unitAmount': 12, 'productAmount': 12, 'productUnits': 'oz', 'unitCost':7.00, 'productCost': 7.00, 'id': 1
    },
    {
        'productTitle': 'Lindt Assorted Truffles', 'productPic': '../images/chocolate-box.svg', 'productQuantity': 1,
        'unitAmount': 16, 'productAmount': 16, 'productUnits': 'oz', 'unitCost':7.50, 'productCost': 7.50, 'id': 2
    },
    {
        'productTitle': 'Hollandia Butter', 'productPic': '../images/butter.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'oz', 'unitCost':3.60, 'productCost': 3.60, 'id': 3
    },
    {
        'productTitle': 'Honey Bunches of Oats Cereal', 'productPic': '../images/cereal.svg', 'productQuantity': 1,
        'unitAmount': 14, 'productAmount': 14, 'productUnits': 'oz', 'unitCost':5.99, 'productCost': 5.99, 'id': 4
    },
    {
        'productTitle': 'Hersheys Milk Chocolate', 'productPic': '../images/milk.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 5
    },
    {
        'productTitle': 'Hersheys Dark Chocolate', 'productPic': '../images/chocolate.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 6
    },
    {
        'productTitle': 'English Cheddar Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
        'unitAmount': 8, 'productAmount': 8, 'productUnits': 'qts', 'unitCost':7.00, 'productCost': 7.00, 'id': 7
    },
    {
        'productTitle': 'Chocolate B', 'productPic': '../images/chocolate-box.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 8
    },
    {
        'productTitle': 'Chocolate C', 'productPic': '../images/chocolate.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 9
    },
    {
        'productTitle': 'Chocolate D', 'productPic': '../images/chocolate.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 10
    },
    {
        'productTitle': 'Chocolate E', 'productPic': '../images/chocolate-box.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'qts', 'unitCost':6.99, 'productCost': 6.99, 'id': 11
    },
    {
        'productTitle': 'Early California Olives', 'productPic': '../images/icon.svg', 'productQuantity': 1,
        'unitAmount': 1, 'productAmount': 1, 'productUnits': 'lb', 'unitCost':11.05, 'productCost': 11.05, 'id': 12
    },
    {
        'productTitle': 'Cocoa Puffs Cereal', 'productPic': '../images/cereal.svg', 'productQuantity': 1,
        'unitAmount': 13, 'productAmount': 13, 'productUnits': 'oz', 'unitCost':5.99, 'productCost': 5.99, 'id': 13
    },
    {
        'productTitle': 'Kerrygold Irish Butter', 'productPic': '../images/butter.svg', 'productQuantity': 1,
        'unitAmount': 8, 'productAmount': 8, 'productUnits': 'oz', 'unitCost':4.99, 'productCost': 4.99, 'id': 14
    },
    {
        'productTitle': 'Cheddar Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
        'unitAmount': 5, 'productAmount': 8, 'productUnits': 'oz', 'unitCost':3.49, 'productCost': 2.99, 'id': 15
    },
    {
        'productTitle': 'Parmesan Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
        'unitAmount': 6, 'productAmount': 6, 'productUnits': 'oz', 'unitCost':6.99, 'productCost': 4.49, 'id': 16
    },
    {
        'productTitle': 'Tillamook Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
        'unitAmount': 10, 'productAmount': 10, 'productUnits': 'oz', 'unitCost':2.49, 'productCost': 3.99, 'id': 17
    },
    {
        'productTitle': 'Irish Cheese Assortment', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
        'unitAmount': 12, 'productAmount': 4, 'productUnits': 'oz', 'unitCost':2.99, 'productCost': 2.99, 'id': 18
    },
    {
        'productTitle': 'Kraft Grated Parmesan Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
        'unitAmount': 3, 'productAmount': 8, 'productUnits': 'oz', 'unitCost':2.99, 'productCost': 2.49, 'id': 19
    },
    {
        'productTitle': 'Extra-Sharp New York Cheddar Cheese', 'productPic': '../images/cheese.svg', 'productQuantity': 1,
        'unitAmount': 4, 'productAmount': 8, 'productUnits': 'oz', 'unitCost':3.99, 'productCost': 4.25, 'id': 20
    }
];
