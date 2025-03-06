import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages';

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </>
  )
}
