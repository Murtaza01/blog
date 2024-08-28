import { ReactNode } from "react"
import classes from "./PostCard.module.css"
type props = {
  children: ReactNode;
}

const PostCard = ({children}:props)=>{
  return <div className={classes.container}>
    {children}    
    </div>
}

export default PostCard;
