'use client';

import BarChartComponent from '@/components/BarChartComponent';
import Container from '@/components/Container';
import { Typography } from '@mui/material';
import React from 'react';

const DynamicGraphPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Monthly Sales Data
      </Typography>
      <BarChartComponent />
    </Container>
  );
};

export default DynamicGraphPage;
