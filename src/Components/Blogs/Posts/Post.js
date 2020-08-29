import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './Post.css';

const Post = (props) => {
	let img = 'async_await.jpeg';
	let codeString = [
		`
		function run() {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(99);
					console.log('Done');
				}, 2000);
			});
		}

		console.log('start');
		run().then((result) => {
			console.log(result);
			console.log('end');
		});

		/*  Output:
				start
				Done (after 2 sec)
				99
				end
		*/

	`,
		`
		function run() {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(99);
					console.log('Done');
				}, 2000);
			});
		}

		async function main() {
			console.log('start');
			const result = await run();
			console.log(result);
			console.log('end');
		}

		main();

		/*  Output:
				start
				Done (after 2 sec)
				99
				end
		*/

`
	];
	return (
		<div className="container Post">
			<div className="img">
				<img src={require(`../../../assets/Images/blogs/${img}`)} alt="" width="100%" />
			</div>
			<div className="description">
				<p style={{ textAlign: 'justify' }}>
					If you are JavaScript developer then you definitely heard about this term and if not don't worry,
					I'm here to explain how it works and when to use it.
				</p>
				<h3>Promises</h3>
				<p>
					We all know JavaScript is synchronous & single-threaded. But promises allow JS to execute that code
					in asynchronous way. Rather than returning direct result it returns promise.
				</p>
				<br />
				<h3>Then()</h3>
				<p>
					We usally get result of promise using <code> then()</code> by passing callback function in it. It
					can either be resolved or rejected.
				</p>
				<p>Let's take example</p>
				<SyntaxHighlighter className="code" language="javascript" style={agate}>
					{codeString[0]}
				</SyntaxHighlighter>
				<p>
					{' '}
					When I called run funtion, I passed callback function to then(), it takes result as an argument and
					lets log it to the console. After logging the result I did my next work. Thats how we get result of
					promise using then().
				</p>
				<br />

				<h3>Async and Await</h3>
				<p>Let's do the same using async and await, here we do not need then().</p>
				<SyntaxHighlighter className="code" language="javascript" style={agate}>
					{codeString[1]}
				</SyntaxHighlighter>

				<p>
					{' '}
					Await keyword works only in asynchronous function so I make main function as asynchronous. Now We
					have to put await keyword in front of run function call which returns promise. Due to await keyword
					thread will wait there untill it get either resolve or reject.
				</p>
			</div>
		</div>
	);
};

export default Post;
