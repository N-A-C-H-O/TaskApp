import Home from "./components/Home";
import Login from "./components/Login";
// import ProtectedRoute from "./components/helper/ProtectedRoute";
import { Route } from "wouter";

function App() {

  return(
    <div>
      {/* <ProtectedRoute>
        
      </ProtectedRoute> */}
      <Route path="/"><Home/></Route>
      <Route path="/login"><Login/></Route>
    </div>
  )
}

export default App;
