import { Loja } from "./Loja";
import { LojaPedido } from "./LojaPedido";
import { Motoboy } from "./Motoboy";
import { Pedido } from "./Pedido";

const loja1 = new Loja('Loja 1', 0.05); // 0.05 => 5%

const loja2 = new Loja('Loja 2', 0.05); // 0.05 => 5%

const loja3 = new Loja('Loja 3',  0.15); // 0.15 => 15%

const moto1 = new Motoboy('Moto 1', 2);

const moto2 = new Motoboy('Moto 2', 2);

const moto3 = new Motoboy('Moto 3', 2);

const moto4 = new Motoboy('Moto 4', 3, loja1);


const pedido1Loja1 = new Pedido(50);
const pedido2Loja1 = new Pedido(50);
const pedido3Loja1 = new Pedido(50);
const loja1Pedidos = new LojaPedido(loja1, moto1, [pedido1Loja1, pedido2Loja1, pedido3Loja1]);
const loja1Pedidos2 = new LojaPedido(loja1, null, [pedido1Loja1, pedido2Loja1, pedido3Loja1]);

const pedido1Loja2 = new Pedido(50);
const pedido2Loja2 = new Pedido(50);
const pedido3Loja2 = new Pedido(50);
const pedido4Loja2 = new Pedido(100);
const loja2Pedidos = new LojaPedido(loja2, moto2, [pedido1Loja2, pedido2Loja2, pedido3Loja2, pedido4Loja2]);
const loja2Pedidos2 = new LojaPedido(loja2, null, [pedido1Loja2, pedido2Loja2, pedido3Loja2, pedido4Loja2]);

const pedido1Loja3 = new Pedido(50);
const pedido2Loja3 = new Pedido(50);
const pedido3Loja3 = new Pedido(50);
const loja3Pedidos = new LojaPedido(loja3, moto4, [pedido1Loja3, pedido2Loja3, pedido3Loja3]);
const loja3Pedidos2 = new LojaPedido(loja3, null, [pedido1Loja3, pedido2Loja3, pedido3Loja3]);



