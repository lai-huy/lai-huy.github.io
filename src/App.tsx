import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout/";
import Portfolio from "./components/Portfolio/";
import Qualifications from "./components/Qualifications";
import Service from "./components/Service";
import Keys from "./components/Keys";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route
						path="/qualifications"
						element={<Qualifications />}
					/>
					<Route path="/service" element={<Service />} />
					<Route path="/keys" element={<Keys />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
