import React from 'react';
import ReactToPrint from 'react-to-print';
import PrintContent from './PrintContent';

const PrintButton = () => {
    const printContentRef = React.createRef();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print</button>}
                content={() => printContentRef.current}
                pageStyle="@page { size: 4in 6in; margin: 0; } @media print { body { margin: 0; } }"
            />
            <div style={{ display: 'none' }}>
                <PrintContent ref={printContentRef} />
            </div>
        </div>
    );
};

export default PrintButton;