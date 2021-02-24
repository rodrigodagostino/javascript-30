// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', born: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', born: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', born: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', born: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', born: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', born: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', born: 1829, passed: 1909 },
]

const people = [
	'Bernhard, Sandra',
	'Bethea, Erin',
	'Becker, Carl',
	'Bentsen, Lloyd',
	'Beckett, Samuel',
	'Blake, William',
	'Berger, Ric',
	'Beddoes, Mick',
	'Beethoven, Ludwig',
	'Belloc, Hilaire',
	'Begin, Menachem',
	'Bellow, Saul',
	'Benchley, Robert',
	'Blair, Robert',
	'Benenson, Peter',
	'Benjamin, Walter',
	'Berlin, Irving',
	'Benn, Tony',
	'Benson, Leana',
	'Bent, Silas',
	'Berle, Milton',
	'Berry, Halle',
	'Biko, Steve',
	'Beck, Glenn',
	'Bergman, Ingmar',
	'Black, Elk',
	'Berio, Luciano',
	'Berne, Eric',
	'Berra, Yogi',
	'Berry, Wendell',
	'Bevan, Aneurin',
	'Ben-Gurion, David',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bennington, Chester',
	'Bierce, Ambrose',
	'Billings, Josh',
	'Birrell, Augustine',
	'Blair, Tony',
	'Beecher, Henry',
	'Biondo, Frank',
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBornInThe1500 = inventors.filter(
	( inventor ) => inventor.born >= 1500 && inventor.born <= 1599,
)
console.log( '~~~~ Inventors born in the 1500’s ~~~~' )
console.log( inventorsBornInThe1500 )

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorsFirstAndLastNames = inventors.map( ( inventor ) => {
	return {
		first: inventor.first,
		last: inventor.last,
	}
} )
console.log( '~~~~ Inventors first and last names ~~~~' )
console.log( inventorsFirstAndLastNames )

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsSortedByBirthYear = inventors.sort( ( a, b ) => a.born > b.born )
console.log( '~~~~ Inventors sorted by birthdate (oldest to youngest) ~~~~' )
console.log( inventorsSortedByBirthYear )

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const inventorsYearsAllTogether = inventors.reduce(
	( total, inventor ) => total + ( inventor.passed - inventor.born ),
	0,
)
console.log( '~~~~ Years that the inventors lived all together ~~~~' )
console.log( inventorsYearsAllTogether )

// 5. Sort the inventors by years lived
const inventorsSortedByYearsLived = inventors.sort(
	( a, b ) => a.passed - a.born < b.passed - b.born,
)
console.log( '~~~~ Inventors sorted by years lived ~~~~' )
console.log( inventorsSortedByYearsLived )

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector( '.mw-category' )
// const links = [ ...category.querySelectorAll( '.mw-category-group ul li a' ) ]
// const filteredBoulevards = links
// 	.map( ( link ) => link.textContent )
// 	.filter( ( boulevardName ) => boulevardName.includes( 'de' ) )
// console.log( filteredBoulevards )

// 7. Sort Exercise
// Sort the people alphabetically by last name
const peopleSortedByLastName = people
	.map( ( person ) => {
		const splitName = person.split( ', ' )
		return {
			first: splitName[1],
			last: splitName[0],
		}
	} )
	.sort( ( a, b ) => a.last > b.last )
console.log( '~~~~ People sorted by last name ~~~~' )
console.log( peopleSortedByLastName )

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
	'car',
	'car',
	'truck',
	'truck',
	'bike',
	'walk',
	'car',
	'van',
	'bike',
	'walk',
	'car',
	'van',
	'car',
	'truck',
]
const transportationInstances = data.reduce( ( obj, item ) => {
	if ( ! obj[item] ) obj[item] = 0
	obj[item]++
	return obj
}, {} ) 
console.log( '~~~~ Instances of each transportation ~~~~' )
console.log( transportationInstances )
