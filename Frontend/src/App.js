import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Auth/Auth';
import Home from './screens/Home/Home';
import Blog from './screens/Blog/Blog';
import NotFound from './screens/Not Found/NotFound';
import Books from './screens/Books/Books'
import UserAuth from './screens/UserAuth/UserAuth';
import Profile from './screens/Profile/Profile';

function App() {
  return (
    <div className="App bg-green min-h-screen h-full">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:ID" element={<Blog/>} />
            <Route path="/Books" element={<Books/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/auth" element={<UserAuth/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
