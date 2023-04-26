import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import StudentCheckboxList from './pages/student/addstudents';
import Layout from './components/Layout';
import Dashboard from './pages/student/dashboard';
import Sandbox from './pages/student/sandbox';
import CreateAssignmentPage from './pages/student/createAssignments'
import DisplayAssignmentsPage from './pages/student/displayAssignmentsPage'
import Instructor from './pages/instructor/dashboard'
import InstructorSandbox from './pages/instructor/sandbox'
import Score from './pages/instructor/score.tsx';
// import SubmissionPage from './pages/instructor/submission';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="sandbox/:id" element={<Sandbox />} />
          <Route path="sandbox/instructor/:id" element={<InstructorSandbox />} />
<Route path='score' element={<Score/>}/>
          <Route path="addStudents" element={<StudentCheckboxList />} />
          <Route path="createAssignments" element={<CreateAssignmentPage />} />
          <Route path="displayAssignmentsPage" element={<DisplayAssignmentsPage />} />
          <Route path="instructor" element={<Instructor/>}/>

          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        {/* <Route path="course" element={< CoursePage />} >
          <Route path="submission" element={<SubmissionPage />} />
          <Route path="submission/score" element={<Score />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
