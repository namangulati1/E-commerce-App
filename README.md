# Ecommerce Website Frontend

This is the frontend for an ecommerce website built using React and Redux. The website allows users to view a list of products, view product details, add products to the cart, and manage the cart items. The frontend interacts with a dummy ecommerce API service to fetch product data and handle CRUD operations.

## Features

- **Navbar**: The navbar displays the cart items count and relevant navigation links.

- **All Products Page**: Users can view a list of products fetched from the API. Each product has options for inline editing and deletion. An alert/notification is shown on editing or deleting a product.

- **Product Detail Page**: Users can view detailed information of a product on its dedicated page. The page includes all the product details and an option to add the product to the cart.

- **Sort Button**: The sort button allows users to sort products by "price." Clicking the button will display a cross button beside it to remove the sorting.

- **Add to Cart Button**: Users can add products to the cart from the All Products and Product Detail pages. An alert/notification is shown after adding a product to the cart.

- **Cart Page**: The Cart page displays all the items in the cart. Users can view the names, quantities, and prices of the products in the cart.

- **Error and Success Handling**: The frontend handles errors from the API and displays appropriate Alert/Notification messages. Success alerts are shown for successful operations like adding products to the cart.

## Getting Started

To run the app locally on your machine, follow these steps:

1. Clone the repository: `git clone https://github.com/namangulati1/E-commerce-App.git`
2. Change directory: `cd E-commerce-App`
3. Install dependencies: `npm install`
4. Run the app: `npm start`

The app will be running at [http://localhost:3000](http://localhost:3000).

## Dependencies

This app is built using React and utilizes the Fetch API to interact with the JSONPlaceholder API. The major dependencies used in this project are:

- React: ^17.0.2
- React-dom: ^17.0.2

## Folder Structure

The folder structure of the project is as follows:

```javascript
contact-list-app/
├── src/
│ ├── actions/
│ │ ├── index.js
│ ├── apiCall/
│ │ ├── index.js
│ ├── components/
│ │ ├── AddProduct.js
│ │ └── Cart.js
│ │ └── CartItems.js
│ │ └── Nav.js
│ │ └── ProductDetail.js
│ │ └── ProductItem.js
│ │ └── ProductItemList.js
│ │ └── Sort.js
│ ├── Nodtification/
│ │ ├── notify.js
│ ├── reducers/
│ │ ├── index.js
│ ├── utils/
│ │ ├── appSlice.js
│ │ ├── store.js
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
├── public/
│ └── index.html
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to create a pull request or open an issue.

