import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StaffLogin from './pages/StaffLogin';
import EmployeePortal from './pages/EmployeePortal';
import SignIn from './pages/SignIn';
import CreateAccount from './pages/CreateAccount';
import GlobalMembership from './pages/GlobalMembership';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/employee-portal" element={<EmployeePortal />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/global-membership" element={<GlobalMembership />} />
      </Routes>
    </Router>
  );
}

export default App;
