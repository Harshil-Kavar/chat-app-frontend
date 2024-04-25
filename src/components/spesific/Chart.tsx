import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  scales,
} from "chart.js";
import {
  colorOrange,
  colorOrangeLight,
  colorPurple,
  colorPurpleLight,
} from "../../constants/Color";
import { getLast7Days } from "../../lib/Features";

ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

interface LineChartPropTypes {
  values: any[];
}
interface DoughnutChartPropTypes {
  values: any[];
  labels: any[];
}

const LineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

export const LineChart = ({ values = [] }: LineChartPropTypes) => {
  const labels = getLast7Days();
  const data = {
    labels,
    datasets: [
      {
        data: values,
        label: "Revenue",
        fill: true,
        backgroundColor: colorPurpleLight,
        borderColor: colorPurple,
      },
    ],
  };
  return <Line data={data} options={LineChartOptions} />;
};

const DoughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  cutout: 80,
};

export const DoughnutChart = ({
  values = [],
  labels = [],
}: DoughnutChartPropTypes) => {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        fill: true,
        backgroundColor: [colorPurpleLight, colorOrangeLight],
        hoverBackgroundColor: [colorPurple, colorOrange],
        borderColor: [colorPurple, colorOrange],
        offset: 40,
      },
    ],
  };

  return (
    <Doughnut
      data={data}
      options={DoughnutChartOptions}
      style={{ zIndex: 10 }}
    />
  );
};
