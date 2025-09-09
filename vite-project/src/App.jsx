
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
	return (
		<Router>
			<nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
				<Link to="/register">Register</Link>
				<Link to="/login">Login</Link>
			</nav>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
