const faker = require('faker');
const fs = require('fs')

faker.locale = "id_ID"

function generateProducts() {

  let products = []

  for (let id=1; id <= 100; id++) {

    let title = faker.commerce.productName()
    let price = faker.commerce.price();
    let thumbnail = faker.image.food();
    let category = faker.commerce.product()
    let id = faker.random.uuid()
    let seller = faker.company.companyName()

    products.push({
        "id": id,
        "title": title,
        "price": price,
        "thumbnail": thumbnail,
        "category": category,
        "seller": seller
    });
  }

  return { "data": products, "status": 200 }
}

function generateUsers() {

    let users = []
  
    for (let id=1; id < 2; id++) {
  
      let firstName = faker.name.firstName()
      let lastName = faker.name.lastName();
      let phone = faker.phone.phoneNumber()
      let password = faker.internet.password()
      let avatar = faker.image.avatar();
      let id = faker.random.uuid()
  
      users.push({
          "id": id,
          "firstName": firstName,
          "lastName": lastName,
          "phone": phone,
          "password": password,
          "avatar": avatar,
      });
    }
  
    return { "user": users, "status": 200 }
  }

const order = {
    id: faker.random.uuid(),
    productId: [faker.random.uuid()],
    timestamp: faker.date.past(),
    amount: faker.commerce.price(),
    shippingMethod: faker.business.companyName(),
    shippingPrice: faker.commerce.price(),
    totalAmount: faker.commerce.price(),
}

const shipping = [
  {
    name: faker.business.companyName(),
    price: 18000,
  }
]

let dataObj = generateProducts();
let dataUser = generateUsers();

fs.writeFileSync('products.json', JSON.stringify(dataObj, null, '\t'));
fs.writeFileSync('user.json', JSON.stringify(dataUser, null, '\t'));