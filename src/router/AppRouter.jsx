import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y registro */}
      <Route path="/auth/*" element={<AuthRoute />} />

      {/* Journal App */}
      <Route path="/*" element={<JournalRoutes />} />

      <Route />
    </Routes>
  );
};
