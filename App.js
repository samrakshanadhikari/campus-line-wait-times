import React, { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [waitTimes, setWaitTimes] = useState([
    { id: 1, name: 'Starbucks', wait: 10 },
    { id: 2, name: 'Chick-fil-A', wait: 5 },
    { id: 3, name: 'Advising Office', wait: 20 },
    { id: 4, name: 'Gym', wait: 8 },
  ]);
  const [newPlace, setNewPlace] = useState('');
  const [newWait, setNewWait] = useState('');

  // Filter locations based on search
  const filtered = waitTimes.filter(place =>
    place.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPlace || !newWait) return;
    setWaitTimes([
      ...waitTimes,
      {
        id: Date.now(),
        name: newPlace,
        wait: parseInt(newWait),
      }
    ]);
    setNewPlace('');
    setNewWait('');
  };

  // Voice search function
  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Sorry, your browser does not support speech recognition.');
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log('VOICE SEARCH:', transcript);
      setQuery(transcript);
    };
    recognition.start();
  };

  // Voice submit function
  const handleVoiceSubmit = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Sorry, your browser does not support speech recognition.');
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log('VOICE SUBMIT:', transcript);

      // Parse simple phrases like: "Starbucks 8 minutes"
      const match = transcript.match(/(.+?) (\d+)/);
      if (match) {
        const place = match[1].trim();
        const wait = match[2].trim();
        setNewPlace(place);
        setNewWait(wait);
      } else {
        alert("Sorry, couldn't understand. Try: 'Starbucks 5'.");
      }
    };
    recognition.start();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Campus Line Wait Times</h1>

      {/* Search box with voice button */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Search places..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleVoiceSearch} style={styles.button}>
          🎤
        </button>
      </div>

      {/* Results */}
      <ul style={styles.list}>
        {filtered.map(place => (
          <li key={place.id} style={styles.item}>
            <strong>{place.name}</strong>: {place.wait} min wait
          </li>
        ))}
        {filtered.length === 0 && <li>No results found.</li>}
      </ul>

      {/* Form to submit new wait time */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h3>Add New Wait Time</h3>
          <button onClick={handleVoiceSubmit} type="button" style={styles.button}>
            🎤
          </button>
        </div>
        <input
          type="text"
          placeholder="Place name"
          value={newPlace}
          onChange={(e) => setNewPlace(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Wait time (minutes)"
          value={newWait}
          onChange={(e) => setNewWait(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: '0 auto',
    padding: 20,
    fontFamily: 'sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    margin: '10px 0',
    fontSize: '16px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  form: {
    marginTop: 30,
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
  },
};
