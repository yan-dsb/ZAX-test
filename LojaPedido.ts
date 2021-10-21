import { Loja } from "./Loja";
import { Motoboy } from "./Motoboy";
import { Pedido } from "./Pedido";

export class LojaPedido {
  loja: Loja;
  motoboy?: Motoboy;
  pedidos: Pedido[];

  constructor(loja: Loja, motoboy: Motoboy, pedidos: Pedido[]) {
    this.loja = loja;
    this.motoboy = motoboy;
    this.pedidos = pedidos;


    console.log('----------------------------------------------------------------');

    console.log("Nome da loja: ", this.loja.nome);
    console.log("Número de pedidos: ", this.pedidos.length);
    if(!this.motoboy){
      console.log("Nenhum motoboy passado");
      return;
    }


    //Isso poderia ser melhorado com o id (caso fosse com banco de dados pra salvar as informações, até em memória também com uma lib uuid)
    if(this.motoboy.loja && this.motoboy.loja.nome !== this.loja.nome) {
      console.log(`O motoboy ${this.motoboy.nome} só pode atender a loja ${this.motoboy.loja.nome}`);
      return;
    }

    console.log("Nome do motoboy: ", this.motoboy.nome);

    let valorInicial = 0;
    //Soma o valor total dos pedidos
    let valorTotalPedidos = this.pedidos.reduce( (acc, pedido) => acc + pedido.valor, valorInicial);
    //Calcula pela porcentagem paga pela loja por pedido, ex: 0,05 (5%)
    let valorTotalPagoPorPedido = valorTotalPedidos * this.loja.valor_pago_por_entrega;
    //Calcula o valor total das entregas cobrados pelo motoboy
    let valorTotalPagoPorEntrega = this.pedidos.length * this.motoboy.valor_cobrado_por_entrega;
    //Soma o valor do total que o entregador vai receber
    let valorTotalPagoAoEntregador = valorTotalPagoPorPedido + valorTotalPagoPorEntrega;

    console.log("Valor pago ao motoboy: ", valorTotalPagoAoEntregador);
  }
}
