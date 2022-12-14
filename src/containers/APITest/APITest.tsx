import {useState} from "react";
import useAxios from "../../hooks/useAxios";

const APITest = () => {
  const [postId, setPostId] = useState(1);
  // method to use useAxios hook twice in same component
  const {response, loading, error, sendData} = useAxios({
    method: "post",
    url: `/posts/${postId}`,
    headers: {
      accept: "*/*",
    },
  });

  const getNextPost = () => {
    setPostId(postId + 1);
    sendData();
  };

  // const { response: res1, loading: load1, error: err1, sendData: send1} = useAxios({
  //   method: "get",
  //   url: `/posts/${postId}`,
  //   headers: {
  //     accept: "*/*",
  //   },
  // });

  // const getNextPost = () => {
  //   setPostId(postId + 1);
  //   send1();
  // };

  return (
    <div>
      {loading && <p style={{color: "white"}}>Loading...</p>}
      {error && <p style={{color: "white"}}>{error.message}</p>}
      {!loading && !error && response && (
        <article style={{color: "white"}} className="post">
          <h3 className="post-title">{response?.data.title}</h3>
          <p className="post-body">{response?.data.body}</p>
        </article>
      )}
      <button onClick={() => getNextPost()}>Fetch New post</button>
      {/* <button onClick={() => getNextPost1()}>Fetch New post</button> */}
    </div>
  );
};

export default APITest;
