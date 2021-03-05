const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
]

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 },
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const hasAdults = people.some( person => {
	const currentYear = new Date().getFullYear()
	return currentYear - person.year > 19
} )
console.log( '~~~~ Is there any person older than 19 ~~~~' )
console.log( hasAdults )

// Array.prototype.every() // is everyone 19 or older?
const hasAllAdults = people.every( person => {
	const currentYear = new Date().getFullYear()
	return currentYear - person.year > 19
} )
console.log( '~~~~ Is every person older than 19 ~~~~' )
console.log( hasAllAdults )

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const commentsWithMatchingId = comments.find( comment => comment.id === 823423 )
console.log( '~~~~ Comments matching the ID of 823423 ~~~~' )
console.log( commentsWithMatchingId )

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex( comment => comment.id === 823423 )
// comments.splice( indexOfCommentsWithMatchingId, 1 )
// We can also create a new array instead of modifing the original one.
const newComments = [
	...comments.slice( 0, commentIndex ),
	...comments.slice( commentIndex + 1 ),
]
console.log( '~~~~ Comment with the ID of 823423 has been deleted ~~~~' )
// console.log( comments )
console.log( newComments )
