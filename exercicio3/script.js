const number = [5, 21, 13, 37]
const strings = ["cerveja", "campari", "vodka"]
const mista = [12, 15, "cerveja", "campari", "true", "false"]

const numberCopia = number.slice()
const stringsCopia = strings.slice()
const mistaCopia = mista.slice()

numberCopia.push(5)
console.log("original", number)
console.log("cópia", numberCopia)

stringsCopia.pop()
console.log("original", strings)
console.log("cópia", stringsCopia)

mistaCopia.splice(1,1)
console.log("original", mista)
console.log("cópia", mistaCopia)