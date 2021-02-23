const inputs = document.querySelectorAll( '.controls input' )

const handleUpdate = e => {
	const { target: { value, name } } = e
	const suffix = e.target.dataset.sizing || ''
	document.documentElement.style.setProperty( `--${ name }`, value + suffix )
}

inputs.forEach( ( input ) => {
	input.addEventListener( 'input', handleUpdate )
} )
