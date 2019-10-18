import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";
import AppNav from "./Components/TopNav";
import ReviewContents from "./Components/ReviewContents";
import BottomNav from "./Components/BottomNav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Review from "./Components/AddReviewModal";
import Menu from './Components/Menu'

class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <CssBaseline />
                    <AppNav />
                    <Switch>
                        <Route path='/review' exact component={ReviewContents} />
                        <Route path='/menu' component={Menu} />
                    </Switch>
                    <Review />
                    <BottomNav />
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
