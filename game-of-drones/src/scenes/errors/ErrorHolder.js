import React from 'react';
import attentionIcon from "../../images/attention-icon.png";
import ErrorMessage from "./ErrorMessage";
import { withErrors } from '../../reducers/hocs';

const iconStyle = {
    width: "20px", 
    height: "20px"
}

const ErrorHolder = (props) => {
    let errors = props.errors;
    return (
    <div>
        {errors.length > 0 && 
        <img style={iconStyle} alt="Attention" src={attentionIcon} onClick={() => this.handleRemovePlayer()}/>
        }
        {errors.map((error, i) => (
            <ErrorMessage key={i} message={error.message}/>))}
    </div>
)};
export default withErrors(ErrorHolder);