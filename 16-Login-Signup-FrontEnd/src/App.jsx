import Login from "./Login";
import Signup from "./Signup";
import PageNotFound from "./pageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./route";
import SuperRoute from "./superRoute";
import SuperDashboard from "./SuperDashboard";
import SuperDashboardTwo from "./SuperDashboardTwo";
import SuperDashboardThree from "./SuperDashboardThree";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import AdmindashBoard from "./AdmindashBoard";
import UserDashboard from "./UserDashboard";

function App() {
  
   const routes = [
     { path: "/login", element: <Login /> },
     { path: "/", element: <Signup /> },
     { path: "*", element: <PageNotFound /> },
     { path: "/superDashboard", element:<SuperRoute><SuperDashboard/></SuperRoute> },
     { path: "/superDashboardTwo", element:<SuperRoute><SuperDashboardTwo/></SuperRoute>},
     { path: "/superDashboardThree",element:<SuperRoute><SuperDashboardThree/></SuperRoute>},
     { path: "/adminDashboard", element:<AdminRoute><AdmindashBoard/></AdminRoute>},
     { path: "/userDashboard", element:<UserRoute><UserDashboard/></UserRoute>}
   ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/component" element={<ProtectedRoute />}/> not use*/}
          {/* <Route path="*" element={<PageNotFound />} />
          <Route path="/superDashboard" element={<SuperRoute><SuperDashboard /></SuperRoute>}/>
          <Route path="/superDashboardTwo" element={<SuperRoute><SuperDashboardTwo /></SuperRoute>}/>
          <Route path="/superDashboardThree" element={<SuperRoute><SuperDashboardThree /></SuperRoute>}/>
          <Route path="/adminDashboard" element={<AdminRoute><AdmindashBoard /></AdminRoute>}/>
          <Route path="/userDashboard" element={<UserRoute><UserDashboard /></UserRoute>}/> */}
          {/* {routes.map((route, index) => {
            console.log("routePath", route.path);
            console.log("routePath", route.element);
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })} */}
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
