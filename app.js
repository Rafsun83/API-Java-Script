const supershop = {
    Name: 'spno',
    product: ['laptop', 'fashion', 'mudi'],
    pricerange: 20000,
    owner: {
        name: 'bhat',
        address: 'Dhaka'
    }


};
console.log(supershop);
const shpoStringpy = JSON.stringify(supershop);
console.log(shpoStringpy);
const converted = JSON.parse(shpoStringpy);
console.log(converted);
