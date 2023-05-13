import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// implicit type cohercion
console.log(1 == '1')
console.log(1 === '1')


// Truthy values
console.log(Boolean(true))
console.log(Boolean(''))
console.log(Boolean('1'))

console.log('*******')
console.log(!true)
console.log(!!true)

console.log('*******')
console.log(Boolean({}))
console.log(Boolean([]))
console.log(Boolean(new Date))
console.log(!!{})
console.log(!![])


console.log(!!'0')


// Falsy values
console.log('******* falsy')
console.log(!!0)
console.log(!!false)
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!'')