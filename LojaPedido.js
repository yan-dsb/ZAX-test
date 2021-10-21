"use strict";
exports.__esModule = true;
exports.LojaPedido = void 0;
var LojaPedido = /** @class */ (function () {
    function LojaPedido(loja, motoboy, pedidos) {
        this.loja = loja;
        this.motoboy = motoboy;
        this.pedidos = pedidos;
        console.log('----------------------------------------------------------------');
        console.log("Nome da loja: ", this.loja.nome);
        console.log("Número de pedidos: ", this.pedidos.length);
        if (!this.motoboy) {
            console.log("Nenhum motoboy passado");
            return;
        }
        //Isso poderia ser melhorado com o id (caso fosse com banco de dados pra salvar as informações, até em memória também com uma lib uuid)
        if (this.motoboy.loja && this.motoboy.loja.nome !== this.loja.nome) {
            console.log("O motoboy " + this.motoboy.nome + " s\u00F3 pode atender a loja " + this.motoboy.loja.nome);
            return;
        }
        console.log("Nome do motoboy: ", this.motoboy.nome);
        var valorInicial = 0;
        //Soma o valor total dos pedidos
        var valorTotalPedidos = this.pedidos.reduce(function (acc, pedido) { return acc + pedido.valor; }, valorInicial);
        //Calcula pela porcentagem paga pela loja por pedido, ex: 0,05 (5%)
        var valorTotalPagoPorPedido = valorTotalPedidos * this.loja.valor_pago_por_entrega;
        //Calcula o valor total das entregas cobrados pelo motoboy
        var valorTotalPagoPorEntrega = this.pedidos.length * this.motoboy.valor_cobrado_por_entrega;
        //Soma o valor do total que o entregador vai receber
        var valorTotalPagoAoEntregador = valorTotalPagoPorPedido + valorTotalPagoPorEntrega;
        console.log("Valor pago ao motoboy: ", valorTotalPagoAoEntregador);
    }
    return LojaPedido;
}());
exports.LojaPedido = LojaPedido;
