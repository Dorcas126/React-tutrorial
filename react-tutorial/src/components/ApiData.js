import React, { useState, useEffect } from 'react';
import './ApiData.css';

const FetchQuote = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const category = 'learning';
        const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
        const ApiKey = 'pN7C6QCqr4X5uH9a5SJmXg==IHJMOO4hHQc5s0hK';
        const headers = {
          'Content-Type': 'application/json',
          'X-Api-Key': ApiKey,
        };

        const response = await fetch(url, { headers });
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (error) return <h2 className="error">An error occurred!</h2>;

  return (
    <div className="quotes">
      {response.map((quote) => (
        <div key={quote.id}>
          {quote.quote}
          <p className="author">{quote.author}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchQuote;