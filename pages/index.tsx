import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Layout from './components/layout/layout';
import CustomHeader from './components/header/header';
import { loremIpsum } from './mocks';

const Home = () => {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box mt="2%">
        <Typography
          variant="h2"
          gutterBottom
          component="div"
        >{`Welcome to Marcelo's Page!`}</Typography>
      </Box>

      <Box ml="1%" mt="2%">
        <Typography variant="h4" gutterBottom component="div">
          About &rarr;
        </Typography>
        <Typography gutterBottom component="div">
          {loremIpsum}
        </Typography>
      </Box>

      <Box ml="1%" mt="2%">
        <Typography variant="h4" gutterBottom component="div">
          Posts &rarr;
        </Typography>
        <Box>
          <Box>
            <Button onClick={() => router.push('/posts/1')} variant="text">
              Post 1
            </Button>
          </Box>
          <Box>
            <Button onClick={() => router.push('/posts/2')} variant="text">
              Post 2
            </Button>
          </Box>
          <Box>
            <Button onClick={() => router.push('/posts/3')} variant="text">
              Post 3
            </Button>
          </Box>
          <Box>
            <Button onClick={() => router.push('/posts/4')} variant="text">
              Post 4
            </Button>
          </Box>
          <Box>
            <Button onClick={() => router.push('/posts/5')} variant="text">
              Post 5
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <CustomHeader />
      {page}
    </Layout>
  );
};

export default Home;
