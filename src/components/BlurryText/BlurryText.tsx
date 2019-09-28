import React from 'react';
import './BlurryText.css';

const generateLines = () => {
    let lines = [];
    let top;
    for (let i = 0; i < 100; i++) {
        top = {
            top: 40 * i + 'px'
        };
        lines.push(<div className="white-line" style={top}></div>)
    }
    return lines;
};

const BlurryText: React.FC = () => {

    return (
        <div className="linear-background">
            {generateLines()}
        </div>
    )

};

export default BlurryText;
