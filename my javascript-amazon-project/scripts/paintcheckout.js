import { loadFromStorage } from '../data/cart.js';
import { renderOrderSummary } from './Checkout/myorder.js';
import { renderPaymentSummary } from './Checkout/mypayment.js';

renderOrderSummary();
renderPaymentSummary();
