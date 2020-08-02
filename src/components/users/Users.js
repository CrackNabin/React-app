import React from "react";
import Useritem from "./Useritem";
import Spinner from "../layout/spineer";
import PropTypes from "prop-types";
const Users = ({ users, loading }) => {
  // state = {
  //   users: [
  //     // {
  //     //   id: "1",
  //     //   login: "Mojombo",
  //     //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     //   html_url: "https://github.com/mojombo",
  //     // },
  //     // {
  //     //   id: "2",
  //     //   login: "Mojombo1",
  //     //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     //   html_url: "https://github.com/mojombo",
  //     // },
  //     // {
  //     //   id: "3",
  //     //   login: "Mojombo2",
  //     //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //     //   html_url: "https://github.com/mojombo",
  //     // },
  //   ],
  // };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <Useritem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gridGap: "1rem",
  marginLeft: "2rem",
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
