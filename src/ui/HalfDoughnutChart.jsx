import GaugeComponent from 'react-gauge-component'

function HalfDoughnutChart() {
  return (
    <div>
      <GaugeComponent
  type="semicircle"
  arc={{
    gradient: true,
    width: 0.15,
    padding: 0,
    subArcs: [
      {
        limit: 15,
        color: '#00bcd4',
        showTick: false
      },
      {
        limit: 37,
        color: '#3F51B5',
        showTick: false
      },
      {
        limit: 78,
        color: 'pink',
        showTick: false
      },
      {
        limit: 85,
        color: 'transparent',
        showTick: false
      },
      { color: 'transparent' }
    ]
  }}
  value={90}
  pointer={{type: "arrow", elastic: true, color: "transparent"}}
/>
    </div>
  )
}

export default HalfDoughnutChart;
