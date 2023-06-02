import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route, Navigate} from "react-router-dom";
import Home from './Pages/Home/Home';
import Template from './Pages/Template/Template';
import Tips from './Pages/Tips/Tips'
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';

import { useEffect, useState } from "react";
import axios from "axios";
import Home2 from "./Pages/Home2";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "./App.css";

function App() {

    const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

  return (
    
    <ResumeState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/templates" element={<Template />} />
          <Route exact path="/tips" element={<Tips />} />
          <Route exact path="/about" element={<About />} />
		  <Route
					exact
					path="/"
					element={user ? <Home2 user={user} /> : <Navigate to="/login" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
        </Routes>
      </div>
    
    </ResumeState>
  );
}

export default App;
