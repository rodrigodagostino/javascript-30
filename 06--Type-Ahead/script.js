const endpoint =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const citiesArray = []

fetch( endpoint )
	.then( ( response ) => response.json() )
	.then( ( data ) => citiesArray.push( ...data ) )

function numberWithCommas( x ) {
	return x.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' )
}

function findMatches( wordToMatch, cities ) {
	return cities.filter( ( item ) => {
		const regEx = new RegExp( wordToMatch, 'gi' )
		return item.city.match( regEx ) || item.state.match( regEx )
	} )
}

function displayMatches() {
	const matchArray = findMatches( this.value, citiesArray )
	const html = matchArray
		.map( ( match ) => {
			const regEx = new RegExp( this.value, 'gi' )
			const cityName = match.city.replace(
				regEx,
				`<span class="highlight">${ this.value }</span>`,
			)
			const stateName = match.state.replace(
				regEx,
				`<span class="highlight">${ this.value }</span>`,
			)
			return `
			<li>
				<span class="name">${ cityName }, ${ stateName }</span>
				<span class="population">${ numberWithCommas( match.population ) }</span>
			</li>
		`
		} )
		.join( '' )

	suggestions.innerHTML = html
}

const searchField = document.querySelector( '#search-field' )
const suggestions = document.querySelector( '.suggestion-list' )

searchField.addEventListener( 'input', displayMatches )
