import React from 'react';
import * as Cookies from 'js-cookie';
import { connect } from "react-redux";
import { fetchUser } from "../actions/actions";

import QuestionPage from './question-page';
import LoginPage from './login-page';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.componentDidMount = this.componentDidMount.bind(this);
    // }

    componentDidMount() {
        const accessToken = Cookies.get('accessToken');
        console.log(accessToken)
        if(accessToken) {
             this.props.dispatch(fetchUser(accessToken));
        }
    }

    render() {
        if (this.props.currentUser===null)    return <LoginPage />;
            //return <QuestionPage/>;
       return <QuestionPage />;
    }
}

const mapStateToProps = (state)=>({
  currentUser: state.currentUser
})

export default connect(mapStateToProps)(App);
