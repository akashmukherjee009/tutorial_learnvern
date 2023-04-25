import { useState } from "react";
import "./formSubscription.css"
 


const FromSubscription = (props) => {
    // const [userTitle,setuserTitle]= useState("")
    // const [userDate,setuserDate]= useState("")
    // const [userAmount,setuserAmount]= useState("")
    const [form, setForm]= useState({userTitle:'', userDate:'', userAmount:''})
    const titleChangeHandler= (events)=>{
        // setuserTitle(events.target.value)
        // setForm({...form, userTitle: events.target.value})
        setForm((prevState)=>{
            return {...prevState, userTitle: events.target.value}
        })
        // console.log(form);
    }
    const dateChangeHandler= (events)=>{
        // setuserDate(events.target.value)
        // setForm({...form, userDate: events.target.value})
        setForm((prevState)=>{
            return {...prevState, userDate: events.target.value}
        })
        // console.log(form);
    }
    const amountChangeHandler= (events)=>{
        // setuserAmount(events.target.value)
        // setForm({...form, userAmount: events.target.value})
        setForm((prevState)=>{
            return {...prevState, userAmount: events.target.value}
        })
        console.log(form);
    }
    const submitHandler=(events)=>{
        events.preventDefault()

        const subscription= {title: form.userTitle, price: form.userAmount, date: new Date(form.userDate)}
        props.onSave(subscription)
        

        console.log('on save',subscription);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="new_subscription_controls">
            <div className="new_subscription_control">
                <label htmlFor="">Title</label>
                <input type="text" value={form.userTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new_subscription_control">
                <label htmlFor="">Date</label>
                <input type="date"  onChange={dateChangeHandler}/>
            </div>
            <div className="new_subscription_control">
                <label htmlFor="">Amount</label>
                <input type="text" value={form.userAmount} onChange={amountChangeHandler}/>
            </div>
        </div>
        <div className="new_subscription_actions">
            <button type="submit">Add Subscription</button>
        </div>
      
    </form>
  )
}

export default FromSubscription
