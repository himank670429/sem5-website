import {Link} from 'react-router-dom';
import '../stylesheet/notfoundpage.css';
function NotFoundPage() {
  return (
    <div className = "not-found">
        <span className='heading'>{'Page Not found! :('}</span>
        <Link to = '/'>{'<< back'}</Link> 
        <span className = "heading-2">{"go back to home page"}</span>
    </div>
  )
}

export default NotFoundPage