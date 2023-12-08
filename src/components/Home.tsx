import { Grid } from '@chakra-ui/react';
import TaskContainer from './TaskContainer';
import Navbar from './Navbar';

function Home() {
  return (
    <Grid templateColumns={{ lg: '1fr 3fr', xl: '1fr 4fr', '2xl': '1fr 5fr' }} height="100vh">
      <Navbar />
      <TaskContainer />
    </Grid>
  );
}

export default Home;
