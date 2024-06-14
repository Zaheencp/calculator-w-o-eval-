let n1
let n2
let step = 0
let operation
let result = 0
let n1Arr = []
let n2Arr = []

let display = document.getElementById('display')

function getNum(num) {
	if (step === 0 || step === 1) {
		n1Arr.push(num)
		step = 1
		n1 = Number(n1Arr.join(''))
		display.value = n1
	} else if (step === 2) {
		n2Arr.push(num)
		n2 = Number(n2Arr.join(''))
		display.value = n2
	}
}

function getOp(op) {
	step = 2
	operation = op
}

function Equals() {
	console.log('first number', n1, 'second number', n2)
	if (operation === '+') {
		result = n1 + n2
		display.value = result
	} else if (operation === '-') {
		result = n1 - n2
		display.value = result
	} else if (operation === '*') {
		result = n1 * n2
		display.value = result
	} else if (operation === '/') {
		result = n1 / n2
		display.value = result
	}
}

function clearDisplay() {
	display.value = 0
	n1 = null
	n2 = null
	step = 0
	operation = null
	result = 0
	n1Arr = []
	n2Arr = []
}