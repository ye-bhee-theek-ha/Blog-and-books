import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import Card from './components/card/card';
import Navbar from './components/navbar/navbar';
import BookCard from './components/bookCard/bookCard';
import BlogCard from './components/blogCard/blogCard';

function App() {
  return (
    <div className="App bg-lgreen h-screen">
      <Navbar/>

      <BookCard
        src= "https://picsum.photos/130/180"
      />

      <Button
        className="text-heading"
        name= "button"
        containerclassName= "border"
      />

      <BlogCard
        src= "https://picsum.photos/130/180"
      />

      <Card/>
    </div>
  );
}
 
export default App;
