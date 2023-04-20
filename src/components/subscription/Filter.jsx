import './Filter.css'

const Filter = (props) => {
    const onSelectHandler= (e)=>{
        console.log(e.target.value);
        props.onFilterChange(e.target.value)
    }
    
  return (
    <div className='filter'>
      <div className="filter_control">
        <label>Filter By year</label>
        <select onChange={onSelectHandler} value={props.selectedFilter}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
