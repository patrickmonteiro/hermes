const Card = () => System.import('./components/card/Card.vue');
const Baralho = () => System.import('./components/baralho/Baralho.vue');

export const routes = [
  {
    path: '/card',
    name: 'card',
    component: Card,
  },
  {
    path: '/baralho',
    name: 'baralho',
    component: Baralho,
  }
]