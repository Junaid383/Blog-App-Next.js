import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "./Card";
import { mongoose } from "mongoose";
import blogSchema from "../../modals/blogSchema";

const mongoDB_URL = `mongodb+srv://junaid:1234@cluster0.fcspjl4.mongodb.net/test?retryWrites=true&w=majority`;

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
    image: "https://placeimg.com/380/230/nature1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
  {
    id: "b5",
    heading: "Heading 5",
    image: "https://placeimg.com/380/230/tech1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
  {
    id: "b3",
    heading: "Heading 3",
    image: "https://placeimg.com/380/230/animals1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas total",
  },
];

function Index({ getblogs }) {
  // console.log("INDEX FILE" , getblogs)

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
            <Card getblogs={getblogs} />
          </div>

          <br></br>
        </div>
      </section>
    </>
  );
}
export default Index;

export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(mongoDB_URL);
  }

  try {
    let getblogs = await blogSchema.find();
    console.log("SSP--------", getblogs);

    return {
      props: { getblogs: JSON.parse(JSON.stringify(getblogs)) }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: {
        error: error.error,
      },
    };
  }
}
