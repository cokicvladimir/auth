import React from 'react';
import requreAuth from './requireAuth';

class Feature extends React.Component{
    render(){
        return(
            <div>
                Yo! This is the feature!
            </div>
        );
    }
}

export default requreAuth(Feature);