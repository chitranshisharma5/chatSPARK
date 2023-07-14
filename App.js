import "./App.css";
//import { useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
//import { Switch } from "@mui/material";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useStateValue } from "./StateProvider";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming conventions
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

// function App() {
//   const [{ user }, dispatch] = useStateValue();
//   return (
//     <div className="app">
//       {!user ? (
//         <Login />
//       ) : (
//         <div className="app_body">
//           <Router>
//             <Sidebar />
//             <Switch>
//               <Route path="/rooms/:roomId">
//                 <Chat />
//               </Route>
//               <Route path="/">
//                 <Chat />
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       )}
//     </div>
//   );
// }
export default App;
