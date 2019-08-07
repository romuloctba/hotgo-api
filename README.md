# HotGo API

`docker run --rm -it -d -p 27017:27017 mongo`

`npm install`

`npm run start:dev`

`http://localhost:3000/graphql`
```
# - - LIST USERS
# query {
#   getUsers {
#   id
#   email
# 	}
# }

# -- CREATE USERS
# mutation {
#   createUser (
#     user: {
#       firstName: "TesteFirst"
#       lastName: "TesteLast"
#       password: "Teste123"
#       email: "teste@teste.com"
#       phone: "419999999"
#     }
#   ) {
#     id
#     email
#   }
# }

# -- LOGIN
# mutation {
#   login(loginDto: {
#     username: "teste@teste.com"
#     password: "Teste123"
#   }) {
#     access_token
#   }
# }

# - - CREATE CUSTOMER
# mutation {
#   createCustomer(customer: {
#     userId: "5d48ea824654603c04fd8a35"
#   }) {
#     id
#     userId
#   }
# }
# - - LIST CUSTOMERS
# query {
#   getCustomers {
#     id
#     userId
#     user {
#  			id
#       email
#     }
#   }
# }
# - - CREATE CUSTOMER

# - - CREATE Supplier
# mutation {
#   createSupplier(supplier: {
#     userId: "5d4aeab36e8b790e80aa3c00"
#   }) {
#     id
#     userId
#   }
# }
# - supplier id: 5d48e6587cc8163c14aba966

# - - LIST Suppliers
# query {
#   getSuppliers {
#     id
#     userId
#     user {
#       email
#     }
#   }
# }

# - - CREATE STORE
# mutation {
#   createStore(store: {
#     supplierId: "5d4aeb3d6e8b790e80aa3c01",
#     name: "Test Store",
#     themeId: "123"
#   }, ) {
#     id
#     name
#     supplier {
#       id
#       user {
#         email
#       }
#     }
#   }
# }

# - - LIST Stores
# query {
#   getStores {
#     id
#     supplierId
#     name
#     supplier {
#       id
#       user {
#         email
#       }
#     }
#     products {
#       id
#       name
#       price
#       categories
#       }
#   }
# }

# - - LIST PRODUCTS
#  query {
#   getProducts {
#     id
#     name
#     supplierId
#     supplier {
#       user {
#         email
#       }
#     }
#     price
#   }
# }

# - - CREATE PRODUCT
# mutation {
#   createProduct(product: {
#     supplierId: "5d4aeb3d6e8b790e80aa3c01"
# 		price: 44.21
#     name: "Test 4 Product"
#     categories: ["test"]
#     tags: ["test"]
#   }) {
#     id
#   	name
#   }
# }

# -- GET SINGLE PRODUCT
# query {
#   	getProduct(id: "5d4aeb796e8b790e80aa3c03") {
#     supplierId
#     name
#     price
#     categories
#     supplier {
#       id
#       user {
#         email
#         firstName
#         lastName
#         createdAt
#       }
#     }
#   }
# }

# -- ADD PRODUCT TO STORE
# mutation {
#   addProductsToStore(
#     productIds: [
# 				 "5d4aeb796e8b790e80aa3c03",
# 			]
#     storeId: "5d4aeb4b6e8b790e80aa3c02"
#   ) {
#     id
#     name
#     productIds
#   }
# }

# -- ADD Comission Type
# mutation {
#   addComissionType(
#     comissionType: {
#       title: "Teste Comissao"
#       amount: 0.3
#       productId: "5d4aeb796e8b790e80aa3c03"
#       status: 1
#     }
#   ){
#     id
#     amount
#     productId
#     status
#     title
#   }
# }

# --  QUERY Comission Type by Product
# query {
#   getComissionTypeByProduct(
#     productId: "5d4aeb796e8b790e80aa3c03"
#   ) {
#     id
#     title
#     amount
#   }
# }

#-- ADD Comission
# mutation {
#   addComission(
#     comission: {
#       typeId: "5d4aec016e8b790e80aa3c04"
#       affiliateId: "5d4aeab36e8b790e80aa3c00"
#       supplierId: "5d4aeb3d6e8b790e80aa3c01"
#       productId: "5d4aeb796e8b790e80aa3c03"
#       status: 1
#     }
#   ) {
#     id
#     typeId
#     affiliateId
#     supplierId
#     productId
#   }
# }

#-- Query getComissionByProduct
# query {
#   getComissionByProduct (
#     productId: "5d4aeb796e8b790e80aa3c03"
#   ) {
#     id
#     typeId
#     affiliateId
#     type {
#       title
#       amount
#     }
#   }
# }

#-- Query getComissionByAffiliate
# query {
#   getComissionByAffiliate (
#     affiliateId: "5d4aeab36e8b790e80aa3c00"
#   ) {
#     id
#     affiliateId
#     type {
#       title
#       amount
#     }
#   }
# }

```