import React, {useState} from 'react'

const MessageForm = (props) => {
  // state 
  const [msg, setMsg] = useState('');
  
  const handleSubmit = (e )=> {
    e.preventDefault();
    // what should we do with the message?
    props.onNewMessage(msg)
    console.log('submited', msg)
  }



  return (
    <form onSubmit={handleSubmit}>
      <h1>Send Message</h1>
      <textarea name="" id="" cols="50" rows="4" onChange={(e)=> setMsg(e.target.value)} value={msg}></textarea>
     <input type="submit" value="Send Message" />
    </form>
  )
};



export default MessageForm;