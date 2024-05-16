import React, { useEffect, useState } from 'react';
import { fetchData } from './apiService';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result.features); // Update this line to extract the features array from the result
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      {data ? (
        <ul>
          {data.map((quake, index) => (
            <li key={index}>
              <h2>{quake.properties.title}</h2>
              <p>Magnitude: {quake.properties.magnitude}</p>
              <p>Location: {quake.properties.locality}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;