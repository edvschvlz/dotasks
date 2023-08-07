import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import PageTest from '../Pages/PageTest';
import Project from '../Pages/Project';
import NewProjectModal from '../Pages/Home/NewProjectModal';
import TasksModal from '../Pages/Home/TasksModal';

const OtherRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/page-test" element={<PageTest />} />
        <Route path="/newproject" element={<NewProjectModal />} />
        <Route path="/newtask" element={<TasksModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default OtherRoutes;
