import './CircleStyles.css'

function Circle({background,className,id}){
    console.log(background)
    return (<div className= {`Circle ${className}`} style={{backgroundColor:background}} id={id} ></div>)
}

export default Circle