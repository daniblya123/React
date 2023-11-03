import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";
import WeatherPage from "./pages/WeatherPage"
import { INDEX_PATH, NEWS_PATH, NOT_FOUND_PATH, WEATHER_PATH } from "./constants/paths";

export function App() {
  return (
    <>
      <Routes>
        <Route path={INDEX_PATH} element={<HomePage />} />
        <Route path={NEWS_PATH} element={<NewsPage />} />
        <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
        <Route path={WEATHER_PATH} element={<WeatherPage />}/>
      </Routes>
    </>
  );
}

export default App;
