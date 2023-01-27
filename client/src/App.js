import './App.css';
import Header from './containers/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
// import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" exact element={<ProductListing />} />
      <Route path="/product/:productId" exact element={<ProductDetail />} />
      <Route>404 Not Found !</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
