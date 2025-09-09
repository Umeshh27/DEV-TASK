
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Register from './pages/Register';
import Login from './pages/Login';

function App() {
	return (
		<Router>
			<nav className="nav-bar">
				<Link to="/customers">Customers</Link>
				<Link to="/register">Register</Link>
				<Link to="/login">Login</Link>
			</nav>
			<Routes>
				<Route path="/customers" element={<Customers />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;

