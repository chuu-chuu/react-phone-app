import React from 'react';

function Title({name, title}) {
    
    return (
        <React.Fragment>
            <div className="text-title mx-auto text-center">
                <h1 className="text-capitalize font-weight-bold">
                    {name}  
                    <strong className="text-blue">&nbsp;{title}</strong>
                </h1>
            </div>
        </React.Fragment>
        
    )
    
}
export default Title;
