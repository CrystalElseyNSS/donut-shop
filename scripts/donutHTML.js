/*Step 3: Export a variable to store function that returns interpolated
HTML string for the data of each donut object in the donut array:*/
export const donutHTML = (donutObject) => {
    return `
        <div class="donutList__Item">
            <h2 class="donut--name">${donutObject.name}</h2>
            <p class="donut--flavor">Type: ${donutObject.flavor} ${donutObject.type}</p>
            <p class="donut--glaze">Glaze: ${donutObject.glaze}</p>
            <p class="donut--toppings">Toppings: ${donutObject.toppings}</p>
        </div>
    `
}