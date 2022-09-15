import React from "react";
import { createContext } from "react/cjs/react.production.min";
import "../styles/App.css";
import { UserProfile } from "./UserProfile";

const UserContext = React.createContext();
const App = () => {
  return (
    <div id="main">
      <UserContext.Provider value={{ name: "Newton", age: 3 }}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
};

export default App;
export { UserContext };
