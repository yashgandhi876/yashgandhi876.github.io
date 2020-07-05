import React, { Component } from 'react';
import Card from '../Card/Card';
import data from './blogsdata.json';

class Blogs extends Component {
	render() {
		let post = data.map((blog) => <Card key={blog.blog_id} {...blog} />);
		return (
			<div style={{ paddingBottom: '90px' }} className="container">
				{post}
			</div>
		);
	}
}

export default Blogs;
