import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AllPosts from './pages/allPosts';
import NewBlog from './pages/newBlog';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import PostsDetails from './pages/postsDetails';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Routes>
         <Route index element={<AllPosts />} />
         <Route path={'/new-post'} element={<NewBlog />} />
         <Route path={'/posts/:id'} element={<PostsDetails />} />
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
