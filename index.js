"use strict";
exports.__esModule = true;
var Loja_1 = require("./Loja");
var LojaPedido_1 = require("./LojaPedido");
var Motoboy_1 = require("./Motoboy");
var Pedido_1 = require("./Pedido");
var loja1 = new Loja_1.Loja('Loja 1', 0.05); // 0.05 => 5%
var loja2 = new Loja_1.Loja('Loja 2', 0.05); // 0.05 => 5%
var loja3 = new Loja_1.Loja('Loja 3', 0.15); // 0.15 => 15%
var moto1 = new Motoboy_1.Motoboy('Moto 1', 2);
var moto2 = new Motoboy_1.Motoboy('Moto 2', 2);
var moto3 = new Motoboy_1.Motoboy('Moto 3', 2);
var moto4 = new Motoboy_1.Motoboy('Moto 4', 3, loja1);
var pedido1Loja1 = new Pedido_1.Pedido(50);
var pedido2Loja1 = new Pedido_1.Pedido(50);
var pedido3Loja1 = new Pedido_1.Pedido(50);
var loja1Pedidos = new LojaPedido_1.LojaPedido(loja1, moto1, [pedido1Loja1, pedido2Loja1, pedido3Loja1]);
var loja1Pedidos2 = new LojaPedido_1.LojaPedido(loja1, null, [pedido1Loja1, pedido2Loja1, pedido3Loja1]);
var pedido1Loja2 = new Pedido_1.Pedido(50);
var pedido2Loja2 = new Pedido_1.Pedido(50);
var pedido3Loja2 = new Pedido_1.Pedido(50);
var pedido4Loja2 = new Pedido_1.Pedido(100);
var loja2Pedidos = new LojaPedido_1.LojaPedido(loja2, moto2, [pedido1Loja2, pedido2Loja2, pedido3Loja2, pedido4Loja2]);
var loja2Pedidos2 = new LojaPedido_1.LojaPedido(loja2, null, [pedido1Loja2, pedido2Loja2, pedido3Loja2, pedido4Loja2]);
var pedido1Loja3 = new Pedido_1.Pedido(50);
var pedido2Loja3 = new Pedido_1.Pedido(50);
var pedido3Loja3 = new Pedido_1.Pedido(50);
var loja3Pedidos = new LojaPedido_1.LojaPedido(loja3, moto4, [pedido1Loja3, pedido2Loja3, pedido3Loja3]);
var loja3Pedidos2 = new LojaPedido_1.LojaPedido(loja3, null, [pedido1Loja3, pedido2Loja3, pedido3Loja3]);
