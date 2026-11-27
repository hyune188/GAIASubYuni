// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation'
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

// import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';

// const Navigation = lazy( () => import('./components/Navigation'))
// const Home = lazy( () => import('./pages/Home'))
// const About = lazy( () => import('./pages/About'))
// const Contact = lazy( () => import('./pages/Contact'))
// const UserProfile = lazy( () => import('./pages/UserProfile'))
// const QueryString = lazy( () => import('./pages/QueryString'))


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/UserProfile/:id" element={<UserProfile />} />
//           <Route path="/Query" element={<QueryString />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
import Settings from "./components/Settings";
