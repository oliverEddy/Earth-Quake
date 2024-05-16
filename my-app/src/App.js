import React from 'react';
import { app } from './firebase';

function App() {
  React.useEffect(() => {
    try {
      const name = app.name;
      console.log(`Connected to Firebase app '${name}'`);
    } catch (error) {
      console.error("Error connecting to Firebase", error);
    }
  }, []);

  return (
    <div className="App">
      {/* Your app content here */}
    </div>
  );
}

export default App;