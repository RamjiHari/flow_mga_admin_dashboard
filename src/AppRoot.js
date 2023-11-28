import { useSelector } from 'react-redux';
import LoginScreen from 'domain/login/LoginScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from 'common/layout/MainLayout';
import SamplePage from 'domain/Reports';
import Dashboard from 'domain/Dashboard';
import Customization from 'common/layout/Customization';

// ==============================|| APP ||============================== //

const AppRoot = () => {
  const customization = useSelector((state) => state.customization);
  const session = useSelector( ( state ) => state.session );
  return (
        <Routes>


         {
          session.loggedIn ?
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/sample-page" element={<SamplePage />}/>
            <Route path="/sample-page2" element={<SamplePage />}/>
          </Route>
        :
        <Route path="/" element={<LoginScreen />}/>
        
     
         }
        </Routes>
  );
};

export default AppRoot;
