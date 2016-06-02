import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Login from './user/login';
const App = ({ location }) => {
	const checkUserIsSine =function(){
		alert(1111)
	}
  return (
    <MainLayout>
      <Todos location={location} />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
