import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppNav from "./Components/TopNav";
import ReviewContents from "./Components/ReviewContents";
import BottomNav from "./Components/BottomNav";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Summary from './Components/Summary'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { pink, deepOrange } from "@material-ui/core/colors";


class App extends Component {
    // Review Page 
    theme = createMuiTheme({
        palette: {
            primary: pink,                                     // Customize primary color here
            secondary: deepOrange,                             // Customize secondary color here
        }
    }
    );

    useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            minHeight: '100vh',
        },
        app: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        },
        main: {
            flex: 1,
            background: 'secondary',
            paddingTop: '56px'
        },
        footer: {
            padding: theme.spacing(2),
            background: '#eaeff1',
        },
    }))

    render() {
        return (
            <ThemeProvider theme={this.theme}>

                <CssBaseline />
                <header>
                    <AppNav />
                </header>
                <Router>
                    <Switch>
                        <Route path='/' exact render={() => (<Redirect to="/summary" />)} />
                        <Route path='/review' component={ReviewContents} />
                        <Route path='/summary' component={Summary} />
                    </Switch>
                    <BottomNav />
                </Router>

            </ThemeProvider >
        );
    }
}

export default App;
