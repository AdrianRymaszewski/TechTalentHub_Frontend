import { Link } from 'react-router-dom';
import './Button.css';
const Button = (props) => {
    return (
        <div className="box">
            {props.navigate ?
                <Link to={props.navigate}>
                    <div className={`btn btn-v${props.version}`} onClick={props.onClick}>
                        <span>{props.value}</span>
                    </div>
                </Link>
                :
                <div className={`btn btn-v${props.version}`} onClick={props.onClick}>
                    <span>{props.value}</span>
                </div>
            }
        </div>
    )
}
export default Button;