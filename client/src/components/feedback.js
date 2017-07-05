import React from 'react';
import { connect } from 'react-redux';

export class Feedback extends React.Component{
    render() {

    
    return(
        <div className='feedback'>
        {/*{this.state.feedback}*/}
        </div>
    );
}

}

const mapStateToProps = (state)=>({
    answer: state.answer
})

export default connect(mapStateToProps)(Feedback);

