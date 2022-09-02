import { useEffect, useState } from "react";
import axios from "axios";

import ReplyForm from "./ReplyForm";
import ReplyList from "./ReplyList";

const Reply = (props) => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    const fetchReplies = async () => {
      const URL = `http://localhost:5001/replies?postId=${props.postId}`;
      const response = await axios.get(URL);

      setReplies(response.data);
    };

    fetchReplies();
  }, []);

  return (
    <div>
      <ReplyForm replies={replies} setReplies={setReplies} postId={props.postId} />
      <ReplyList replies={replies} setReplies={setReplies} postId={props.postId} />
    </div>
  );
};

export default Reply;