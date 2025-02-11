import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransicao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponet from "./saldo-component.js";

const elementoFormulario: HTMLFormElement = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener('submit', function(event){
    try{
        event.preventDefault();
        if(!elementoFormulario.checkValidity()){
            alert("Por favor, preencha todos os campos da transação!");
            return;
        };

        const inputTipoTransacao: HTMLSelectElement = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor: HTMLInputElement = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData: HTMLInputElement = elementoFormulario.querySelector("#data") as HTMLInputElement;

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor : number =  inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value);
    
        const novaTransacao: Transacao = {
            tipoTransacao:  tipoTransacao,
            valor: valor,
            data: data
        };

        Conta.registrarTrasacao(novaTransacao);
        SaldoComponet.atulizar();
        elementoFormulario.reset();
    }
    catch(erro){
        alert(erro.message);
    }
});