import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const App: React.FC = () => {
  const [title, setTitle] = useState<User>();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          <code>
            {title?.name}
            {title?.age}
          </code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          type="text"
          value={title?.name}
          onChange={(event) => setTitle({ age: 1, name: event.target.value })}
        />
      </header>
    </div>
  );
};

export default App;
