import React from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const Tableview = () => {
  const posts = useSelector((state) => state.posts);

  const handleDelete = () => {};

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <card class="bg-light">
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
                    className="btn btn-outline-danger"
                    onClick={handleDelete}
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
