import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { FormPage, LoginPage, MainPage, RegisterPage } from './pages';
import BoardPage from './pages/BoardPage';
import { IsLoginAtom } from './stores/atom';

function App() {
  const isLogin = useRecoilValue(IsLoginAtom);

  return (
    <Router>
      <Routes>
        {isLogin ?
          <>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/board/:id'} element={<BoardPage />} />
            <Route path={'/board/form'} element={<FormPage />} />
            <Route path={'/board/form/:id'} element={<FormPage />} />
          </>
          :
          <>
            <Route path={'/'} element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
          </>
        }
        <Route path={'*'} element={<Navigate to={'/'} />} />
      </Routes>
    </Router>
  )
}

export default App;
