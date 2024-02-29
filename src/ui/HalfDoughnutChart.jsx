import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import imoji from "/imoji.png";

ChartJS.register(
  ArcElement, Tooltip, Legend
);

const HalfDoughnutChart = () => {
  const data = {
    labels: ['start', 'middle', 'end'],
    datasets: [
      {
        label: 'Downloads',
        data: [30, 60, 90],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { chartArea } = chart;
          if(!chartArea) {
            return null
          }
          if (context.dataIndex === 0) {
            return getGradient(chart);
          } else {
            return 'cyan';
          }
        },
        borderColor: ['cyan', 'indigo', 'purple'],
        cutout: "90%",
        circumference: 180,
        rotation: 270,
        borderWidth: 1,
      }
    ]
  }

  const options = {
      aspectRatio: 1.3,
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
        const { ctx, chartArea: {left, right} } = chart;

        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;

        ctx.save();

        ctx.fillStyle = "#fff";
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center",
        // img = html.IMG(src="/imoji.png"),
        // img.onLoad() = () => {
            // ctx.drawImage(imoji, xCoor, yCoor, 10, 10),
          // };
        // ctx.drawImage(<img src="/imoji.png" className="w-5 h-5" />, xCoor, yCoor, 10, 10);
        // const img = new Image();
        // img.src = "/imoji.png";
        // img.onload = () => {
        //   ctx.drawImage(img, xCoor - img.width / 2, yCoor - img.height / 2, img.width, img.height);
        // };
        ctx.fillText("Text", xCoor, yCoor);

        ctx.textAlign = "left",
        ctx.fillText("0%", left, yCoor + 13);

        ctx.textAlign = "right",
        ctx.fillText("100%", right, yCoor + 13);
    }
  }

  function getGradient(chart) {
    const {ctx, chartArea: {left , right} } = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    gradientSegment.addColorStop(0, 'cyan');
    gradientSegment.addColorStop(0.5, 'indigo');
    gradientSegment.addColorStop(1, 'purple');
    return gradientSegment;
  }
    
  return (
    <div style={{ width: "70%", height: "60%", margin: "0 auto"}}>
      <Doughnut data={data} options={options} plugins={ [gaugeText] } />
    </div>
  )
};

export default HalfDoughnutChart;

// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const HalfDoughnutChart = () => {
//   const data = {
//     labels: ['start', 'end'],
//     datasets: [
//       {
//         label: 'Downloads',
//         data: [30, 60],
//         backgroundColor: (context) => {
//                     const chart = context.chart;
//                     const { chartArea } = chart;
//                     if(!chartArea) {
//                       return null
//                     }
//                     if (context.dataIndex === 0) {
//                       return getGradient(chart);
//                     } else {
//                       return 'cyan';
//                     }
//                   },
//         // backgroundColor: [
//         //   getGradient(),
//         //   'cyan'
//         // ],
//         borderColor: ['cyan', 'indigo', 'purple'],
//         cutout: "90%",
//         circumference: 180,
//         rotation: 270,
//         borderWidth: 1,
//       }
//     ]
//   };

//   const options = {
//     aspectRatio: 2,
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//       legend: {
//         display: false,
//       }
//     }
//   };

//   const gaugeText = {
//     id: "gaugeText",
//     beforeDatasetDraw(chart) {
//       const { ctx, chartArea: { left, right } } = chart;
//       const xCoor = chart.getDatasetMeta(0).data[0].x;
//       const yCoor = chart.getDatasetMeta(0).data[0].y;
//       ctx.save();
//       ctx.fillStyle = "#fff";
//       ctx.font = "14px sans-serif";
//       ctx.textAlign = "center";
//       ctx.fillText(<img src="/imoji.png" className="w-5 h-5" /> , xCoor, yCoor);

//       ctx.textAlign = "left";
//       ctx.fillText("0%", left, yCoor + 20);

//       ctx.textAlign = "right";
//       ctx.fillText("100%", right, yCoor + 20);
//     }
//   };

//   function getGradient(chart) {
//     const { ctx, chartArea: { left, right } } = chart;
//     const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
//     gradientSegment.addColorStop(0, 'cyan');
//     gradientSegment.addColorStop(0.5, 'indigo');
//     gradientSegment.addColorStop(1, 'purple');
//     return gradientSegment;
//   }
  
//   return (
//     <div style={{ width: "70%", height: "60%", margin: "0 auto"}}>
//       <Doughnut data={data} options={options} plugins={[gaugeText]} />
//     </div>
//   );
// };

// export default HalfDoughnutChart;

// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const HalfDoughnutChart = () => {
//   const data = {
//     labels: ['start', 'end'],
//     datasets: [
//       {
//         label: 'Downloads',
//         data: [30, 60],
//         backgroundColor: (context) => {
//           const chart = context.chart;
//           const { chartArea } = chart;
//           if(!chartArea) {
//             return null
//           }
//           if (context.dataIndex === 0) {
//             return getGradient(chart);
//           } else {
//             return 'cyan';
//           }
//         },
//         // backgroundColor: [
//         //   getGradient(chart),
//         //   'cyan'
//         // ],
//         borderColor: ['cyan', 'indigo', 'purple'],
//         cutout: "90%",
//         circumference: 180,
//         rotation: 270,
//         borderWidth: 1,
//       }
//     ]
//   };

//   const options = {
//     aspectRatio: 2,
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//       legend: {
//         display: false,
//       }
//     }
//   };

//   const gaugeText = {
//     id: "gaugeText",
//     afterDatasetDraw(chart) {
//       const { ctx, chartArea: { left, right } } = chart;
//       const xCoor = chart.getDatasetMeta(0).data[0].x;
//       const yCoor = chart.getDatasetMeta(0).data[0].y;
//       ctx.save();
//       ctx.fillStyle = "#fff";
//       ctx.font = "14px sans-serif";
//       ctx.textAlign = "left";
//       ctx.fillText("0%", left, yCoor + 20);
      
//       ctx.textAlign = "right";
//       ctx.fillText("100%", right, yCoor + 20);
      
//       const img = new Image();
//       img.src = "/imoji.png";
//       img.onload = () => {
//         ctx.drawImage(img, xCoor - img.width / 2, yCoor - img.height / 2, img.width, img.height);
//       };
//     }
//   };

//   function getGradient(chart) {
//     const { ctx, chartArea: { left, right } } = chart;
//     const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
//     gradientSegment.addColorStop(0, 'cyan');
//     gradientSegment.addColorStop(0.5, 'indigo');
//     gradientSegment.addColorStop(1, 'purple');
//     return gradientSegment;
//   }
  
//   return (
//     <div style={{ width: "70%", height: "60%", margin: "0 auto"}}>
//       <Doughnut data={data} options={options} plugins={[gaugeText]} />
//     </div>
//   );
// };

// export default HalfDoughnutChart;