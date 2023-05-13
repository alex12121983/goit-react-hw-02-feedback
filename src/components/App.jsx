import { Component } from 'react'
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	  }
	onLeaveFeedback = ({target: {name}}) => {
		this.setState((prevState) => ({ [name]: prevState[name] + 1, }))
	}
	// countTotalFeedback = (evt) => {
	// 	console.log('It works')
	// 	return (this.state.good + this.state.bad + this.state.neutral)
	// }
	// countPositiveFeedbackPercentage = () => {
	// 	return Math.floor((this.state.good / (this.state.good + this.state.bad + this.state.neutral)) * 100)
	// }
	render(){
		return (
			<div className='container'>
				 <Section title={'Please leave feedback'}>
				 	<FeedbackOptions 
						options={['good', 'neutral', 'bad']} 
						onLeaveFeedback={this.onLeaveFeedback}
					/>
				 </Section>
				 <Section title={'Statistics'}>
					{(this.state.good !== 0 
					|| this.state.neutral !== 0 
					|| this.state.bad !==0) ? 
					(<Statistics 
						good={this.state.good} 
						neutral={this.state.neutral} 
						bad={this.state.bad}
					/>) 
					: (<Notification  message={'There is no feedback'}/>)}
				 </Section>
			</div>
		)
	}
}

export default App
