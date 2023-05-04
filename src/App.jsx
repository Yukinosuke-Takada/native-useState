import { useState } from 'react';

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState("June");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  }

  return (
    <div>
      <ur>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ur>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={onAddName}
      >
        Add Name
      </button>
    </div>
  )
}

function App() {
  function Counter() {
    const [count, setCount] = useState(10);

    function addOne() {
      setCount(count + 1);
    }

    return (
      <div className="App">
        <button onClick={() => addOne()}>Click me {count}</button>
      </div>
    );
  }

  return (
    <div>
      <Counter />
      <NameList />
    </div>
  )
}

export default App
