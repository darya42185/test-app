import { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './store/CartReducer';
import Header from "./components/Layout/Header";
import Modules from './components/Modules/Modules';
import Cart from './components/Cart/Cart';

const store = createStore(cartReducer);

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  console.log(store.getState().cart)

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Provider store={store}>
      {cartIsShown &&  <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Modules/>
      </main>
    </Provider>
  );
}

export default App;
