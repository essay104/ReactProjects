import './App.css';
import Header from './components/Header';

function App() {
  return (
    <body>
      <div className='container'>
        <Header />
        <input type='text'placeholder='포켓몬의 이름을 입력하세요'/>
      </div>
    </body>
  );
}

export default App;
