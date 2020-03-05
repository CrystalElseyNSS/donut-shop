// Step 1: Create an array that holds the data for donut objects:

const donutsArray = [
    {
        name: "Chocoholic",
        glaze: "Dark chocolate ganache",
        type: "Cronut",
        flavor: "Chocolate",
        toppings: "Chocolate Sprinkles and cocoa powder"
    },

    {
        name: "Strawberry Fields",
        glaze: "Vanilla",
        type: "Cream-filled",
        flavor: "Strawberry",
        toppings: "Pinkles (pink sprinkles)"
    },

    {
        name: "Black Velvet",
        glaze: "Peanut butter",
        type: "Cake",
        flavor: "Banana",
        toppings: "Oreo cookie crumbs"
    }
]


// Step 2: Export a function that returns a copy of the donut array to DonutHTML.js
export const copyOfDonutsArray = () => {
    return donutsArray.slice();
}