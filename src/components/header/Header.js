import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Modal from 'react-modal';
import Modal1 from 'react-modal';
import { useDispatch } from 'react-redux';
import { getMoviesBySearch } from '../../redux/action/movieActions';

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [regisModal, setRegisModal] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getMoviesBySearch(search));
  };

  return (
    <div className="navbar">
      <div className="navbar-item logo">
        <Link to={'/'}>
          <p>Logo</p>
        </Link>
        <Link to={'/'}>
          {' '}
          <p>MilanTV</p>
        </Link>
      </div>
      <div className="navbar-item">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="navbar-item">
        <div onClick={(e) => console.log(e.target)}>
          <p onClick={() => setLoginModal(true)}>Sign in</p>

          <Modal
            isOpen={loginModal}
            onRequestClose={() => setLoginModal(false)}
          >
            <div className="login-wrapper">
              <button className="btnClose" onClick={() => setLoginModal(false)}>
                X
              </button>

              <h4 className="title-modal">Milan TV</h4>

              <div className="email-wrapper">
                <label>Email</label>
                <br />
                <input className="input-email" type="text" />
                <br />
              </div>

              <div className="password-wrapper">
                <label>Password</label>
                <br />
                <input className="input-password" type="password" />
              </div>

              <button className="btnLogin">Login</button>

              <p className="new-acc">
                Don't have an account?{' '}
                <span
                  onClick={() => setLoginModal(false) & setRegisModal(true)}
                >
                  Register
                </span>
              </p>
            </div>
          </Modal>
          <Modal1
            isOpen={regisModal}
            onRequestClose={() => setRegisModal(false)}
          >
            <div className="login-wrapper">
              <button className="btnClose" onClick={() => setRegisModal(false)}>
                X
              </button>

              <h4 className="title-modal">Milan TV</h4>

              <div className="email-wrapper">
                <label>Full Name</label>
                <br />
                <input className="input-email" type="text" />
                <br />
              </div>

              <div className="email-wrapper">
                <label>Email</label>
                <br />
                <input className="input-email" type="text" />
                <br />
              </div>

              <div className="password-wrapper">
                <label>Password</label>
                <br />
                <input className="input-password" type="password" />
              </div>

              <button className="btnLogin">Register</button>

              <p className="new-acc">
                Already have an account?{' '}
                <span
                  onClick={() => setRegisModal(false) & setLoginModal(true)}
                >
                  Login
                </span>
              </p>
            </div>
          </Modal1>
        </div>
      </div>
    </div>
  );
};

export default Header;
