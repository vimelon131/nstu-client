import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpecsInfo from './components/specsInfo/specsInfo';
import News from './components/news/News';
import Main from './components/main/Main';
import Subjects from './components/specsInfo/Subjects';
import Graduates from './components/graduates/Graduates';
import MainInfo from './components/specsInfo/MainInfo';
import Questions from './components/questions/questions';
import Teachers from './components/teachers/teachers';
import StudentWorks from './components/specsInfo/studentWorks';
import Employment from './components/specsInfo/Employment';
import NewsID from './components/news/NewsID';
import Admin from './components/admin/Admin';
import NewsA from './components/admin/NewsA';
import SpecialityA from './components/admin/SpecialityA';
import GraduatesA from './components/admin/GraduatesA';
import TeacherA from './components/admin/TeacherA';
import EditNews from "./components/admin/newsList/EditNews"
import AddNews from "./components/admin/newsList/AddNew"
import SpecEdit from './components/admin/specsList/SpecEdit';
import EditTeacher from './components/admin/teachersList/EditTeacher';
import AddTeacher from './components/admin/teachersList/AddTeacher';
import AddKeyword from './components/admin/newsList/addKeyword';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Main />} />
            <Route path="specs/:specID" element={<SpecsInfo />}>
              <Route path="info" element={<MainInfo />} />
              <Route path="subjects" element={<Subjects />} />
              <Route path="students-works" element={<StudentWorks />} />
              <Route path="employment" element={<Employment />} />
            </Route>
            <Route path="news" element={<News />} />
              
            <Route path="news/:newsID" element={<NewsID />} />
            <Route path="graduates" element={<Graduates />} />
            <Route path="questions" element={<Questions />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="manage/admin" element={<Admin />} >
              <Route path="speciality" element={<SpecialityA />} />
              <Route path="news" element={<NewsA />} >
                
              </Route>
              <Route path="news/add" element={<AddNews />} />
              <Route path="teachers/add" element={<AddTeacher />} />
              <Route path="news/addKeyword" element={<AddKeyword />} />
              <Route path="news/edit/:newsID" element={<EditNews />} />
              <Route path="teachers/edit/:teacherID" element={<EditTeacher />} />
              <Route path="speciality/edit/:specID" element={<SpecEdit />} />
              <Route path="graduates" element={<GraduatesA />} />
              <Route path="teachers" element={<TeacherA />} />
            </Route>
            <Route path="*" element={<Main />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

