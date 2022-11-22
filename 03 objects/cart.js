

const cart = {
items: [],
    getItems() {
    return this.items
},
    add(product) {
    this.items.push(product)
},
    remove(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            const item = this.items[i];
            console.log(item);
             if (productName === item.name) {
                 console.log("нашли такой продукт", productName);
                 console.log(i)
                 cart.items.splice(i,1)
             }
            
        }
    for (const item of this.items) {
        
       
    }

},
clear() {},
counTotalPrice (){},
increaseQuantity (productName) {},
decreaseQuantity (productName) {},
}


console.log(cart.getItems())




cart.add({name: 'apple', price: 50})
cart.add({name: 'strawberry', price: 70})
cart.add({name: 'kiwi', price: 60})
cart.add({ name: 'mango', price: 110 })



console.table(cart.getItems());


cart.remove("kiwi");
console.table(cart.getItems());