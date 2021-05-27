import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeWithHook from './components/CakeWithHook';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <CakeWithHook/>
      </div>
    </Provider>
    
  );
}

export default App;
