import React from 'react';
import * as Cookies from 'js-cookie';
import { connect } from "react-redux";
import { fetchQuestions } from "../actions/actions";

export class QuestionPage extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        this.props.dispatch(fetchQuestions(accessToken));
    }

    render() {
        const questions = this.props.questions.map((question, index) =>
            <li key={index}>{question.question}</li>
        );

        return (
            <ul className="question-list">
                {questions}
            </ul>
        );
    }
}

const mapStateToProps = (state)=>({
  questions: state.questions
})

export default connect(mapStateToProps)(QuestionPage);
