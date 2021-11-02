import React from 'react';

const Message = ({logger, handleClear}) => {
    return (
        <div className="messages">
            <h2>Messages</h2>
            <button
                className="clear"
                onClick={handleClear}
            >Clear messages</button>
            { logger.map( i => (
                <p>{i}</p>
            ))}
        </div>
    );
};

export default Message;