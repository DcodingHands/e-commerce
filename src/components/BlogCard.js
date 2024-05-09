import React from "react";
import "../styles/blogCard.css";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="col-lg-3 col-md-6 col-xs-12 mb-3">
      <div className="card">
        <div className="card-body">
          <img src="../images/images.jpeg" alt="blog" className="img-fluid" />
        </div>
        <div className="card-footer blog-content">
          <div className="clearfix my-2">
            <span className="name float--start">Blog Title</span>
            <span className="date float-end">19th April 2024</span>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut.
          </p>
          <Link to="/blog/:id">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
