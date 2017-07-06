import React from 'react';
import { connect } from 'react-redux';

export class Feedback extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.feedback){
            let imageFeedback = 
                <div className="correct">
                    <img src="../styles.jacki_yes.gif" alt="Correct Answer"/>
                    <p className="correctAnswer"></p>
                <div/>; 

        }
        return(
            <div className='feedback'>
            </div>
        );
    }

}

const mapStateToProps = (state)=>({
    //answer: state.answer
})

export default connect(mapStateToProps)(Feedback);

