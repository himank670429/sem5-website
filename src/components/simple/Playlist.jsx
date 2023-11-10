import React from "react";
import { Link } from "react-router-dom";
function Playlist() {
	return (
		<>
			<Link className="back-btn" to="/">
				{"<< back"}
			</Link>
			<h1 className="heading">{"playlist not found :("}</h1>
		</>
	);
}

export default Playlist;
