const dogs = [ { name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 } ]

function makeGreen() {
	const p = document.querySelector( 'p' )
	p.style.color = '#bada55'
	p.style.fontSize = '50px'
}

// Regular
console.log( 'Hello' )

// Interpolated
console.log( 'Hello, I’m a %s string!', '💩' )

// Styled
console.log( '%cI am some awesome text!', 'font-size: 40px; color: #353a49; background-color: #f3f3f5; padding: 0 12px' )

// Warning!
console.warn( 'OH, NOOO!! 😨' )

// Error :|
console.error( 'OH, CRAAP!! 😱' )

// Info
console.info( 'Crocodiles eat 3-4 people per year.' )

// Testing
console.assert( 1 === 2, 'This message is being displayed because the evaluation returned false.' )

// Clearing
console.clear()

// Viewing DOM Elements
const p = document.querySelector( 'p' )
console.log( p )
console.dir( p )

// Grouping together
dogs.forEach( ( dog ) => {
	// console.group( `${ dog.name }` )
	console.groupCollapsed( `${ dog.name }` )
	console.log( `This is ${ dog.name }` )
	console.log( `${ dog.name } is ${ dog.age } years old` )
	console.log( `${ dog.name } is ${ dog.age * 7 } dog years old` )
	console.groupEnd( `${ dog.name }` )
} )

// Counting
console.count( 'Rod' )
console.count( 'Matt' )
console.count( 'Matt' )
console.count( 'Rod' )
console.count( 'Rod' )
console.count( 'Rod' )
console.count( 'Matt' )

// Timing
console.time( 'Fetching data' )
fetch( 'https://api.github.com/users/rodrigodagostino' )
	.then( data => data.json() )
	.then( data => {
		console.timeEnd( 'Fetching data' )
		console.log( data )
	} )

// Table
console.table( dogs )
