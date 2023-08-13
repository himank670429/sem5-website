import {Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';
import Book from '../simple/Book';
import NotesLayout from '../../pages/NotesLayout';
import BooksPage from '../../pages/BooksPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Notes from '../simple/Note';
import useData from '../../hooks/useData';
function Main() {
    const data = useData();
    return (
    <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/books" element = {<BooksPage />} >
            {data.map(item => <Route 
                key = {item.to}
                path = {item.to}
                element = {<>
                    <h1 className='heading'>{item.name}</h1>
                    <div className='book'>
                    {item.books.map((book, index) => <Book
                        key = {index}
                        img = {book.book_cover}
                        number = {index+1}
                        title = {book.book_name}
                        view_url = {book.book_view_link}
                        download_url = {book.book_download_link}
                        />)}
                    </div>
                </>}
            />)}
        </Route>
        <Route path = "/notes" element = {<NotesLayout />}>
            {data.map(item => <Route 
                key = {item.to}
                path = {item.to}
                element = {<>
                    <h1 className='heading'>{item.name}</h1>
                    <div className='note'>
                        {<Notes notes = {item.notes}/>}
                    </div>
                </>}
            />)}
        </Route>
        <Route path = '*' element = {<NotFoundPage />}/>
    </Routes>
    );
}
export default Main;