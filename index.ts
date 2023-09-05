// Import stylesheets
import './style.css';

const colorCodeResistor = (value): string => {
  let toleranceCss = 'gold';
  let firstBandCss = 'brown';
  let secondBandCss = 'brown';
  let multiplierCss = 'brown';

  return `
  <div class="resistor-color-diagram">      
      <div class="first-band ${firstBandCss}"></div>
      <div class="second-band ${secondBandCss}"></div>                                                    
      <div class="multiplier ${multiplierCss}"></div>
      <div class="tolerance ${toleranceCss}"></div>                                                    
  </div>
  `;
};

const resistorValues = [
  1, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2,
];
const maxFactor = 4;

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>E12 Resistors</h1>`;

appDiv.innerHTML += colorCodeResistor(1.2);
