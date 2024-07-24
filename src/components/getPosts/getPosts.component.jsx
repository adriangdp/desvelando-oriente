import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../Slices/postsSlice";

export const PostList = () => {
  const postStore = useSelector((state) => state.postStored);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {/*
            <h1>Hello Data fetching...</h1>
            
            {postStore.loading && <p>Is loading...</p>}
            {!postStore.loading && postStore.error ? <p>Error : {postStore.error}</p> : null}
            {!postStore.loading && postStore.postsPublished.length ? 
                
                <p>{postStore.postsPublished[0].title}</p>
             : <p> something happened with json OH NO: {postStore.postsPublished.length}</p>}
 */}
    </>
  );
};

export default PostList;
