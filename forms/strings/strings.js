let quoteString = "Failure is simply the opportunity to begin again this time more intelligently. "

let quoteStringUC = quoteString.toUpperCase()

console.log(quoteStringUC)

let authorString = "- Henry Ford"

let completeString = quoteStringUC.concat(authorString)
console.log(`Concatenated string is : ${completeString}`)


let found = completeString.includes('Henry')
if (found = true)
    console.log(`Henry was in completeString.`)
else
    console.log(`Henry was NOT in completeString.`)


let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
