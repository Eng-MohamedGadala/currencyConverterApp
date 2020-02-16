

import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY,CHANGE_THEM } from '../types/curreny-type';

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
});
export const changeCurrencyAmout = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});
export const changeThem = themes => ({
  type: CHANGE_THEM,
  themes,
});
// 30+35+10=(75 + 20+31+11)= 137 *4  = 548 + 200 + 600 + 47 + 47 = 1442 + 400 = 1842
