import "./Chart.css"

const Chart = () => {
  const dataSetValues= props.datasets.map(dataSet=>dataSet.value)
  const max= Math.max(...dataSetValues);
  return (
    <div className="chart">
      {props.datasets.map((data)=>{<Chartbar value={data.value} label={data.label} key={data.label} maxvalue={max}/>})}

    </div>
  )
}

export default Chart
