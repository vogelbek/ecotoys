"use client";
import { useEffect, useState } from 'react';
import ProductCard, { Product } from '../../components/ProductCard';
import { Box, Typography, CircularProgress } from '@mui/material';

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
  fetch(`${apiUrl}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product Catalog
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      )}
    </Box>
  );
}
