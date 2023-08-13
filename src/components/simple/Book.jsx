import '../../stylesheet/Book.css';
import { Link } from 'react-router-dom';
function Book({img, title, number, view_url, download_url}) {
  return (
    <div className='book-item'>
      <div className='start'>
        <span className = 'number'>{number + '.'}</span>
        <img src = {process.env.PUBLIC_URL + img} alt = 'book cover'></img>
        <span className = 'title'>{title}</span>
      </div>
      <div className = 'end'>
        <Link to = {view_url} className='btn'>view</Link>
        <a href = {download_url} className='btn'>download</a> 
      </div>
    </div>
  )
}

export default Book