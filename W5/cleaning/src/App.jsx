// // import RealTimeClock from './components/RealTimeClock'
// // import WindowTracker from './components/WindowTracker'
// import { useState } from "react";
// import UserProfile from "./components/UserProfile";

// function App() {
//   const [selectedUserId, setSelectedUserId] = useState(null);
//   return (
//     // <div className="App">
//     //    <RealTimeClock></RealTimeClock>
//     //    <WindowTracker></WindowTracker>
//     // </div>
//     <div>
//      <h2>Example 3: Data Fetching with Loading States</h2>
//       <h3>Select a User</h3>
//       <div style={{ display: "flex", gap: "10px" }}>
//         {Object.values(mockUsers).map((user) => (
//           <button key={user.id} onClick={() => setSelectedUserId(user.id)}>
//             {user.name}
//           </button>
//         ))}
//       </div>
//       <hr />
//       <UserProfile userId={selectedUserId} />
//       <UserProfile></UserProfile>
// 		</div>
//   );
// }
// export default App;

// import { useState } from "react";
// import UserProfile from "./components/UserProfile";

// function App() {
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const mockUsers = {
//     1: {
//       id: 1,
//       name: "John Doe",
//     },
//     2: {
//       id: 2,
//       name: "Jane Smith",
//     },
//   };

//   return (
//     <div>
//       <h2>Example 3: Data Fetching with Loading States</h2>

//       <h3>Select a User</h3>

//       <div style={{ display: "flex", gap: "10px" }}>
//         {Object.values(mockUsers).map((user) => (
//           <button
//             key={user.id}
//             onClick={() => setSelectedUserId(user.id)}
//           >
//             {user.name}
//           </button>
//         ))}
//       </div>

//       <hr />

//       <UserProfile userId={selectedUserId} />
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import ChatSimulator from './components/Exercise1'

// function App() {
// 	const [showChat, setShowChat] = useState(true);

// 	 const handleToggle = () => {
//     setShowChat((prev) => !prev);
//   };

// 	return(
// 		<div>
// 			     <h2>Exercise 1: Live Chat Simulator</h2>
//       <div style={{ padding: "20px" }}>
//         <button onClick={handleToggle}>
//           	{showChat ? "Stop Chat (Unmount)" : "Start Chat (Mount)"}
//         </button>

//         <hr />

//         {showChat && <ChatSimulator />}
//       </div>
// 		</div>
// 	)
// }

// export default App;


// import { useState } from "react";
// import SystemDashboard from './components/systemDashboard'

// function App() {
//  	const [showDashboard, setShowDashboard] = useState(true);

//  const handleDashboardToggle = () => {
//     setShowDashboard((prev) => !prev);
//   };

//  	return(
// 		<div>
//      <h2>Exercise 2: System Monitor Dashboard</h2>
//       <div style={{ padding: "20px" }}>
//         <button onClick={handleDashboardToggle}>
//           {showDashboard ? "Stop Dashboard (Unmount)" : "Start Dashboard (Mount)"}
//         </button>

//         <hr />

//         {showDashboard && <SystemDashboard />}
//       </div>
// 		</div>
// 	);
// }

// export default App;

