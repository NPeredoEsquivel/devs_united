
import './App.css';
import './styles/main.scss';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import PrivateRoute from "./containers/Routes/PrivateRoute";
import NotFound from "./components/NotFound/NotFound";
export const images = require.context('./icons', true);


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route
          path="/"
          element={<Navigate to="/home" />}
        />
        <Route
          path="/*"
          element={<NotFound />}
        />


        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
