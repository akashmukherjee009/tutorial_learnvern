
import NewSubscription from './components/subscription/newSubscription/NewSubscription';
import Subcription from './components/subscription/Subscription';

function App() {
  let subscriptions= [
    {
      id: "1",
      date: (new Date('2023','01','13')),
      title: "Monthly Subscription",
      price: "199",
    },
    {
      id: "2",
      date: (new Date('2023','02','15')),
      title: "Quarterly Subscription",
      price: "399",
    },
    {
      id: "1",
      date: (new Date('2023','02','15')),
      title: "Annual Subscription",
      price: "1099",
    }

  ]
  
  return (
    <div className="App">
      <NewSubscription />
      <Subcription date={subscriptions[0].date} title={subscriptions[0].title} price={subscriptions[0].price}/>
      <Subcription date={subscriptions[1].date} title={subscriptions[1].title} price={subscriptions[1].price}/>
      <Subcription date={subscriptions[2].date} title={subscriptions[2].title} price={subscriptions[2].price}/>
    </div>
  );
}

export default App;
