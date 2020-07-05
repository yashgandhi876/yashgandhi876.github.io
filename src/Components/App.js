import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Posts from './Blogs/Posts/Post';
import Symbols from './Symbols/Symbols';
import Navbar from './Navbar/Navbar';
import Uparrow from './Uparrow/Uparrow';
import Home from './Home/Home';

const Projects = React.lazy(() => import('./Projects/Projects'));
const AboutMe = React.lazy(() => import('./AboutMe/AboutMe'));
const Blogs = React.lazy(() => import('./Blogs/Blogs'));
const NotFound = React.lazy(() => import('./Notfound/NotFound'));

class App extends Component {
	render() {
		return (
			<Router>
				<div className="main">
					<Navbar />
					<Uparrow />
					<Switch>
						<Route
							path="/projects"
							render={() => (
								<Suspense fallback="Loading....">
									<Projects />
								</Suspense>
							)}
						/>
						<Route
							path="/aboutme"
							render={() => (
								<Suspense fallback="Loading....">
									<AboutMe />
								</Suspense>
							)}
						/>
						<Route path="/" exact component={Home} />
						<Route
							path="/blogs"
							exact
							render={() => (
								<Suspense fallback="Loading....">
									<Blogs />
								</Suspense>
							)}
						/>
						<Route path={`/blogs/1`} render={() => <Posts />} />
						<Route
							path="/"
							render={() => (
								<Suspense fallback="Loading....">
									<NotFound />
								</Suspense>
							)}
						/>
					</Switch>
					<Symbols />
				</div>
			</Router>
		);
	}
}

export default App;
