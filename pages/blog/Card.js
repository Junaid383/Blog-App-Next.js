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
      {props.getblogs.map((blogitem, idx) => (
        <CardItem
          key={idx}
          id={blogitem._id}
          image={blogitem.image}
          heading={blogitem.heading}
          content={blogitem.content}
          author = {blogitem.author}
        />
      ))}


    </>
  );
}

export default Card;

