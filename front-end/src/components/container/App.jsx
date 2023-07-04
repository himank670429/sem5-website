import '../../stylesheet/App.css';
import Header from './Header'
import Main from './main'
import Footer from './footer'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Main />
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
