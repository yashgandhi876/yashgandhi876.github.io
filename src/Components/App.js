import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Posts from './Blogs/Posts/Post';
import Symbols from './Symbols/Symbols';
import Navbar from './Navbar/Navbar';
import Uparrow from './Uparrow/Uparrow';
import Home from './Home/Home';
import Spinner from './Spinner/Spinner';
import { createRef } from 'react';

const Projects = React.lazy(() => import('./Projects/Projects'));
const AboutMe = React.lazy(() => import('./AboutMe/AboutMe'));
const Blogs = React.lazy(() => import('./Blogs/Blogs'));
const NotFound = React.lazy(() => import('./Notfound/NotFound'));

class App extends Component {
	state = {
		spinnerref: createRef()
	};
	componentDidMount() {
		const spinshow = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					if (this.state.spinnerref) {
						this.state.spinnerref.current.classList.add('hidespinner');
					}
				}, 500);
				resolve(1);
			});
		};
		const run = async () => {
			try {
				await spinshow();
			} catch (e) {
				console.log(e);
			}
		};
		run();
	}

	render() {
		const spin = (
			<div ref={this.state.spinnerref} className="loadingclass">
				<Spinner />
			</div>
		);
		return (
			<Router>
				<div className="main">
					{spin}
					<Navbar />
					<Uparrow />
					<Switch>
						<Route
							path="/projects"
							render={() => (
								<Suspense fallback={<Spinner />}>
									<Projects />
								</Suspense>
							)}
						/>
						<Route
							path="/aboutme"
							render={() => (
								<Suspense fallback={<Spinner />}>
									<AboutMe />
								</Suspense>
							)}
						/>
						<Route path="/" exact component={Home} />
						<Route
							path="/blogs"
							exact
							render={() => (
								<Suspense fallback={<Spinner />}>
									<Blogs />
								</Suspense>
							)}
						/>
						<Route path={`/blogs/1`} render={() => <Posts />} />
						<Route
							path="/"
							render={() => (
								<Suspense fallback={<Spinner />}>
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
