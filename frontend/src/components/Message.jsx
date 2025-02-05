import {Alert} from "react-bootstrap"

const Message = ({variant,childern}) => {
    <Alert variant ={variant}>{childern}</Alert>;
}
Message.defaultProps ={
    variant : 'info',
}

export default Message