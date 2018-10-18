import React from 'react';

export default function Spinner({ size = "medium" }) {
    return <div className={`spinner spinner-${size}`} />;
}
