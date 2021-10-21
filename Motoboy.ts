import { Loja } from "./Loja";

export class Motoboy {
  nome: string;
  valor_cobrado_por_entrega: number;
  loja?: Loja;

  constructor(nome: string, valor_cobrado_por_entrega: number, loja?: Loja) {
    this.nome = nome;
    this.valor_cobrado_por_entrega = valor_cobrado_por_entrega;
    this.loja = loja;
  }
}
