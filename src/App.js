import React from 'react';
import './main.scss';
import About from './components/About';
import Work from './components/Work';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SimpleReactLightbox from 'simple-react-lightbox';

function App() {
	return (
		<div>
			<SimpleReactLightbox>
				<Router>
					<div className="App">
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about" exact component={About} />
							<Route path="/work" exact component={Work} />
						</Switch>
					</div>
				</Router>
				<Footer />
			</SimpleReactLightbox>
		</div>
	);
}

export default App;
