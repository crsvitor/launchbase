const faker = require('faker');
const { hash } = require('bcryptjs');

const User = require('./src/app/models/User');
const Product = require('./src/app/models/Product')

let userIds = [];

async function createUsers() {
    const users = [];
    const password = await hash('1111', 8);

    while (users.length < 3) {
        users.push({
            name: faker.name.firstName(),
            email: faker.internet.email(),
            password,
            cpf_cnpj: faker.random.number(99999999999),
            cep: faker.random.number(99999999),
            address: faker.address.streetName(),
        });
    }

    const usersPrmoise = users.map(user => User.create(user));

    userIds = await Promise.all(usersPrmoise); 
}

createUsers();