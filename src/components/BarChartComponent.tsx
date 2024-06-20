import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import 'chart.js/auto';

const BarChartComponent = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/data/data1.json')
      .then((response) => response.json())
      .then((data) => {
        const labels = data.data.map((item) => item.month);
        const salesData = data.data.map((item) => item.sales);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: data.y_axis,
              data: salesData,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching the data:', error));
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ width: '80%', margin: '0 auto', paddingTop: '50px' }}>
      <Bar
        data={chartData}
        options={{ responsive: true, plugins: { legend: { position: 'top' } } }}
      />
    </Box>
  );
};

export default BarChartComponent;
