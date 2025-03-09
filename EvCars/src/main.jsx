import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { ScrollToTop } from './components/index.jsx'

createRoot(document.getElementById('root')).render(
    <Router>
        <ScrollToTop />
        <App />
    </Router>
)
