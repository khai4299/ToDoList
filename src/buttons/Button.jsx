import "./button.scss"
import {CheckOutlined} from "@material-ui/icons"
const Button = ({index, onCheckClick}) => {
  return (
    <div className="button" style={{width: "max-content"}}>
        <span style={{textDecoration: index.isCompleted && "underline"}}>Button {index.name}</span>
        <CheckOutlined className='checkIcon' onClick={() => onCheckClick(index.id)}/>    
    </div>
  )
}

export default Button