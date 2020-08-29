import React from 'react';

export default class Navigation extends React.Component{
	render(){
		return (
			<div>

		<header>
		<nav>
		<a class="a-nav" href="index.html">Home</a>
		<a class="a-nav" href="about.html">About</a>
		<a class="a-nav" href="contact.html">Contact</a>
		</nav>
		</header>
			</div>
				);
	//	return React.createElement('form', {className: 'btn btn-primary'}, 'login form');
		
	}
}


