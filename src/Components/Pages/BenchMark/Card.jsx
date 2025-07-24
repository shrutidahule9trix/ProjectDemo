/** @format */

import React, { useEffect, useState } from 'react';
import { fetchCardTable } from '../../../Services/CardServices';
import styles from './card.module.css';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCards = async () => {
      try {
        const data = await fetchCardTable();
        setCards(data?.carddata || []);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    getCards();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.cardContainer}>
      {cards.length === 0 ? (
        <p>No cards to display.</p>
      ) : (
        cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <img
              src={card.imageURL}
              alt={card.title}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
            <p className={styles.cardMeta}>
              <strong>Genre:</strong> {card.genre}
            </p>
            <p className={styles.cardMeta}>
              <strong>Year:</strong> {card.year}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
