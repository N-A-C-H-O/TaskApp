import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config";

import { Box, Flex, Button, Icon } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const response = await signInWithPopup(auth, provider);

    console.log(response.user);
  }

  return (
    <Flex justify="center" alignItems="center" h="100vh" flexDirection="column" gap="100px">
        <h1>Welcome to TaskApp</h1>
        <Button onClick={handleClick} leftIcon={<Icon as={FcGoogle} fontSize={20}/>}>Sign in with Google</Button>
    </Flex>
  )
}

export default Login
