import './Button.css';
const Button =(props)=>{
    return (
        <div className="box">
        <div className={`btn btn-v${props.version}`} onClick={props.onClick}>
            <span>{props.value}</span>
        </div>
    </div>
    )
}
export default Button;