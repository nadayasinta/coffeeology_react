import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

function Radar(props) {
  const data = [
    {
      data: {
        fragrance: props.tasteData.fragrance,
        aroma: props.tasteData.aroma,
        cleanliness: props.tasteData.cleanliness,
        sweetness: props.tasteData.sweetness,
        taste: props.tasteData.taste,
        acidity: props.tasteData.acidity,
        aftertaste: props.tasteData.aftertaste,
        balance: props.tasteData.balance,
        global: props.tasteData.globalTaste
      },
      meta: { color: 'blue' }
    }
  ];

  const captions = {
    // columns
    fragrance: 'fragrance',
    aroma: 'aroma',
    cleanliness: 'cleanliness',
    sweetness: 'sweetness',
    taste: 'taste',
    acidity: 'acidity',
    aftertaste: 'aftertaste',
    balance: 'balance',
    global: 'global'
  };

  return <RadarChart captions={captions} data={data} />;
}

export default Radar;
