const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    name: String,
    img: String,
    syllabus: String,
    to: String,
    notes: [
      {
        title: String,
        url: String,
        download: String,
      },
    ],
    books: [
      {
        book_name: String,
        book_cover: String,
        book_view_link: String,
        book_download_link: String,
      },
    ],
}, {
    collection : "data"
});
  

module.exports = mongoose.model('data', dataSchema)