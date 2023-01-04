import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CardItem from "./CardItem";

function Card(props) {
  const router = useRouter();
  const [loadBlog, setLoadedBlod] = useState([]);

  //
  useEffect(() => {
    setLoadedBlod(props.blogData);
  }, []);

  return (
    <>
      {props.blogData.map((blogitem) => (
        <CardItem
          id={blogitem.id}
          image={blogitem.image}
          heading={blogitem.heading}
          content={blogitem.content}
        />
        
      ))}
    </>
  );
}

export default Card;
