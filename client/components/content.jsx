import React from 'react'; 

export default Content = ({name}) => (
		<div className="content">
  	<form>
  		<label> Message : <input type="text" name="message"/>
  		</label>
  		
  		<button> Ok </button> 
  	</form>
  </div>
	);