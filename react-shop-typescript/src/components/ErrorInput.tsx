import React from 'react'



const ErrorInput: React.FC<{ error?: string }> = ({ error }) => {
    return error ? (
        <p className="error-text">{error}</p>
    ) : null
}

export default ErrorInput
