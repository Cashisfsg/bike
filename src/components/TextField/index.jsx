import React from "react";
import { Input } from "./styled";

function TextField({placeholder, error, errorLabel, ...props}) {
    return (
        <Input placeholder = { error ? errorLabel : placeholder } error = {error} {...props}/>
    )
}

export default TextField;