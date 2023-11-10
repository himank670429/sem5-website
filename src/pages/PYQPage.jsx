import { Link, Outlet } from 'react-router-dom';
function PYQPage() {
    return (
		<>
			<Link className="back-btn" to="/">
				{"<< back"}
			</Link>
			<Outlet />
        </>
	);
}

export default PYQPage