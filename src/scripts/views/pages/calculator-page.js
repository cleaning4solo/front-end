import { createCalculatorPageComponent } from '../templates/template-creator';
import { initializeEventListeners } from '../../components/wasteCalculator';

const Calculator = {
  async render() {
    return `
    <section id="hero" class="hero"></section>
    `;
  },

  async afterRender() {
    const mainContainer = document.querySelector('.hero');
    mainContainer.innerHTML = createCalculatorPageComponent();

    initializeEventListeners();
  },
};

export default Calculator;
