import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { ProductDetail } from './Components/ProductDetail';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route
            path="/notfound"
            exact
            component={() => <div>no records</div>}
          ></Route>
          <Route>404 Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
