import React from 'react';

const Loading = () => {
    return (
        <div  className="flex h-[90vh] items-center justify-center space-x-2 animate-bounce">
        <div  className="w-16 h-16 bg-secondary rounded-full"></div>
        <div  className="w-16 h-16 bg-primary rounded-full"></div>
        <div  className="w-16 h-16 bg-accent rounded-full"></div>
    </div>
    );
};
 
export default Loading;