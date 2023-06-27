import Feed from './containers/Feed/Feed.jsx';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App
