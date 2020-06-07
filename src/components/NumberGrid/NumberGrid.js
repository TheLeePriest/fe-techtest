import React, { useEffect, useState, useMemo } from 'react';
import { numberArrayGenerator, numberIsMultipleOf } from "../../modules/utils";
import GridItem from "../GridItem/GridItem";
import './NumberGrid.css';

const NumberGrid = () => {
  const [numberArray, setNumberArray] = useState([]);
  const [activeNumberArray, setActiveNumberArray] = useState([]);
  const [numberClicked, setNumberClicked] = useState(null);

  useEffect(() => {
    setNumberArray(numberArrayGenerator(1,144))
  }, []);

  const setMultiplesActive = (number) => {
    if(number === numberClicked) {
      setActiveNumberArray([]);
      setNumberClicked(null);
      return;
    }

    setActiveNumberArray(numberIsMultipleOf(number, numberArray));
    setNumberClicked(number)
  }

  const checkNumberisActive = (number, activeNumbers) => activeNumbers.includes(number);

  const renderGridItems = useMemo(() => {
    return (numberArray.map(number =>
        <GridItem
            key={number}
            value={number}
            setMultiplesActive={setMultiplesActive}
            active={checkNumberisActive(number, activeNumberArray)}
        />
        )
    )
  }, [numberArray,activeNumberArray]);


  return (
      <div className="number-grid">
        {renderGridItems}
      </div>
  )
};

export default NumberGrid;
