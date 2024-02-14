import React, { useState, useEffect } from 'react';
import gitlogo from '../images/gitlogo.jpg';

const GhPortfolio = ({ username }) => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        setPortfolios(data);
      } catch (error) {
        console.error('Could not fetch portfolios', error);
      }
    };

    fetchPortfolios();
  }, [username]);

  const categories = [
    {
      title: "Objektorienterad programmering med C# och .NET",
      topics: ["oop"],
    },
    {
      title: "Programmering av databaser och SQL",
      topics: ["sql"],
    },
    {
      title: "Webbutveckling Frontend med HTML5 + CSS + JavaScript",
      topics: ["frontend"],
    },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
    <h2 style={{ textAlign: 'center' }}>
        <img src={gitlogo} alt="gitLogo" style={{ width: '70px', height: 'auto', marginRight: '1px' }} />
        Public Github Projects for {username}
      </h2>

      {categories.map(category => (
        <div key={category.title}>
          <h3>{category.title}</h3>
          <ul className="portfolio-list">
            {portfolios
              .filter(repo => repo.topics.some(topic => category.topics.includes(topic)))
              .map(repository => (
                <li key={repository.id}>
                  <strong><a href={repository.html_url} target="_blank" rel="noopener noreferrer">{repository.name}</a></strong>: {repository.description}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GhPortfolio;