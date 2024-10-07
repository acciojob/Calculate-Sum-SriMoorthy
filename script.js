//your JS code here. If required.
let num1 = document.getElementById('n1')
let num2 = document.getElementById('n2')
let sm = document.getElementById('Sum')
let sum = 0;

function Calculate() {
	
	const n1 = parseFloat(num1.value)
	const n2 = parseFloat(num2.value)
	
	sum = n1+n2
	sm.innerHTML = sum
}

