import logo from "./logo.svg";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPosts } from "./Slices/postsSlice";

import {
  Routes, 
  Route, 
  Navigate, 
  
} from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.route";
import Home from "./routes/home/home.route";
import SinglePost from './components/single-post/single-post.component';
import LoadingSpinner from './components/loading-spinner/loading-spinner.component';

import "./App.scss";
import { fetchLastPost } from './Slices/recentPostSlice';
import CategoryRoute from './routes/category/category.route';



function App() {
  const postStore = useSelector((state) => state.postStored);
  const lastPost = useSelector((state) => state.lastPost);
  const appVars = useSelector((state) => state.applicationVars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchLastPost());
    document.documentElement.setAttribute('data-bs-theme', appVars.theme);
  }, []);

  return (

    
      <Router>
      {
        !lastPost.loading ?
                            
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="inicio" element={<Home />} />
              <Route path="categoria/:category" element={<CategoryRoute />} /> 
              <Route path="posts/:slug" element={<SinglePost />}></Route>
                    
            </Route>
            
              
          </Routes>

        :

        <LoadingSpinner />
      }
      </Router>
  );
}

export default App;
