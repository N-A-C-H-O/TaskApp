import { Grid } from "@chakra-ui/react";
import TaskContainer from "./TaskContainer";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
    })
  }, []); 

  return (
    <Grid templateColumns={{ md: "1fr 2fr", lg: "1fr 4fr", xl: "1fr 5fr" }} height="100vh">
      <Navbar />
      <TaskContainer />
    </Grid>
  );
}

export default Home;
