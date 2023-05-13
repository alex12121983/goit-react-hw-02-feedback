import React, { Component } from 'react'

class Statistics extends Component {
    countTotalFeedback = (good, neutral, bad) => {
		// console.log('It works')
		return (good + neutral + bad)
	}
    positivePercentage = (good, neutral, bad) => {
		return Math.floor((good / (good + neutral + bad)) * 100)
	}
    render(){
        const {good, neutral, bad} = this.props
        return (
            <ul className="list-group">
                <li className="list-group-item">Good: {good}</li>
                <li className="list-group-item">Neutral: {neutral}</li>
                <li className="list-group-item">Bad: {bad}</li>
                <li className="list-group-item">Total: {this.countTotalFeedback(good, neutral, bad)}</li>
                <li className="list-group-item">Positive feedback: {this.positivePercentage(good, neutral, bad)} %</li>
            </ul>
        )
    }
}
export default Statistics