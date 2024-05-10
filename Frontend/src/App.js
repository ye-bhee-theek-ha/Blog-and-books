import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './screens/Home/Home';
import Blog from './screens/Blog/Blog';
import NotFound from './screens/Not Found/NotFound';
import Books from './screens/Books/Books'

function App() {
  return (
    <div className="App bg-green min-h-screen h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:ID" element={<Blog/>} />
          <Route path="/Books" element={<Books/>} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
