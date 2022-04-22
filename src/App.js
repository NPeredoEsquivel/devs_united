
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./containers/Login/Login";
import Main from "./containers/Main/Main";
import PrivateRoute from "./containers/Routes/PrivateRoute";
import ProfileConfiguratedRoute from "./containers/Routes/ProfileConfiguratedRoute";
import NotFound from "./components/NotFound/NotFound";
export const images = require.context('./assets/icons', true);


function App() {

  return (
    <>
      <Routes>
        <Route exact path="/main" element={
          <PrivateRoute>
            <ProfileConfiguratedRoute>
            <Main />

            </ProfileConfiguratedRoute>
          </PrivateRoute>
        }
        />
        <Route path="/:profileNickName" element={
          <PrivateRoute>
            <ProfileConfiguratedRoute>
              <Main />
            </ProfileConfiguratedRoute>
          </PrivateRoute>
        }/>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default App;
