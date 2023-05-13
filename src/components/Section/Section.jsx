import { Component } from 'react'
import React from 'react'
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
// import Statistics from './Statistics/Statistics'

const Section = ({children, title}) => {
	return (
		<div className="container text-center">
            <h2>{title}</h2>
            {children}
        </div>
	)
}

export default Section