// src/app/page.js
'use client';
import { useState, useEffect } from 'react';
import HeroCard from '../components/HeroCard';
import styles from './page.module.css';

const Page = () => {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_SUPERHERO_API_TOKEN; // Só pra deixar a API key mais segura ;)
  const BASE_URL = `https://superheroapi.com/api.php/${ACCESS_TOKEN}/`;

  const fetchHeroData = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      const data = await response.json();
      return {
        name: data.name,
        image: data.image.url,
        intelligence: data.powerstats.intelligence || 0,
        strength: data.powerstats.strength || 0,
      };
    } catch (error) {
      console.error('Erro ao buscar os dados do herói:', error);
      return null;
    }
  };

  const loadHeroes = async () => {
    setLoading(true);
    const startId = (page - 1) * 10 + 1;
    const heroIds = Array.from({ length: 10 }, (_, i) => startId + i);
    const results = await Promise.all(heroIds.map((id) => fetchHeroData(id)));
    setHeroes((prevHeroes) => [...prevHeroes, ...results.filter((hero) => hero !== null)]);
    setLoading(false);
  };

  useEffect(() => {
    loadHeroes();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={styles.container}>
      <div id="heroes">
        {heroes.map((hero, index) => (
          <HeroCard key={index} {...hero} />
        ))}
      </div>
      <div id="load-more" className={styles.buttonLoadMoreContainer}>
        {heroes.length % 10 === 0 && heroes.length > 0 && (
          <button 
            onClick={handleLoadMore} 
            disabled={loading} 
            className={styles.buttonLoadMore}
          >
            {loading ? 'Carregando...' : 'Carregar Mais'}
          </button>
        )}
      </div>
      <div className={styles.spacingAfterButton}></div>
    </div>
  );
};

export default Page;
