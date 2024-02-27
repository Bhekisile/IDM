import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import imoji from "../assets/imoji.png";

ChartJS.register(
  ArcElement, Tooltip, Legend
);

const HalfDoughnutChart = () => {
  const data = {
    labels: ["show", "hide"],
    datasets: [
      {
        data: [0, 90],
        backgroundColor:  ["blue", "purple"],
        borderColor: ["blue", "purple"],
        cutout: "90%",
        circumference: 180,
        rotation: 270,
      }
    ]
  }

  const options = {
      aspectRation: 2,
      plugins: {
        tooltip: {
          enabled: false,
        },
        legend: {
          display: false,
        }
      }
    }
  
    const gaugeText = {
      id: "gaugeText",
      beforeDatasetDraw(chart) {
        const { ctx } = chart;

      // beforeDatasetDraw(chart, args, pluginOptions) {
      //   const { ctx, chartArea: {top, bottom, left, right, width, height} } = chart;

        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;

        ctx.save();

        ctx.fillStyle = "#666";
        ctx.font = "20px sans-serif";
        ctx.textAlign = "center",
        ctx.fillText(<img className="w-5 h-5" src={imoji} alt="imoji" />, xCoor, yCoor);
    }
  }
  
  console.log(<img className="w-5 h-5" src={imoji} alt="imoji" />);
  
  return (
    <div style={{ width: "70%", height: "70%", padding: "0 auto"}}>
      <Doughnut data={data} options={options} plugins={ [gaugeText] } />
    </div>
  )
};

export default HalfDoughnutChart;
