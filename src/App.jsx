import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useModalContext } from 'context/useModalContext';
import SharedLayout from 'shared/components/SharedLayout/SharedLayout';
import ModalWindow from 'shared/components/ModalWindow/ModalWindow';

const About = lazy(() => import('pages/About/About'));
const Resume = lazy(() => import('pages/Resume/Resume'));
const Portfolio = lazy(() => import('pages/Portfolio/Portfolio'));
const Blog = lazy(() => import('pages/Blog/Blog'));

const App = () => {
  const { isOpen, modalContent } = useModalContext();
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <ModalWindow isOpen={isOpen}>{modalContent}</ModalWindow>
    </>
  );
};

export default App;
