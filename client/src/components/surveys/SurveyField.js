import React from 'react';

// we actually pass the props , the props contains input and label so some ES6...
//{...input } is like : obBlur={input.onBlur} onChange={input.onChange} ...
export default ({input, label, meta}) => {
    
    return (
        <div className="field">
            <label>{label}</label><br />
            <input {...input}/>  
            { meta.error && meta.touched }
        </div>
    )
}
