import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const CommentCountSpan = (props: { boardId: number }) => {
  const { boardId } = props;
  const [commentCnt, setCommentCnt] = useState(0);

  const getCommentsCount = () => {
    axios
      .get(`http://${process.env.IP_ADDRESS}/comment/get_comments.php?boardId=${boardId}`)
      .then((res) => {
        setCommentCnt(res.data.length);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  useEffect(() => {
    getCommentsCount();
  }, []);

  return <span>{`${commentCnt}κ°μ λκΈ`}</span>;
};

export default CommentCountSpan;
