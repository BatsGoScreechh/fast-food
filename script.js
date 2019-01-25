const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    listOfOrders: function () {
        for(let i=0; i<this.orders.length;i++){
            return console.table(this.orders)
        }
    }
}

const chickenComboMeal = {
    name: "Chicken Sandwich Combo Meal",
    sandwichType: "Chicken",
    fries: true,
    drinkSize: "Large",
}

const burgerComboMeal = {
    name: "Hamburger Combo Meal",
    sandwichType: "Hamburger",
    fries: true,
    drinkSize: "Large",
}

const fishComboMeal = {
    name: "Fish Sandwich Combo Meal",
    sandwichType: "Fish",
    fries: true,
    drinkSize: "Large",
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(fishComboMeal)
restaurant.placeOrder(burgerComboMeal)
restaurant.listOfOrders()
// console.table(restaurant.orders)
// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()