import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "./Card";

const Dummy_data = [
  {
    id: "b1",
    heading: "Heading 1",
    image: "https://placeimg.com/380/230/nature",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
  {
    id: "b2",
    heading: "Heading 2",
    image: "https://placeimg.com/380/230/tech",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
  {
    id: "b3",
    heading: "Heading 3",
    image: "https://placeimg.com/380/230/animals",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
  {
    id: "b4",
    heading: "Heading 4",
    image: "https://placeimg.com/380/230/nature",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
  {
    id: "b5",
    heading: "Heading 5",
    image: "https://placeimg.com/380/230/tech",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
  {
    id: "b3",
    heading: "Heading 3",
    image: "https://placeimg.com/380/230/animals",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
];

function index(props) {
  const [loadBlog, setLoadedBlod] = useState([]);

  useEffect(() => {
    return () => {
      setLoadedBlod(Dummy_data);
    };
  }, []);

  return (
    <>
      <section className="details-card">
        <div className="container">
          <div className="row">
          
            <Card blogData={loadBlog} />
          
          </div>

          <br></br>

         
        </div>
      </section>
    </>
  );
}

export default index;
