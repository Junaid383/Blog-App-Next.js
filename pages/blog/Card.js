import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CardItem from "./CardItem";
import PageNo from "./[pageNo]";

function Card(props) {
  const router = useRouter();
  const [loadBlog, setLoadedBlod] = useState([]);
  // console.log(props.getblogs)

  // useEffect(() => {
  //   // setLoadedBlod(getblogs);
  // }, []);

  return (
    <>
      <table className="table table-hover ">
        <thead>
          <tr class="table-dark ">
            <th scope="col">#</th>
            <th scope="col">Author</th>
            <th scope="col">Heading</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

      {props.getblogs.map((blogitem, idx) => (
        <CardItem
        key={idx}
        id={blogitem._id}
        image={blogitem.image}
        heading={blogitem.heading}
        content={blogitem.content}
        author={blogitem.author}
        date={blogitem.date}
        // createdAt = {blogitem.createdAt}
        />
        ))}
        </table>


        {/* {props.getblogs.map((blogitem, idx) => (
        <CardItem
        key={idx}
        id={blogitem._id}
        image={blogitem.image}
        heading={blogitem.heading}
        content={blogitem.content}
        author={blogitem.author}
        date={blogitem.date}
        // createdAt = {blogitem.createdAt}
        />
        ))} */}
    </>
  );
}

export default Card;
