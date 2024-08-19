import { Navigate, Route, Routes } from 'react-router-dom';
import { useModalContext } from 'context/useModalContext';
import { ModalWindow, SharedLayout } from 'shared/components';
import { About, Blog, Portfolio, Resume } from './pages';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

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
