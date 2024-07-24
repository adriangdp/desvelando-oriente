import React from "react";
import { Card } from "react-bootstrap";

const PostPreview = ({ post }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>{post.excerpt}</Card.Text>
    </Card>
  );
};

export default PostPreview;
