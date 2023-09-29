import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { HOME_PATH, NEWS_PATH, NOT_FOUND_PATH } from "./constants/paths";

export function App() {
  return (
    <>
      <Routes>
        <Route path={HOME_PATH} element={<HomePage />} />
        <Route path={NEWS_PATH} element={<NewsPage />} />
        <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
