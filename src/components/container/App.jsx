import '../../stylesheet/App.css';
import Header from './Header'
import Main from './main'
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <HashRouter>
      <Header />
      <Main />
    </HashRouter>
    </>
  )
}

export default App
