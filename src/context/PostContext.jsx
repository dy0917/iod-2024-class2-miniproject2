import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const PostContext = createContext();

const reducer = (state, action) => {
  switch (
    action.type // switch statements are common in reducers
  ) {
    case "initPosts":
      return action.payload;
    case "addPosts":
      return [...state, action.payload];
    case "deletePostById":
      const newState = state.filter((post) => post.id !== action.payload);
      return newState;
    default:
      return state;
  }
};

export const PostProvider = (props) => {
  // store the current user in state at the top level
  const [posts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:3000/posts");
      dispatch({ type: "initPosts", payload: response.data.result });
    };
    getData();
  }, []);

  // const addPosts = (post) => {
  //   setPosts([...posts, post]);
  // };

  // const deletePostById = (id) => {
  //   const resultList = posts.filter((post) => post.id !== id);
  //   setPosts(resultList);
  // };
  return (
    <PostContext.Provider value={{ posts, postDispatch: dispatch }}>
      {props.children}
    </PostContext.Provider>
  );
};
