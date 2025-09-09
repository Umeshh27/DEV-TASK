

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Customers from './pages/Customers';

// Wrapper for Login to handle authentication
function LoginWithAuth({ onLogin }) {
	return <Login onLogin={onLogin} />;
}

function App() {
	const [isAuthenticated, setIsAuthenticated] = React.useState(false);

	// Simulate login for demo purposes
	const handleLogin = () => setIsAuthenticated(true);
	const handleLogout = () => setIsAuthenticated(false);

	return (
		<>
			<div>Hello World</div>
			<Router>
				<nav className="nav-bar">
					{!isAuthenticated && <Link to="/register">Register</Link>}
					{!isAuthenticated && <Link to="/login">Login</Link>}
					{isAuthenticated && <Link to="/customers">Customers</Link>}
					{isAuthenticated && <button onClick={handleLogout} style={{marginLeft: '1rem'}}>Logout</button>}
				</nav>
				<Routes>
					{!isAuthenticated && <Route path="/register" element={<Register />} />}
					{!isAuthenticated && <Route path="/login" element={<LoginWithAuth onLogin={handleLogin} />} />}
					{isAuthenticated && <Route path="/customers" element={<Customers />} />}
				</Routes>
			</Router>
		</>
	);
}




export default App;

