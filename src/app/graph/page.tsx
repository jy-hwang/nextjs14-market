'use client';

import Container from '@/components/Container';
import Heading from '@/components/Heading';
import React from 'react';

import { BarChart, BarPlot } from '@mui/x-charts/BarChart';
import {
  AllSeriesType,
  ChartContainer,
  ChartsXAxis,
  ChartsYAxis,
  Gauge,
  LinePlot,
  PieChart,
} from '@mui/x-charts';
const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [2, 5, 3, 4, 1],
  },
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'eco',
    data: [5, 6, 2, 8, 9],
  },
  {
    type: 'line',
    yAxisKey: 'pib',
    color: 'red',
    data: [1000, 1500, 3000, 5000, 10000],
  },
] as AllSeriesType[];

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Series A',
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: 'Series B',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'Series C',
};

const GraphPage = () => {
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <Heading title="Sample Chart" />
        <div
          className="
grid
grid-cols-1
gap-20
pt-0
sm:grid-cols-1
lg:grid-cols-2
"
        >
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            width={500}
            height={400}
            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
          <BarChart
            xAxis={[
              {
                id: 'barCategories',
                data: ['bar A', 'bar B', 'bar C'],
                scaleType: 'band',
              },
            ]}
            series={[
              {
                data: [2, 5, 3],
              },
            ]}
            width={600}
            height={500}
          />

          <ChartContainer
            series={series}
            width={600}
            height={500}
            xAxis={[
              {
                id: 'years',
                data: [2010, 2011, 2012, 2013, 2014],
                scaleType: 'band',
                valueFormatter: (value) => value.toString(),
              },
            ]}
            yAxis={[
              {
                id: 'eco',
                scaleType: 'linear',
              },
              {
                id: 'pib',
                scaleType: 'log',
              },
            ]}
          >
            <BarPlot />
            <LinePlot />
            <ChartsXAxis label="Years" position="bottom" axisId="years" />
            <ChartsYAxis label="Results" position="left" axisId="eco" />
            <ChartsYAxis label="PIB" position="right" axisId="pib" />
          </ChartContainer>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
            width={600}
            height={400}
          />
          <BarChart
            width={600}
            height={300}
            series={[
              { ...seriesA, stack: 'total' },
              { ...seriesB, stack: 'total' },
              { ...seriesC, stack: 'total' },
            ]}
          />
        </div>
        <div
          className="
grid
grid-cols-1
gap-20
pt-0
sm:grid-cols-3
md:grid-cols-6
"
        >
          <Gauge width={100} height={100} value={60} />
          <Gauge
            width={100}
            height={100}
            value={60}
            startAngle={-90}
            endAngle={90}
          />
        </div>
      </div>
    </Container>
  );
};

export default GraphPage;
