// start with strings, numbers and booleans
let a = 100
let b = a
console.log(a, b)
a = 200
console.log(a, b)
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
let team = players
console.log(players, team)

// You might think we can just do something like this:
team[3] = 'lux'

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
console.log('-------------------------------')
const team2 = players.slice()
console.log(team2)
console.log('-------------------------------')
// one way
// or create a new array and concat the old one in
const team3 = [].concat(players)
console.log(team3)
console.log('-------------------------------')
// or use the new ES6 Spread
const team4 = [...players]
console.log(team4)
team4[3] = 'abcd'

console.log('-------------------------------------')
const team5 = Array.from(players)
console.log(team5)

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};
// and think we make a copy:
// how do we take a copy instead?
const instead = Object.assign({}, person, { number: 99, age: 12 })
console.log(instead)
// We will hopefully soon see the object ...spread

const spread = { ...instead }
console.log(spread)
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'wes',
  age: 100,
  social: {
    twitter:'wesbon',
    facebook: 'wesbon fb'
  }
}

console.clear()
console.log(wes)

const dev = Object.assign({}, wes)
console.log('Day la dev:',dev)

const dev2 = JSON.parse(JSON.stringify(wes))