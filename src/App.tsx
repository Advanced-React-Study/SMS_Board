import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LoginPage, MainPage, RegisterPage } from './pages';
import { IsLoginAtom } from './stores/atom';

function App() {
  const isLogin = useRecoilValue(IsLoginAtom);

  return (
    <Router>
      <Routes>
        {isLogin ?
          <Route path={'/'} element={<MainPage />} />
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
