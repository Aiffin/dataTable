import User from "./components/User";
import Post from "./components/Post"
import { BrowserRouter as Router,Route,Routes,NavLink } from 'react-router-dom'
import Menu from "./components/Menu";

function App() {
  return (
<Router>
  <Menu/>
      <Routes>
           <Route path={`/user`} element={<User/>}/>
           <Route path={`/post`} element={<Post/>}/>
      </Routes>
    </Router>
  );
}

export default App;
