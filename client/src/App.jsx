import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Feed from './containers/Feed/Feed.jsx';
import CreateEntry from './containers/CreateEntry/CreateEntry.jsx';
import CompleteEntry from "./containers/CompleteEntry/CompleteEntry.jsx";
import './App.css'

function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed/>}/>
        <Route path ="/:id" element={<CompleteEntry/>}/>
        <Route exact path="/newPost" element={<CreateEntry/>}/>
        {/* <Route path='*' element={<Error/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
