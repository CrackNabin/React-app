import React, { Fragment, Component } from "react";
import Spinner from "../layout/spineer";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//I hate class based componetn Oh lord so much code
export class User extends Component {
  //This is similar to useEffect in function component
  componentDidMount() {
    this.props.getUser(this.props.match.params.login); //Catch Url param named login
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      company,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading, repos } = this.props;
    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back
        </Link>
        Hireable : {""}
        {hireable ? (
          <i className="fas fa-check text-sucess"></i>
        ) : (
          <i className="fas fa-times-circle text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            ></img>
            <h2>{name}</h2>
            <p>location:{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>A simple Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn bg-top my-1">
              Visit Github
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: {login}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: {company}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: {blog}</strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-dark">Following: {following}</div>
          <div className="badge badge-danger">Public Repo: {public_repos}</div>
          <div className="badge badge-success">
            Public Gists: {public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
