import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";
import {
  CONTACT_PATH,
  INDEX_PATH,
  NEWS_PATH,
  NOT_FOUND_PATH,
} from "./constants/paths";
import Navbar from "./pages/Navbar";
import ContactPage from "./pages/ContactPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path={INDEX_PATH} element={<HomePage />} />
          <Route path={NEWS_PATH} element={<NewsPage />} />
          <Route path={CONTACT_PATH} element={<ContactPage />} />
          <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
