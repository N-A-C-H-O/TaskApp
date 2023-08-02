import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";
import { User } from "../types";
import { useCurrentUserStore } from "../store/currentUserStore";
import { useLocation } from "wouter";

import { Flex, Button, Icon } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { setOne } = useCurrentUserStore();

  const [, setLocation ] = useLocation();

  const provider = new GoogleAuthProvider();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const response = await signInWithPopup(auth, provider);
    const data = response.user;

    if (data.displayName === null || data.email === null || data.photoURL === null) return false;

    const user: User = {
      id: data.uid,
      name: data.displayName.split(" ")[0],
      lastName: data.displayName.split(" ")[data.displayName.length - 1],
      email: data.email,
      profilePhoto: data.photoURL
    }

    setOne(user);

    setLocation("/");
  }

  return (
    <Flex justify="center" alignItems="center" h="100vh" flexDirection="column" gap="100px">
        <h1>Welcome to TaskApp</h1>
        <Button onClick={handleClick} leftIcon={<Icon as={FcGoogle} fontSize={20}/>}>Sign in with Google</Button>
    </Flex>
  )
}

export default Login
