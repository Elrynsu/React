import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductDetail, ProductList } from '../pages';



export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
    </>
  )
}
