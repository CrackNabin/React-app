import React from "react";
import PropTypes from "prop-types";
import Repoitem from "./Repoitem";

export const Repos = ({ repos }) => {
  return (
    <div>
      {repos.map((repo) => (
        <Repoitem repo={repo} key={repo} />
      ))}
    </div>
  );
};
Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
