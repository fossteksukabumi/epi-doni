import React, { useEffect, useState } from "react";
import {
  ListWrapper,
  CommentCard,
  Avatar,
  Name,
  Message,
  Timestamp,
} from "./CommentList.style";

const CommentList = ({ refresh }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycby_Fuwyae9RW4U8ImRsEERk5Nz0Q6XrJzY3e1XqsgGzYjzayVgpoTSGpV7XfQpW/exec"
      );

      const data = await res.json();

      if (Array.isArray(data)) {
        setComments(data.reverse()); // newest first
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [refresh]);

  return (
    <ListWrapper>
      {comments.length === 0 ? (
        <p>Belum ada ucapan.</p>
      ) : (
        comments.map((item, i) => (
          <CommentCard key={i}>
            <Avatar>{item.photo}</Avatar>

            <div>
              <Name>{item.name}</Name>
              <Message>{item.message}</Message>
              <Timestamp>
                {new Date(item.timestamp).toLocaleString()}
              </Timestamp>
            </div>
          </CommentCard>
        ))
      )}
    </ListWrapper>
  );
};

export default CommentList;
