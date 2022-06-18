import { GitHub, Home, LinkedIn, ListAlt } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useRouter } from 'next/router';

export default function CustomHeader() {
  const router = useRouter();

  return (
    <>
      <Box marginTop="1%" sx={{ flexGrow: 1 }}>
        <IconButton
          onClick={() => router.push('/')}
          color="primary"
          aria-label="homepage"
          component="span"
          title="Home"
        >
          <Home />
        </IconButton>
        <IconButton
          onClick={() => window.open('https://github.com/Marceloasf', '_blank')}
          color="primary"
          aria-label="github"
          component="span"
          title="Github"
        >
          <GitHub />
        </IconButton>

        <IconButton
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/marcelo-antonio-e-silva-filho-1446aa14b/',
              '_blank'
            )
          }
          color="primary"
          aria-label="linkedin"
          component="span"
          title="LinkedIn"
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </>
  );
}
