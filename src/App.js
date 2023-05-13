import {Route, Routes} from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import Layout from './components/Layout/';
import Portfolio from './components/Portfolio/';
import Qualifications from './components/Qualifications';
import Service from './components/Service';

function App() {
	return (<>
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/qualifications" element={<Qualifications />} />
				<Route path="/service" element={<Service />} />
			</Route>
		</Routes>
	</>);
}

export default App;
