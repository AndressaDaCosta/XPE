const num1 = parseFloat(prompt('Digite o primeiro número: '));
const num2 = parseFloat(prompt('Digite o segundo número: '));
const operation = prompt(
	'Escolha a operação matemática (soma, subtração, divisão, multiplicação, potência, raiz quadrada, fatorial, porcentagem, média): '
);

if (operation === 'soma') {
	alert(`A soma de ${num1} e ${num2} é igual a ${num1 + num2}.`);
} else if (operation === 'subtração') {
	alert(`A subtração de ${num1} e ${num2} é igual a ${num1 - num2}.`);
} else if (operation === 'divisão') {
	alert(`A divisão de ${num1} e ${num2} é igual a ${num1 / num2}.`);
} else if (operation === 'multiplicação') {
	alert(`A multiplicação de ${num1} e ${num2} é igual a ${num1 * num2}.`);
} else if (operation === 'potência') {
	alert(`${num1} elevado a ${num2} é igual a ${Math.pow(num1, num2)}.`);
} else if (operation === 'raiz quadrada') {
	alert(
		`A raiz quadrada de ${num1} é igual a ${Math.sqrt(
			num1
		)}. A raiz quadrada de ${num2} é igual a ${Math.sqrt(num2)}.`
	);
} else if (operation === 'fatorial') {
	let result = 1;
	for (let i = 1; i <= num1; i++) {
		result *= i;
	}
	alert(`O fatorial de ${num1} é igual a ${result}.`);
	result = 1;
	for (let i = 1; i <= num2; i++) {
		result *= i;
	}
	alert(`O fatorial de ${num2} é igual a ${result}.`);
} else if (operation === 'porcentagem') {
	alert(`${num1}% de ${num2} é igual a ${(num1 / 100) * num2}.`);
} else if (operation === 'média') {
	alert(`A média de ${num1} e ${num2} é igual a ${(num1 + num2) / 2}.`);
} else {
	alert('Operação inválida.');
}
