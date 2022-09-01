// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import LoginReg from "./pages/auth/LoginReg";
// import ResetPassword from "./pages/auth/ResetPassword";
// import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
// import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import { useSelector } from "react-redux";

// function App() {
//   const { token } = useSelector(state => state.auth)
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="login" element={!token ? <LoginReg /> : <Navigate to="/dashboard" />} />
//             <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
//             <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
//           </Route>
//           <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
//           <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;





// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import LoginReg from "./pages/auth/LoginReg";
// import ResetPassword from "./pages/auth/ResetPassword";
// import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
// import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import { useSelector } from "react-redux";
// import FrontPage from './pages/Docusaurus-Comp/FrontPage.js'
// import Onboarding from './pages/docs/Onboarding.js'
// import { getToken } from './services/LocalStorageService.js';



// function App() {
//   const { token } = useSelector(state => state.auth)
//   console.log(`token in app is:  ${token}`)

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={token ? <Layout /> :<Navigate to ='/login'/>} >
//                 <Route index element={<Home />} />
//                 <Route path="contact" element={<Contact />} />
//                 <Route path="login" element={!token ? <LoginReg /> : <Navigate to="/dashboard" />} />
//                 <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
//                 <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
                
//           </Route>
//           <Route path="/login" element={<LoginReg />} />
//           <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
//           <Route path="/handbook/onboarding" element={token ? <Onboarding /> : <FrontPage />} />
//           <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
//           <Route path="/frontpage" element={<FrontPage />} />
          
//         </Routes>
//       </BrowserRouter>

//     </>
//   );
// }

// export default App;







// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import LoginReg from "./pages/auth/LoginReg";
// import ResetPassword from "./pages/auth/ResetPassword";
// import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
// import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Layout from "./pages/Layout";
// import { useSelector } from "react-redux";
// import FrontPage from './pages/Docusaurus-Comp/FrontPage.js'
// import LoginRegOnboarding from './pages/auth/LoginRegOnboarding.js'
// import Onboarding from './pages/docs/Onboarding.js'

// function App() {
//   const { token } = useSelector(state => state.auth)
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//                 <Route index element={<Home />} />
//                 <Route path="contact" element={<Contact />} />
//                 <Route path="login" element={!token ? <LoginReg /> : <Navigate to="/dashboard" />} />
//                 <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
//                 <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
//           </Route>
//           <Route path="/loginregonboarding" element={<LoginRegOnboarding />} />
//           <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
//           <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
//           <Route path="/frontpage" element={<FrontPage />} />
//           <Route path="/handbook/onboarding" element={token ? <Onboarding /> : <Navigate to="/loginregonboarding" />} />
//           {/* <Route path="/handbook/onboarding" element={<Onboarding /> } /> */}

          

//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import FrontPage from './pages/Docusaurus-Comp/FrontPage.js'
import Onboarding from './pages/docs/Onboarding.js'
import A from './pages/docs/A.js'
import B from './pages/docs/B.js'
import Protected from './pages/Docusaurus-Comp/Protected.js'
import FrontPageSecure from "./pages/Docusaurus-Comp/FrontPageSecure.js";
import ChangePassword from './pages/auth/ChangePassword';

function App() {
  const { token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
                <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          </Route> */}
          {/* <Route path="/" element={<Layout />}/> */}
          <Route path='/home' element={<Home />} />
          <Route path="/sendpasswordresetemail" element={<SendPasswordResetEmail />} />
          <Route path="/api/user/reset/:id/:token" element={<ResetPassword />} />
          {/* <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} /> */}
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
          <Route path="/" element={<FrontPage />} />
          {/* <Route path="/handbook/onboarding" element={ <Onboarding />} /> */}
          <Route path="/a" element={<Protected Component={A}/>} />
          {/* <Route path="/handbook/onboarding" element={token ? <Onboarding /> : <Navigate to="/login" />} /> */}
          <Route path="/b" element={<Protected Component={B}/>} />
          <Route path="/frontpage-secure" element={token ? <FrontPageSecure /> : <Navigate to="/login" />} />
          <Route path="/login" element={!token ? <LoginReg /> : <Navigate to="/frontpage-secure" />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/change-password' element={<Protected Component={ChangePassword}/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;