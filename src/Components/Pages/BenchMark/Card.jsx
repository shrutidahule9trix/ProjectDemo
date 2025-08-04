/** @format */

import React, { useEffect, useState } from 'react';
import {
  fetchAttributes,
  fetchAttributeValues
} from '../../../Services/CardServices';
import styles from './card.module.css';

const Cards = () => {
  const [attributes, setAttributes] = useState([]);
  const [selectedParams, setSelectedParams] = useState([]);
  const [paramValues, setParamValues] = useState({});
  const [selectedValues, setSelectedValues] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const payload = {
      Client_Id: 20,
      Domain_Id: 9,
      
    };
    fetchAttributes(payload).then(setAttributes).catch(console.error);
  }, []);

  const handleAddParam = (e) => {
    const value = e.target.value;
    if (value && !selectedParams.includes(value)) {
      setSelectedParams((prev) => [...prev, value]);

      const payload = {
        attribute_Name: [value],
      };
      fetchAttributeValues(payload)
        .then((res) => {
          setParamValues((prev) => ({
            ...prev,
            [value]: res?.[value] || [],
          }));
        })
        .catch((err) => {
          console.error(err);
          setParamValues((prev) => ({
            ...prev,
            [value]: [],
          }));
        });
    }
    e.target.value = '';
  };

  const handleValueChange = (param, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [param]: value,
    }));
  };

  const handleFilter = () => {
    const filtered = selectedParams
      .filter((param) => selectedValues[param])
      .map((param) => ({
        param,
        value: selectedValues[param],
      }));
    setCards(filtered);
  };

  const clearFilters = () => {
    setSelectedParams([]);
    setParamValues({});
    setSelectedValues({});
    setCards([]);
  };

  return (
    <div className={styles.container}>
      <h4>FILTERS</h4>
      <div className={styles.row}>
        <select className={styles.dropdown} onChange={handleAddParam}>
          <option value="">Parameter</option>
          {attributes.map((attr, i) => {
            const key = Object.keys(attr)[0];
            const label = attr[key];
            return (
              <option
                key={i}
                value={key}
                disabled={selectedParams.includes(key)}
              >
                {label}
              </option>
            );
          })}
        </select>

        {selectedParams.map((param, index) => (
          <select
            key={index}
            className={styles.dropdown}
            value={selectedValues[param] || ''}
            onChange={(e) => handleValueChange(param, e.target.value)}
          >
            <option value="">Select {param}</option>
            {(paramValues[param] || []).map((val, i) => (
              <option key={i} value={val}>
                {val}
              </option>
            ))}
          </select>
        ))}

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
