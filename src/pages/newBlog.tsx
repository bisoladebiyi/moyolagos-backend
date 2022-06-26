import { convertToRaw, EditorState } from "draft-js";
import React, { useState } from "react";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import Layout from "../components/layout";
import Button from "../components/button";

interface DataProp {
  title: string;
  description: string;
}

const NewBlog = () => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [data, setData] = useState<DataProp>({ title: "", description: "" });
  const [ loading, setLoading ] = useState<boolean>(false)

  const sendToDb = async (data: DataProp) => {
    setLoading(true)
    if (data.title === "" || data.description === ""){
      alert("Cannot post empty fields")
      setLoading(false)
    } else {
      try {
        await addDoc(collection(db, "posts"), data);
        alert("post succesfull");
      } catch (err) {
        throw err;
      } finally {
        setData({ title: "", description: "" });
        setEditorState(EditorState.createEmpty())
        setLoading(false)
      }
    } 
  };

  return (
    <Layout currentPage="new post">
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-gray-800">Add New</h2>
        <div className="mt-5">
          <div className="flex space-x-3">
            <label htmlFor="" className="text-base text-gray-700">Title:</label>
            <input
            className="rounded-sm"
              type="text"
              value={data.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="mt-5 flex flex-col space-y-3">
            <label htmlFor="" className="text-base text-gray-700">Description:</label>
            <Editor
              wrapperClassName="shadow rounded border border-gray-100"
              editorState={editorState}
              onEditorStateChange={(newState) => {
                setEditorState(newState);
                setData({
                  ...data,
                  description: draftToHtml(
                    convertToRaw(editorState.getCurrentContent())
                  ),
                });
              }}
            />
          </div>
        </div>
        <div className="flex space-x-4 mt-5">
          <Button loading={loading} onClick={() => sendToDb(data)} type="fill" text="Save" />
          <Button onClick={() => {
             setData({ title: "", description: "" })
             setEditorState(EditorState.createEmpty())
          }} type="outline" text="Clear" />
        </div>
      </div>
    </Layout>
  );
};

export default NewBlog;
