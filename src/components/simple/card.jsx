import { Link } from "react-router-dom"
function Card({desc, img, to, syllabus}) {
  return (
    <div className="card">
        <img src = {process.env.PUBLIC_URL + img} alt = {desc} />
        <span className="desc">{desc}</span>
        <div className="end">
          <Link to = {syllabus} className="btn" target = '_blank'>syllabus</Link>
          <Link to = {'/books/' + to} className="btn">books</Link>
          <Link to = {'/notes/' + to} className="btn">notes</Link>
        </div>
    </div>
  )
}

export default Card