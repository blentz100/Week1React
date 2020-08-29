import React from 'react';

export default class LoginForm extends React.Component{
	render(){
		return (
			<div>
				<form className="btn">				
					<h3>Log In</h3> 
					<input type="text" name="userName" placeholder="User Name" />
					<input type="text" name="password" placeholder="password" />
					<input type="submit" value="Submit" />
				</form>
			</div>
				);
	}
}


