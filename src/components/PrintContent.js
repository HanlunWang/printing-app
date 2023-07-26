import React from 'react';

class PrintContent extends React.Component {
    render() {
        return (
            <div
                style={{
                    width: '4in',
                    height: '6in',
                    padding: '0.5in',
                    boxSizing: 'border-box',
                    border: '1px solid black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img
                    src="https://dummyimage.com/600x400/000/fff.png"
                    alt="Printable Image"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            </div>
        );
    }
}

export default PrintContent;