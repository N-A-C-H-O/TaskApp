import Home from "./components/Home";
import Login from "./components/Login";
import { Route, Redirect } from "wouter";

function App() {

  /* const ProtectedRoute = ({children}) => {
    if (true) {
      return <Redirect to="/login" />
    }

    return children
  } */

  return(
    <div>
      <Route path="/"><Home/></Route>
      <Route path="/login"><Login/></Route>
    </div>
  )
}

export default App;
