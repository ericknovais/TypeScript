import { TipoTransacao } from "./TipoTransicao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
}