import { Motoboy } from "./Motoboy";
import { Pedido } from "./Pedido";

export class Loja {
  nome: string;
  valor_pago_por_entrega: number;


  constructor(nome: string, valor_pago_por_entrega: number) {
    this.nome = nome;
    this.valor_pago_por_entrega = valor_pago_por_entrega;
  }
}
