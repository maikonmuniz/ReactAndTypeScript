import React, {ChangeEvent, useState} from 'react';

function App() {

  const [name, setName] = useState<string | null>(null);

  // const task = (nameTask: string, hours: string): string => {
  //     return `Task name: ${nameTask} - hours: ${hours}`;
  // }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
         {name}
        </p>
        <input type="text" onChange={handleChange}/>
      </header>
    </div>
  );
}

export default App;
