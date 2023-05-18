
import { useState } from 'react';
import Filter from './components/subscription/Filter';
import NewSubscription from './components/subscription/newSubscription/NewSubscription';
import SubscriptionList from './components/subscription/SubscriptionList';

const INITIAL_SUB= [
  {
    id: "1",
    date: (new Date('2023','01','13')),
    title: "Monthly Subscription",
    price: "199",
  },
  {
    id: "2",
    date: (new Date('2022','02','15')),
    title: "Quarterly Subscription",
    price: "399",
  },
  {
    id: "1",
    date: (new Date('2021','02','15')),
    title: "Annual Subscription",
    price: "1099",
  }

]
function App() {
  const [subscriptions, setSubsriptions]= useState(INITIAL_SUB)
  const  addSubscriptionHandler=(data)=>{
    // subscriptions.push(data)
    console.log('on add subscription',data);
    setSubsriptions(prevState=>{return[...prevState,data]})
    console.log(subscriptions);
  }
  const [filteredData, setFilteredData]= useState('2021');
  const filterChangeHandler= (data)=>{
    setFilteredData(data)
    console.log('Onsave Data:', data);
  }
  const filterSubscriptions= subscriptions.filter((item)=>{
    return item.date.getFullYear().toString()=== filteredData

  })
  
  return (
    <div className="App">
      <NewSubscription  onAddSubscription={addSubscriptionHandler}/>
      <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredData}/>
      <SubscriptionList subscriptions={filterSubscriptions}/>
      {/* <Subcription date={subscriptions[0].date} title={subscriptions[0].title} price={subscriptions[0].price}/>
      <Subcription date={subscriptions[1].date} title={subscriptions[1].title} price={subscriptions[1].price}/>
      <Subcription date={subscriptions[2].date} title={subscriptions[2].title} price={subscriptions[2].price}/> */}
    </div>
  );
}

export default App;
