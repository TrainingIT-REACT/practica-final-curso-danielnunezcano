import React from 'react';
import SearchAlbum from './SearchAlbum';

import '../App.css';

const Album = ({ match }) => (
	<div className="center">
		<div className="content">
			<div className="song">
				<SearchAlbum id={match.params.id} />
			</div>
		</div>
	</div>
);

export default Album;
