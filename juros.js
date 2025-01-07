import rlsync from 'readline-sync';


console.log("Aplicação de Juros:\n");


let valor_devido = rlsync.questionFloat("Informe o valor devido: R$ ");
let qtd_dias_passados = rlsync.questionInt("Informe quantos dias se passaram desde o vencimento do boleto: ");

let juros = 10;

let valor_juros = (valor_devido / 100) * juros ;
let valor_total = valor_devido + valor_juros ;

console.log("\nValor original da dívida: R$ " + valor_devido);
console.log("Dias atrasados: " + qtd_dias_passados);
console.log("Taxa de Juros: " + valor_juros + "%");
console.log("Valor total com juros: R$ " + valor_total)