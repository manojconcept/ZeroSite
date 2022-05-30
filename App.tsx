import React from 'react'
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom'
//----------------------------------------------------------------------------->Component
import HomeLayout from './src/components/Layout/HomeLayout/HomeLayout'
import MainLayout from './src/components/MainLayout/MainLayout'
//----------------------------------------------------------------------------->Pages
import Home from './src/pages/Home/Home'
import CreateAccount from './src/pages/CreateAccount/CreateAccount'
import Dashboard from './src/pages/Dashboard/Dashboard'
import UserRoles from './src/pages/UserRoles/UserRoles'
import Users from './src/pages/Users/Users'
//------------------------------------------------------------------------------->css
import "./src/libraries/Bootstrap5.1.3/dist/css/bootstrap.min.css";
import "./src/libraries/fontawesomeFW6.1.1/css/all.min.css";
import "./src/assets/css/style.css";
//-------------------------------------------------------------------------------->js
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
//---------------------------------------------------------------------------------->XHRHttpRequest
// create an XHR object
const xhr = new XMLHttpRequest();

// listen for `onload` event
//---------(xhr.onreadystatechange is used to support old browsers !)----------->Important
xhr.onload = () => {
    // process response
    if (xhr.readyState==4 && xhr.status == 200) {
        // parse JSON data
      console.log(JSON.parse(xhr.response));
    } else {
        console.error('404 ! Not Found');
    }
};
// create a `GET` request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// send request
xhr.send();
//---------------------------------------------------------------------------------->XHRHttpRequest

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/create_account" element={<CreateAccount />} />
          </Route>
          <Route path="/:account_id" element={<MainLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user_roles" element={<UserRoles />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
