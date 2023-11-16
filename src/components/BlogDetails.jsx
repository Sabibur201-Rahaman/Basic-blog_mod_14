import React from "react";

function BlogDetails(props) {
  return (
    <div>
      <div className="container mx-auto my-16 p-9">
        <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1"></div>
        <div className="card w-100 glass">
          <figure>
            {/* <img src={props.list["postDetails"]["img"]} alt="car!" /> */}
            {props.list && props.list.postDetails && props.list.postDetails.img && (
  <img src={props.list.postDetails.img} alt="car!" />
)}
          </figure>
          <div className="card-body">
            {/* <h2 className="card-title">{props.list['postDetails']['title']}</h2> */}
            {props.list && props.list.postDetails && props.list.postDetails.title && (
  <h2 className="card-title">{props.list.postDetails.title}</h2>
)}

            {/* <p>{props.list['postDetails']['content']}</p> */}
            <p>{props.list && props.list.postDetails && props.list.postDetails.content ? props.list.postDetails.content : 'Default Content'}</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
