import { useContext, useState } from "react";
import PostCard from "./PostCard";
import PostUpdateCard from "./PostUpdateCard";

export default function PostContainer(props) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <PostUpdateCard {...props} setIsEdit={setIsEdit} />
      ) : (
        <PostCard {...props} setIsEdit={setIsEdit} />
      )}
    </>
  );
}
