import React from 'react';

export default (props) => (
	<div className="form-inputs p-20">
		<div>
			<div className="input-field animated fadeinright">
				<input onKeyDown={props.onSearch.bind(this)} id="first_name" type="text" className="validate" />
				<label htmlFor="first_name">Search Podcasts!</label>
			</div>
		</div>
	</div>
)

