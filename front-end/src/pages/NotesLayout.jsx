import {Outlet, Link} from 'react-router-dom';
function NotesLayout() {
  return (
    <>
    <Link className = "back-btn" to = '/'>{'<< back'}</Link>
    <Outlet />
    </>
  )
}

export default NotesLayout;