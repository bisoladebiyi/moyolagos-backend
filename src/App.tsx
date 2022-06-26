import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AllPosts from './pages/allPosts';
import NewBlog from './pages/newBlog';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Routes>
         <Route index element={<AllPosts />} />
         <Route path={'/new-post'} element={<NewBlog />} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
