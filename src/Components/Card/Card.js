import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
	return (
		<Link style={{ color: 'white', textDecoration: 'none' }} to={`/blogs/${props.blog_id}`}>
			<div className="Card_Card">
				<div className="Card_img">
					<img
						className="Card_Img"
						src={require(`../../assets/Images/blogs/${props.img}`)}
						alt=""
						width="300px"
						height="200px"
					/>
				</div>
				<div className="Card_description">
					<h3 style={{ textAlign: 'center' }}>{props.name}</h3>
					<p>{props.description}</p>
					<p>Author: {props.author}</p>
					<p>Publish Date: {props.date}</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
