import { Container, Box, Typography, Button, AppBar, Toolbar, Link } from '@mui/material';
import NextLink from 'next/link';

export default function Home() {
  return (
    <>
      <AppBar position="static" color="success">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Ecotoys
          </Typography>
          <Link component={NextLink} href="/" color="inherit" underline="none" sx={{ mx: 2 }}>
            Home
          </Link>
          <Link component={NextLink} href="/catalog" color="inherit" underline="none" sx={{ mx: 2 }}>
            Catalog
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            bgcolor: '#e8f5e9',
            borderRadius: 4,
            boxShadow: 3,
            p: 6,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom color="primary">
            Ecotoys
          </Typography>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Eco-friendly toys for a better future
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
            Discover sustainable, safe, and fun toys for children. Shop with a conscience!
          </Typography>
          <Button variant="contained" color="success" size="large">
            Shop Now
          </Button>
        </Box>
      </Container>
    </>
  );
}
