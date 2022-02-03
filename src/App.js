
import './App.css';
import './styles/main.scss';
import { Route, Routes } from "react-router-dom";
import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import PrivateRoute from "./containers/Routes/PrivateRoute";
export const images = require.context('./icons', true);

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />

        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
