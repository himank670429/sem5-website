import { Link } from "react-router-dom";
import "../../stylesheet/pyq.css";
function PYQ({ number, title, view_url, download_url }) {
	return (
		<div className="pyq-item">
			<div className="start">
				<span className="number">{number}.</span>
				<span className="title">{title}</span>
			</div>
			<div className="end">
				<Link className="btn" to={view_url} target="_blank">
					view
				</Link>
				<a href={download_url} className="btn">
					download
				</a>
			</div>
		</div>
	);
}

export default PYQ;
