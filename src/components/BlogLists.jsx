import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BlogLists(props) {
  
  return (
    <div>
      <div className="container mx-auto my-16 p-9">
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.list.map((item, index) => {
            return (
              <Link key={index.toString()} to={"/details/"+item['id']} className="">
                <figure>
                  <img src={item["img"]} alt="car!" />
                  <div className="card-body">
                    <h2 className="card-title">{item["title"]}</h2>
                    <p>{item["short"]}</p>
                  </div>
                </figure>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogLists;
