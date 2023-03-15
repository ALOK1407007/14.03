import React, { Component } from 'react';


import Parent from './Parent'

import JSON from './userData.json'
class App extends Component {
	constructor(){
		super()
		this.state={
			json:JSON
		}
	}
	render() {
		return (
			 
				<>
				 <Parent data={this.state.json}/>
				 
			 
				 
				</>
				
				
			
		);
	}
}

export default App;
