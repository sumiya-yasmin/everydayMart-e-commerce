import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { ProductProvider } from './contexts/productContext';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <ProductProvider>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />}>
     <Route path="/home" element={<HomePage/>}/>
     <Route path="/shop" element={<ShopPage/>}/>
     <Route path="/blog" element={<BlogPage/>}/>
     <Route path="/contact" element={<ContactPage/>}/>
     <Route path='/product/:productId' element={<ProductPage/>} />
     </Route> 
    </Routes>
    </BrowserRouter>
    </ProductProvider>

  );
}

export default App;
