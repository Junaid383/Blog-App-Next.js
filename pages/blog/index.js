import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "./Card";
import { mongoose } from "mongoose";
import blogSchema from "../../modals/blogSchema";

const mongoDB_URL = `mongodb+srv://junaid:1234@cluster0.fcspjl4.mongodb.net/test?retryWrites=true&w=majority`;

function Index({ getblogs }) {
  // console.log("INDEX FILE" , getblogs)



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
    // await mongoose.connect(process.env.MONGODB_URL);
    await mongoose.connect(mongoDB_URL);

  }

  try {
    let getblogs = await blogSchema.find();
    // console.log("SSP--------", getblogs);

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
