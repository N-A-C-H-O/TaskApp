import { Redirect } from "wouter";
import { useCurrentUserStore } from "../../store/currentUserStore";

const ProtectedRoute = ({ children }: { children:  JSX.Element }) => {

  const { currentUser } = useCurrentUserStore();  

  if (!currentUser) {
    return <Redirect to="/login" />
  }

  return children;
}

export default ProtectedRoute;
