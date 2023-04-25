import React, { useState } from 'react'
import FromSubscription from './FromSubscription'
import "./newSubscription.css"

const NewSubscription = (props) => {
  const [showForm, setShowForm]= useState(false)
  const onSaveHandler= (data)=>{
    const subscriptionData= {...data, id: Math.random().toString()}
    props.onAddSubscription(subscriptionData)
    console.log('on submit', subscriptionData);
    setShowForm(false)
  }
  const onClickHandler= (e)=>{
    if (showForm===true) {
      setShowForm(false)
    }else{
      setShowForm(true)
    }
    console.log(showForm);
  }
  
  return (
    <div>
      {(showForm===true)?<FromSubscription onSave={onSaveHandler}/>:<p></p>}
      {(showForm===true)?<button type="submit" onClick={onClickHandler}>Hide Form</button>:<button type="submit" onClick={onClickHandler}>Add New Subscription</button>}
    </div>
  )
}

export default NewSubscription
