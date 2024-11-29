var saldo: number = 3000;

var elementoSaldo: HTMLElement = document.querySelector(".saldo-valor .valor") as HTMLElement;

if(elementoSaldo != null){
    elementoSaldo.textContent = saldo.toString();
}

 var elementoFormulario: HTMLFormElement = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener('submit', function(event){
    event.preventDefault();
    if(!elementoFormulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação!");
        return;
    };

    const inputTipoTransacao: HTMLSelectElement = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor: HTMLInputElement = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData: HTMLInputElement = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor : number =  inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if(tipoTransacao == "Depósito"){
        saldo += valor;
    }
    else if(tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto" ){
        saldo -= valor;
    }
    else{
        alert("Tipo de Transação é inválida");
        return; 
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao:  tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();
});