import React , {useState} from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';

const priceChart = {
  iphone : 1000,
  galaxy :800,
  nokia : 300,
  redmi : 200,
  sony : 500,
  lg:100,
  xiaomi:50,
  oneplus:400,
  asus:80

}
let newObject = Object.keys(priceChart).reduce((acc, val) => {
  acc[val] = 0;
  return acc;
}, {});







const App = () => {
  
  const [state,setState] = useState(
     newObject
  ) 
  console.log(state)
  const clicksAdd = (e) => {
    
    
    switch(e){
      case e:
        setState({...state,[e]:state[e]+1}) 
        break;
    }
  }

  const clicksRemove = (e) => {
    
    
    switch(e){
      case e:
        if(state[e]>0)
          setState({...state,[e]:state[e]-1}) 
        break;
    }
  }
  

  return (
    
    <div className="App">
      
      <Products items = {priceChart} clickedAdd={clicksAdd} clickedRemove = {clicksRemove} />
      <Cart cart={state} priceChart = {priceChart} />
    </div>
  );
}

export default App;
