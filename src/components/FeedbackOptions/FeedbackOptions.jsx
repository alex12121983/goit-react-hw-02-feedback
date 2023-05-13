import React, { Component } from 'react'

class FeedbackOptions extends Component {
    render(){
        const { options, onLeaveFeedback } = this.props
        return (
            <div className="row">
                {options.map((option, index) => {
                   return (<div className="col" key={index}>
                                <button 
                                    name={option}
                                    type="button" 
                                    className="btn btn-info" 
                                    onClick={onLeaveFeedback}
                                >
                                    {option}
                                </button>
                            </div>)
                })}
            </div>
        )
    }
}

export default FeedbackOptions