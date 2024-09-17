import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/Todo/TodoList';
import Avatar from '../components/User/Avatar';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user, picture, token, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !token) {
      navigate('/login');
    }
  }, [user, token, navigate]);

  return (
    <div className="mt-5 py-3">
      <Avatar url={picture} user={user} /> 
      <div className="menu mt-3" aria-labelledby="dropdownMenuButton">
        <button className="btn btn-sm btn-danger" type="button" onClick={logout}>
          Logout
        </button>
      </div>
      <TodoList />
    </div>
  );
};

export default Dashboard;
