import React, { Component } from 'react';

import Title from './Title';
function Default() {
        return (
            <div className="py-5">
                <Title name="404 ERROR !" title="Page Not Found"/>
                <h3 className="text-title text-center text-uppercase">
                    The Requested URL 
                    was not found!
                </h3>
                
            </div>
        )
    
}

export default Default;
