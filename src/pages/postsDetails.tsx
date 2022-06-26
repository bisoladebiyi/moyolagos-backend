import { deleteDoc, doc, DocumentData, DocumentSnapshot, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button";
import Layout from "../components/layout";
import { db } from "../firebase";

const PostsDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState<DocumentSnapshot<DocumentData>>();
    const navigate = useNavigate()

    useEffect(() => {
      if (id) {
        getData(id).then((res) => setData(res));
      }
    }, [id]);

    const getData = async (id: string) => {
        const res = await getDoc(doc(db, "posts", id));
        return res;
    };

    const deletePost = async(id: any ) => {
        try {
            await deleteDoc(doc(db, "posts", id)) 
            navigate("/")
        } catch(e) {
            throw e
        }    
    }
    
  return (
    <Layout currentPage="">
      <div className="mt-10">
      <p className="text-blue-400 uppercase text-center font-bold text-xl mb-5">{data?.data()?.title}</p>
      <div
      className="desc page"
        dangerouslySetInnerHTML={{
          __html: data?.data()?.description,
        }}
      ></div>
      <div className="mt-10 space-x-4 flex">
      <Button onClick={() => alert("feature not implemented")} text="Edit" />
      <Button onClick={() => deletePost(id)} text="delete" type="outline" className="bg-white text-red-400 border-0 hover:bg-white p-0" />
      </div>
      </div>
    </Layout>
  );
};

export default PostsDetails;
