import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { db } from "../firebase";
import { TailSpin } from "react-loader-spinner";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = useState<QuerySnapshot<DocumentData>>();
  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => setPosts(snapshot));
  }, []);

  const deletePost = async (id: string) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      navigate("/");
    } catch (e) {
      throw e;
    }
  };

  return (
    <Layout currentPage="all posts">
      <div className="pt-10">
        <h2 className="font-bold text-2xl text-gray-800">Moe's Posts</h2>
        {!posts ? (
          <div className="mt-20 flex justify-center">
            <TailSpin color="rgb(96 165 250)" width={80} height={80} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {posts?.docs.map((doc) => (
              <div
                key={doc.id}
                className="shadow rounded py-4 px-5 cursor-pointer hover:shadow-md"
              >
                <p className="uppercase font-semibold text-blue-400 text-lg">
                  {doc.data().title}
                </p>
                <p
                  className="text-sm text-gray-600 mt-2 desc h-16 overflow-hidden"
                  dangerouslySetInnerHTML={{
                    __html: doc.data().description,
                  }}
                ></p>
                <div className="mt-4 flex justify-between items-center">
                  <Button
                    onClick={() => navigate(`/posts/${doc.id}`)}
                    className="text-xs rounded py-1 px-2"
                    text="View more"
                  />
                  <Button
                    onClick={() => deletePost(doc.id)}
                    text="delete"
                    type="outline"
                    className="bg-white text-red-400 border-0 hover:bg-white text-sm p-0"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AllPosts;
