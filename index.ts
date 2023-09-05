// Import stylesheets
import './style.scss';

const convertResistorValue = (value: number): string => {
  const suffixes = ['', 'k', 'M'];
  let iteration = 0;

  while (value >= 1000) {
    value /= 1000;
    iteration++;
  }

  return (Math.round(value * 10) / 10).toString() + suffixes[iteration];
};

interface Resistor {
  firstBand: string;
  secondBand: string;
  multiplier: string;
  tolerance: string;
}

const resistorValueToColorCodes = (
  value: number,
  multiplier: number
): Resistor => {
  const colorCodes = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'gray',
    'white',
    'gold',
    'silver',
  ];

  let multiplierColor = 'black';

  if (multiplier === 0.1) {
    multiplierColor = 'gold';
  } else {
    let multiplierIndex = 0;
    while (value >= Math.pow(10, multiplier) * 10) {
      console.log(multiplierIndex);
      multiplierIndex++;
    }
    multiplierColor = colorCodes[multiplier - 1];
  }

  return {
    firstBand: '',
    secondBand: '',
    multiplier: multiplierColor,
    tolerance: 'gold',
  };
};

const colorCodeResistor = (value: number, multiplier: number): string => {
  const colorCodes = resistorValueToColorCodes(value, multiplier);
  let toleranceCss = 'gold';

  let secondBandCss = 'brown';
  let multiplierCss = 'brown';

  let resistorValue = convertResistorValue(value);

  return `
  <div class="resistor-color-diagram">      
      <div class="first-band ${colorCodes.firstBand}"></div>
      <div class="second-band ${colorCodes.secondBand}"></div>                                                    
      <div class="multiplier ${colorCodes.multiplier}"></div>
      <div class="tolerance ${colorCodes.tolerance}"></div>        
  </div>
  <span class="resistor-value">${resistorValue}</span>
  `;
};

const resistorValues = [1, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82];
const maxFactor = 5;

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('resistors');

for (let f = 0; f <= maxFactor; f++) {
  for (let value of resistorValues) {
    appDiv.innerHTML += `<div class='resistor'>${colorCodeResistor(
      value,
      0.1 * Math.pow(10, f)
    )}</div>`;
  }
}
