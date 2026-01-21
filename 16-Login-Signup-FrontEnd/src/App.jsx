import Login from "./Login";
import Signup from "./Signup";
import PageNotFound from "./pageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuperRoute from "./superRoute";
import SuperDashboard from "./superRole/dashboard/SuperDashboard";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import AdmindashBoard from "./adminRole/dashboard/AdmindashBoard";
import UserDashboard from "./userRole/dashboard/UserDashboard";
import SuperSetting from "./superRole/setting/SuperSetting";
import SuperAbout from "./superRole/about/SuperAbout";
import AdminSetting from "./adminRole/setting/AdminSetting";
import AdminAbout from "./adminRole/about/AdminAbout";
import UserSetting from "./userRole/setting/UserSetting";
import UserAbout from "./userRole/about/UserAbout";
import DetailsDash from "./dashBoardDetails/DetailsDash";


function App() {
  //  const routes = [
  //    { path: "/login", element: <Login /> },
  //    { path: "/", element: <Signup /> },
  //    { path: "*", element: <PageNotFound /> },
  //    { path: "/superDashboard",element: <SuperRoute><SuperDashboard /></SuperRoute>,},

  //    { path: "/superDashboard", element:<SuperRoute><SuperDashboard/></SuperRoute> },
  //    { path: "/adminDashboard", element:<AdminRoute><AdmindashBoard/></AdminRoute>},
  //    { path: "/userDashboard", element:<UserRoute><UserDashboard/></UserRoute>},
  //   ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} /> 
          <Route path="*" element={<PageNotFound />} />
          <Route path="/superDashboard" element={<SuperRoute><SuperDashboard /></SuperRoute>}/>
          <Route path="/superSetting" element={<SuperRoute><SuperSetting/></SuperRoute>}/>
          <Route path="superDashboard" element={<SuperDashboard />}>
              {/* <Route path="superSetting" element={<SuperSetting />} />
              <Route path="superAbout" element={<SuperAbout />} /> */}
              {/* <Route path="adminDashboard" element={<AdminRoute><AdmindashBoard/></AdminRoute>}/> */}
              {/* <Route path="adminSetting" element={<AdminRoute><AdminSetting/></AdminRoute>}/>
              <Route path="adminAbout" element={<AdminRoute><AdminAbout/></AdminRoute>}/> */}

              {/* <Route path="userSetting" element={<UserRoute><UserSetting/></UserRoute>}/>
              <Route path="userAbout" element={<UserRoute><UserAbout/></UserRoute>}></Route> */}
          </Route>
          <Route path="/details" element={<DetailsDash />} />
          <Route path="/adminDashboard" element={<AdminRoute><AdmindashBoard /></AdminRoute>}>
            {/* <Route path="adminSetting" element={<AdminRoute><AdminSetting/></AdminRoute>}/>
            <Route path="adminAbout" element={<AdminRoute><AdminAbout/></AdminRoute>}/> */}

            {/* <Route path="userDashboard" element={<UserRoute><UserDashboard/></UserRoute>}/> */}
            {/* <Route path="userSetting" element={<UserRoute><UserSetting/></UserRoute>}/>
            <Route path="userAbout" element={<UserRoute><UserAbout/></UserRoute>}></Route> */}
          </Route>

          <Route path="/userDashboard" element={<UserRoute><UserDashboard /></UserRoute>}> 
             {/* <Route path="userSetting" element={<UserRoute><UserSetting/></UserRoute>}/>
             <Route path="userAbout" element={<UserRoute><UserAbout/></UserRoute>}></Route> */}
          </Route>
          {/* {routes.map((route, index) => {
            console.log("routePath", route.path);
            console.log("routePath", route.element);
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
           {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}  */}
        </Routes>
        {/* <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="superDashboard" element={<SuperDashboard />}>
            <Route path="setting" element={<SuperSetting />} />
          </Route>
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
