//Part 3 Colorful T-Shirts:
var tShirt = {
    name: "T-Shirt",
    price: 10.99,
    color: "white",
};
console.log(tShirt);
var Shirt = {
    name: "T-Shirt",
    price: 10.99,
    color: "white",
    inventory: {
        stock: 64,
        colorOptions: ["white", "blue"],
    },
};
console.log(Shirt);
var inventory = {
    product: {
        name: "Example Product",
        color: "pink",
        price: 100,
    },
    changeColor: function (newColor) {
        var product = this.product;
        switch (newColor.toLowerCase()) {
            case "pink":
                product.price *= 1.10; // Increase price by 10%
                break;
            case "purple":
                product.price *= 0.95; // Decrease price by 5%
                break;
        }
        // Update 
        product.color = newColor;
        // Return 
        return product;
    },
};
console.log("Original Product:", inventory.product);
// Change color to black
var productAfterBlue = inventory.changeColor("Black");
console.log("Product after changing color to Blue:", productAfterBlue);
// Change color to white
var productAfterGreen = inventory.changeColor("White");
console.log("Product after changing color to Green:", productAfterGreen);
