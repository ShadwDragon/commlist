import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import Pagination from './Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [comments, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(4);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPosts(res.data);
      setLoading(false);
    };

    fetchComments();
  }, []);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='Container'>
      <h1 className='text-primary mb-3'>Comment list</h1>
      <Comments comments={currentComments} loading={loading} />
      <Pagination
        commentsPerPage={commentsPerPage}
        totalComments={comments.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;