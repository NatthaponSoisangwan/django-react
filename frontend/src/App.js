import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { makeStyles } from "@material-ui/core/styles";
import AppNav from "./Components/TopNav";
import ReviewContents from "./Components/ReviewContents";
import ReviewForm from "./Components/ReviewForm";
import BottomNav from "./Components/BottomNav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Review from "./Components/Review";


class App extends Component {

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <AppNav />
                    <Router>
                        <Switch>
                            <Route path='/' exact component={ReviewContents} />
                            <Route path='/reviewform' component={ReviewForm} />
                        </Switch>
                    </Router>
                <Review />
                <BottomNav/>
            </React.Fragment>
        );
    }
}

export default App;
