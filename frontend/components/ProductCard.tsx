import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

export type Product = {
  id: string;
  title: string;
  image: string;
  description: string;
  amazonUrl: string;
  price?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', bgcolor: '#f5f5f5' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        {product.price && (
          <Typography variant="subtitle1" color="success.main" sx={{ mb: 1 }}>
            {product.price}
          </Typography>
        )}
        <Box textAlign="center">
          <Button
            variant="contained"
            color="warning"
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 1 }}
          >
            Buy on Amazon
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
