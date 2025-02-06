import './index.css'

const Notification = ({ message }) => {
    if (message.text === "") {
      return null
    }
  
    return (
      <div className={message.status}>
        {message.text}
      </div>
    )
  }

export default Notification