const number = [5, 21, 13, 37]
const strings = ["cerveja", "campari", "vodka"]
const mista = [12, 15, "cerveja", "campari", "true", "false"]

console.log(number.length)
console.log(strings.length)
console.log(mista.length)

console.log(number[0])
console.log(strings[1])
console.log(mista[3])

number.includes(5)
mista.includes(12)
console.log("verificações", number.includes(15), mista.includes("gin"))
