import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const UploadBlog = () => {
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorStateChange = (state) => {
    setEditorState(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    console.log('Title:', title);
    console.log('Content:', JSON.stringify(convertToRaw(contentState)));
    // Handle form submission or API call here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200 focus:border-orange-200 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="editor" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorStateChange}
                toolbarClassName="flex sticky top-0 z-10 bg-white"
                wrapperClassName="mt-4 bg-white border border-gray-300 rounded-md shadow-sm focus-within:ring focus-within:ring-orange-200 focus-within:border-orange-200"
                editorClassName="px-4 py-2 bg-white"
                
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadBlog;
