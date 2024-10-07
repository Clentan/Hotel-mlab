
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Hoempage';
import Services from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import PageNavigation from './component/pagenavigation';
import Book from './pages/Book'

const App = () => {
  return (
    <BrowserRouter>
    <PageNavigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Book' element={<Book/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
