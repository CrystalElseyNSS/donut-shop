// Step 4: Import the copy of the donut array and the variable that returns data for each donut:
import { donutHTML } from './donutHTML.js';
import { copyOfDonutsArray } from './donutDataArray.js';


// Step 5: (See index.HTML)
// Step 6: Create variable that targets section in index.html where donut data will be inserted
const contentTarget = document.querySelector(".donutList");


// Step 7: Create and export a variable that calls a new function... 
 export const donutMaker = () => {
    // that creates a new variable to hold the copy of the array
    const newDonutArray = copyOfDonutsArray();
    // Step 8: Create a for of loop to iterate through the newDonutArray...
    for (const newDonutObject of newDonutArray) {
        // and create a new variable that stores the HTML representation f
        // or each donut objectrendered by donutHTML function
        const newDonutHTMLString = donutHTML(newDonutObject);
        // Step 9: Insert that HTML representation into index.html:
        contentTarget.innerHTML += newDonutHTMLString
    }
}


// Step 10: See main.js