/** @format */

import React, { useEffect, useState } from 'react';
import {
  fetchAttributes,
  fetchAttributeValues,
} from '../../../Services/CardServices';
import styles from './card.module.css';

const Cards = () => {
  const [attributes, setAttributes] = useState([]);
  const [selectedParam, setSelectedParam] = useState('');
  const [paramValues, setParamValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const payload = {
      Client_Id: 20,
      Domain_Id: 9,
    };

    fetchAttributes(payload)
      .then(setAttributes)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedParam) {
      fetchAttributeValues({ attribute_name: selectedParam })
        .then(setParamValues)
        .catch(() => setParamValues([]));
    } else {
      setParamValues([]);
    }
  }, [selectedParam]);

  const handleFilter = () => {
    if (selectedParam && selectedValue) {
      setCards([
        {
          param: selectedParam,
          value: selectedValue,
        },
      ]);
    }
  };

  const clearFilters = () => {
    setSelectedParam('');
    setSelectedValue('');
    setCards([]);
  };

  return (
    <div className={styles.container}>
      <h4>FILTERS</h4>

      <div className={styles.row}>
        <select
          className={styles.dropdown}
          value={selectedParam}
          onChange={(e) => {
            setSelectedParam(e.target.value);
            setSelectedValue('');
          }}
        >
          <option value="">Parameter</option>
          {attributes.map((attr, i) => {
            const key = Object.keys(attr)[0];
            const label = attr[key];
            return (
              <option key={i} value={key}>
                {label}
              </option>
            );
          })}
        </select>

        <select
          className={styles.dropdown}
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          disabled={!paramValues.length}
        >
          <option value="">Select Value</option>
          {paramValues.map((val, i) => (
            <option key={i} value={val}>
              {val}
            </option>
          ))}
        </select>

        <button className={styles.filterBtn} onClick={handleFilter}>
          FILTER
        </button>
        <button className={styles.clearBtn} onClick={clearFilters}>
          CLEAR
        </button>
      </div>

      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <h3>{card.param}</h3>
            <p>{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
