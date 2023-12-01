import { Link } from "react-router-dom";

function Button({linkvalue , buttonvalue}) {
    return (
        <button><Link to={linkvalue}>{buttonvalue}</Link></button>
    )
}
export default Button ;
