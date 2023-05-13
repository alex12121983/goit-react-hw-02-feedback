import React from 'react'

const Notification = ({message}) => {
	return (
		<div className="container text-center">
            <h3>{message}</h3>
        </div>
	)
}

export default Notification