import { useState } from 'react';
import './App.css';

const data = [
  { id: 1, category: 'fruit', name: 'Apple' },
  { id: 2, category: 'fruit', name: 'Banana' },
  { id: 3, category: 'vegetable', name: 'Carrot' },
  { id: 4, category: 'fruit', name: 'Orange' },
  { id: 5, category: 'vegetable', name: 'Lettuce' }
];

function App() {
  const [filter, setFilter] = useState('all')

  const handleFilterChange = (category) => {
    setFilter(category)
  }

  const filteredData = filter === 'all' ? data : data.filter(item => item.category === filter)

  return (
    <div className="App">
      <h1>Filter Example</h1>
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('fruit')}>Fruit</button>
        <button onClick={() => handleFilterChange('vegetable')}>Vegetable</button>
      </div>
      <ul>
        {filteredData.map((item)=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
