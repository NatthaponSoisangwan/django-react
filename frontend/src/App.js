import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";
import AppNav from "./Components/TopNav";
import ReviewContents from "./Components/ReviewContents";
import BottomNav from "./Components/BottomNav";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Review from "./Components/AddReviewModal";
import Summary from './Components/Summary'

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppNav />
                <Router>
                    <Switch>
                        <Route path='/' exact render={() => (<Redirect to="/summary" />)} />
                        <Route path='/review' component={ReviewContents} />
                        <Route path='/summary' component={Summary} />
                    </Switch>
                    {/* <Review /> */}
                    <BottomNav />
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
