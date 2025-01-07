import rlsync from 'readline-sync';


console.log("Aplicação de Juros:\n");

let valor_devido = rlsync.questionFloat("Informe o valor devido: R$ ");
let qtd_dias_passados = rlsync.questionInt("Informe quantos dias se passaram desde o vencimento do boleto: ");

console.log("Valor original da dívida: R$ " + valor_devido);
console.log("Dias atrasados: " + qtd_dias_passados);
