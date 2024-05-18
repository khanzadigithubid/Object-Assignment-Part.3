//Part 3 Colorful T-Shirts:

//Challenge:

//1. Design a type alias named Product to represent a T-shirt object with properties like name (string), price (number), and color (string).

type Product = {
    name: string;
    price: number;
    color: string;
  };
  
  let tShirt: Product = {
    name:  "T-Shirt",
    price: 10.99,
    color: "white",
  };
  
  console.log(tShirt);

//2. Include a nested object named inventory within Product. This inventory object should have two properties: 
//o stock (number): Represents the number of T-shirts available.
//o colorOptions (optional array of strings): Lists available colors (if any).

type product = {
    name: string;
    price: number;
    color: string;
    inventory: {
      stock: number;
      colorOptions?: string[];
    };
  };
  
  let Shirt: product = {
    name:   "T-Shirt",
    price: 10.99,
    color: "white",
    inventory: {
      stock: 64,
      colorOptions: ["white", "blue"],
    },
  };
  
  console.log(Shirt);

//3. Inside the inventory object, define a function named changeColor. This function accepts a new color string as an argument. When called, it should: 
//o Update the color property of the Product object.
//o Adjust the price based on the new color (implement your own logic, e.g., increase by 10% for red, decrease by 5% for blue).

type Prod = {
    name: string;
    color: string;
    price: number;
  }
  
  let inventory = {
    product: {
      name: "Example Product",
      color: "pink",
      price: 100,
    },
    changeColor(newColor: string): Prod {
      let product = this.product as Prod;
  
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
  const productAfterBlue = inventory.changeColor("Black");
  console.log("Product after changing color to Blue:", productAfterBlue);
  
  // Change color to white
  const productAfterGreen = inventory.changeColor("White");
  console.log("Product after changing color to Green:", productAfterGreen);
  
