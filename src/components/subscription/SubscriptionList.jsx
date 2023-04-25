import React from 'react'
import Subscription from './Subscription'


const SubscriptionList = (props) => {
    console.log(props);
  return (
    <div>
      {props.subscriptions.length===0?"Data not Found": props.subscriptions.map(subcription => <Subscription date={subcription.date} title={subcription.title} price={subcription.price}/>)}

    </div>
  )
}

export default SubscriptionList
