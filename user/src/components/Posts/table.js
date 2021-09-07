import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { deletePost } from "../../actions/posts";

const Tableview = ({ post }) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  /* const handleDelete = (id, e) => {
    e.preventDefault();

    dispatch(deletePost(id));
  };
*/
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <card className="bg-light">
      <table className="table table-bordered text-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Message</th>
            <th>Creator</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post._id}</td>
              <td>{post.title}</td>
              <td>{post.message}</td>
              <td>{post.creator}</td>
              <td>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.preventDefault();

                      dispatch(deletePost(post._id));
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </card>
  );
};

export default Tableview;
