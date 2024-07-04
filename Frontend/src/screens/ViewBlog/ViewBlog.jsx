import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotificationCard from '../../components/NotificationCard/NotificationCard';
import Navbar from '../../components/navbar/navbar';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import { createEditor } from 'slate';
import { renderElement, renderLeaf } from '../../components/BlogEditor/EditorElements';




const ViewBlog = () => {

  const {ID} = useParams();

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [tags, setTags] = useState(null);
  const [comments, setComments] = useState(null);
  const [content, setContent] = useState(null);
  const [publicationDate, setPublicationDate] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [status, setStatus] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [readingTime, setReadingTime] = useState(null);


  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const initialValue = useMemo(
    () =>
      JSON.parse(content)
  )

  console.log(content)

  useEffect(() => {
    setLoading(true)
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blogs/${ID}`);
        const blog = response.data;
        setTitle(blog.title)
        setAuthor(blog.author)
        setTags(blog.tags)
        setComments(blog.comments)
        setContent(blog.content)
        setPublicationDate(blog.publicationDate)
        setFeaturedImage(blog.featuredImage)
        setStatus(blog.status)
        setVisibility(blog.visibility)
        setReadingTime(blog.readingTime)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching Blog details:', error);
        setLoading(false)
      }
    };

    fetchBlogs();
  }, [ID]);

  if (loading)
  {
    return <div>Loading...</div>  
  }

  return (
    <div className="min-h-screen h-full w-full">
      <Navbar />
      <div className='mx-6 my-8 grid grid-cols-2 md:grid-cols-3'>

        <div className='col-span-2 md:col-span-1 pr-5 mt-24'>
          <NotificationCard
            title="Details"
          />
        </div>

        <div className='col-span-2 px-2'>
          <div>
            <h1 className='text-mehroon text-heading font-bold'>{title}</h1>
          </div>

          <img src={featuredImage} alt="" />
          
          <div>
            <Slate editor={editor} initialValue={initialValue} onChange={() => {}}>
              <Editable
                readOnly 
                renderElement={renderElement}
                renderLeaf={renderLeaf}
              />
            </Slate>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ViewBlog;
