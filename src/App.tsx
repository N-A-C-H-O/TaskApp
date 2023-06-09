import { Grid } from "@chakra-ui/react";
import TaskContainer from "./components/TaskContainer/TaskContainer";

function App() {

  return (
    <Grid /* templateColumns="repeat(1,1fr)" */ height="100vh">
      <TaskContainer />
    </Grid>
  )
}

export default App;
