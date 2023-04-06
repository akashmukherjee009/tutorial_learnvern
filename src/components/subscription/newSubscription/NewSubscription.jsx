import React from 'react'
import FromSubscription from './FromSubscription'

const NewSubscription = (props) => {
  const onSaveHandler= (data)=>{
    const subscriptionData= {...data, id: Math.random().toString()}
    props.onAddSubscription(subscriptionData)
    console.log('on submit', subscriptionData);
  }
  return (
    <div>
      <FromSubscription onSave={onSaveHandler}/>
    </div>
  )
}

export default NewSubscription
