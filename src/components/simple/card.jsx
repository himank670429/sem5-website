import { Link } from "react-router-dom";
function Card({ desc, img, to, syllabus, playlist }) {
	return (
		<div className="card">
			<img src={process.env.PUBLIC_URL + img} alt={desc} />
			<span className="desc">{desc}</span>
			<div className="end">
				<Link to={syllabus} className="btn" target="_blank">
					syllabus
				</Link>
				<Link to={"/books/" + to} className="btn">
					books
				</Link>
				{playlist ? (
					<Link to={playlist} className="btn" target="_blank">
						playlist
					</Link>
				) : (
					<Link to={"/playlist"} className="btn">
						playlist
					</Link>
				)}
        <Link to = {'/pyqs/' + to} className="btn">
          PYQS
        </Link>
			</div>
		</div>
	);
}

export default Card;
