const hoursHandContainer = document.querySelector( '.hours-hand-container' )
const minutesHandContainer = document.querySelector( '.minutes-hand-container' )
const secondsHandContainer = document.querySelector( '.seconds-hand-container' )

const setTime = function () {
	const currentTime = new Date()
	const hours = currentTime.getHours()
	const minutes = currentTime.getMinutes()
	const seconds = currentTime.getSeconds()
	// To avoid the undesired animation behavior generated when jumping from 360 to 0 degrees,
	// we’ll be calculating the rotation based on the total amount of minutes and seconds in the day.
	// TODO: the issue is still present when the clock reaches 00:00:00 (I guess).
	const hoursDegrees = ( 360 / 12 ) * hours
	const minutesDegrees = ( 360 / 60 ) * ( minutes + ( hours * 60 ) )
	const secondsDegrees = ( 360 / 60 ) * ( seconds + ( minutes * 60 ) )

	hoursHandContainer.style.transform = `rotate(${ hoursDegrees }deg)`
	minutesHandContainer.style.transform = `rotate(${ minutesDegrees }deg)`
	secondsHandContainer.style.transform = `rotate(${ secondsDegrees }deg)`
}

setInterval( setTime, 1000 )
