import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Book from "../simple/Book";
import PYQ from "../simple/PYQ";
import BooksPage from "../../pages/BooksPage";
import NotFoundPage from "../../pages/NotFoundPage";
import Playlist from "../simple/Playlist";
import useData from "../../hooks/useData";
import PYQPage from "../../pages/PYQPage";
function Main() {
	const data = useData();
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/books" element={<BooksPage />}>
				{data.map((sub) => (
					<Route
						key={sub.to}
						path={sub.to}
						element={
							<>
								<h1 className="heading">{sub.name}</h1>
								<div className="book">
									{sub.books.map((book, index) => (
										<Book
											key={index}
											img={book.book_cover}
											number={index + 1}
											title={book.book_name}
											view_url={book.book_view_link}
											download_url={
												book.book_download_link
											}
										/>
									))}
								</div>
							</>
						}
					/>
				))}
			</Route>
			<Route path="/playlist" element={<Playlist />} />
			<Route path="/pyqs" element={<PYQPage />}>
				{data.map((sub) => (
					<Route
						key={sub.to}
						path={sub.to}
						element={
							<>
								<h1 className="heading">{sub.name}</h1>
								<div className="pyq">
									{sub.pyqs.length !== 0 ? (sub.pyqs.map((pyq, index) => <PYQ 
										key = {index}
										number = {index+1}
										title = {sub.name + ' - ' + pyq.name}
										view_url = {pyq.view_link} 
										download_url_url = {sub.download_link} 
									/>)) : (<h1 className="heading">{"PYQS not uploaded yet :("}</h1>)}
										
								</div>
							</>
						}
					/>
				))}
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}
export default Main;
