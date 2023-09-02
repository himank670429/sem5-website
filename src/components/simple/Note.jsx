import { Link } from "react-router-dom";
import '../../stylesheet/note.css'
function Note({title, view_url, download_url,number}) {
  console.log(download_url)
  return (
    <div className = "note-item">
      <div className = 'start'>
        <span className = "number">{number}.</span>
        <span className = "title">{title}</span>
      </div>
      <div className = 'end'>
        <Link className = "btn" to = {view_url} target = '_blank'>view</Link>
        <a href = {download_url} className='btn'>download</a>
      </div>
    </div>
  )
}

function Notes({notes}){
  let filtered_notes = notes.filter(item => item.url !== "" && item.download !== '')
  return (
    <>
    {(filtered_notes.length === 0) 
      ? <span className="heading-2">Notes not available</span> 
      : filtered_notes.map((note, index) => <Note 
        key = {index}
        title = {note.title}
        number = {index+1}
        view_url = {note.url}
        download_url = {note.download}
      />)
    }
    </>
  )
}

export default Notes;