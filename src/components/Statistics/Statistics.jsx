import React from 'react'

const Statistics = ({ good, neutral, bad, countTotalFeedback, positivePercentage }) => {
	return (
		<ul className="list-group">
            <li className="list-group-item">Good: {good}</li>
            <li className="list-group-item">Neutral: {neutral}</li>
            <li className="list-group-item">Bad: {bad}</li>
            <li className="list-group-item">Total: {countTotalFeedback()}</li>
            <li className="list-group-item">Positive feedback: {positivePercentage()}</li>
        </ul>
	)
}

export default Statistics