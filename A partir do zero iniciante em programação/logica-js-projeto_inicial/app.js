var range = 100;
var numeroSecreto = (Math.floor(Math.random() * range + 1));
var contador = 0;
console.log('ns', numeroSecreto);
while (numeroSecreto != palpite) {
    var palpite = prompt(`digite aqui seu númemo entre 1 e ${range}`);
    if (numeroSecreto > palpite) {
        alert(`o ns é maior que ${palpite}`);
    }
    if (numeroSecreto < palpite) {
        alert(`O ns é menor que ${palpite}`);
    }
    contador += 1;
}
// essa forma de fazer algo similar ao f string do python, chamado de template string
// condição ? expressão_se_verdadeira : expressão_se_falsa -> forma de fazer operador ternário em js
// contador === 1 ? alert(`você acertou o número secreto ${numeroSecreto} e usou ${contador} tentativa`)
// :alert(`você acertou o número secreto ${numeroSecreto} e usou ${contador} tentativa(s)`);


let tentativas = contador === 1 ? 'tentativa': 'tentativas'
alert(`você acertou o número secreto ${numeroSecreto} e usou ${contador} ${tentativas}`);

