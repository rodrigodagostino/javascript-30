const canvas = document.getElementById( 'draw' )
const ctx = canvas.getContext( '2d' )

canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = '#bada55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 10

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

const draw = ( e ) => {
	// Stop the function from running when mousedown is not active.
	if ( ! isDrawing ) return

	ctx.strokeStyle = `hsl(${ hue }, 100%, 50%)`

	ctx.beginPath()
	// Start from:
	ctx.moveTo( lastX, lastY )
	// Go to:
	ctx.lineTo( e.offsetX, e.offsetY )

	ctx.stroke()
	lastX = e.offsetX
	lastY = e.offsetY

	if ( ctx.lineWidth >= 40 || ctx.lineWidth <= 8 ) direction = ! direction
	direction ? ctx.lineWidth++ : ctx.lineWidth--

	hue++
	if ( hue >= 360 ) hue = 0
}

canvas.addEventListener( 'mousemove', draw )
canvas.addEventListener( 'mousedown', ( e ) => {
	isDrawing = true
	lastX = e.offsetX
	lastY = e.offsetY
} )
canvas.addEventListener( 'mouseup', () => isDrawing = false )
canvas.addEventListener( 'mouseout', () => isDrawing = false )
