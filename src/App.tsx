import { Grid } from "@chakra-ui/react";
import TaskContainer from "./components/TaskContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid templateColumns={{md: "1fr 2fr", lg: "1fr 4fr", xl: "1fr 5fr"}} height="100vh">
      <Navbar />
      <TaskContainer />
    </Grid>
  );
}

export default App;
