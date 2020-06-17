import React from 'react';
import './Item.css';

const Comments = ({ comments, loading  }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="col-md-3">
        {
          comments.map(comment => 
          <table>
            <tr>
              <td className="heading">Name</td>
              <td>{comment.name}</td>
            </tr>
            <tr>
              <td className="heading">Username</td>
              <td>{comment.username}</td>
            </tr>
            <tr>
              <td className="heading">Email</td>
              <td>{comment.email}</td>
            </tr>
          </table>)
        }
      </div>
  );
};

export default Comments;