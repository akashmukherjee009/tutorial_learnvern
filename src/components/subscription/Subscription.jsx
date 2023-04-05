import Container from './Container'
import './subscription.css'
import SubscriptionDate from './SubscriptionDate'
import {useState} from 'react'

const Subscription = (props) => {
  const [title, setTtile]= useState(props.title)
  const clickhandeler=()=>{
    setTtile("Change Title")
    console.log("button clicked",title);
  }
  return(
    <Container className='subscription'>
      <SubscriptionDate date={props.date}/>    
      <h2 className="subscription_title">{title}</h2>
      <h2 className="subscription_price">{props.price}</h2>
      <button onClick={clickhandeler}>Click Here</button>
      
      
    </Container>
  )
}

export default Subscription
