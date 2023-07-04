import {Link, Outlet} from 'react-router-dom';
function BooksPage() {
  return (
    <>
    <Link className = "back-btn" to = '/'>{'<< back'}</Link>
    <Outlet />
    </>
  )
}

export default BooksPage