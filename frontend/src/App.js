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
            custom_color_1: "#fff7e3",
            custom_color_2: "#ffe69c",
            custom_color_3: "#ffd455",
            custom_color_4: "#ffc518",
            custom_color_5: "#ff9700",
        }
    }
    );

    useStyles = makeStyles(theme => ({
             root: {
            display: 'flex',
            minHeight: '100vh',
            custom_color_1: "#fff7e3",
            custom_color_2: "#ffe69c",
            custom_color_3: "#ffd455",
            custom_color_4: "#ffc518",
            custom_color_5: "#ff9700",
        },
        app: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            custom_color_1: "#fff7e3",
            custom_color_2: "#ffe69c",
            custom_color_3: "#ffd455",
            custom_color_4: "#ffc518",
            custom_color_5: "#ff9700",
        },
        main: {
            flex: 1,
            background: 'secondary',
            paddingTop: '56px',
            custom_color_1: "#fff7e3",
            custom_color_2: "#ffe69c",
            custom_color_3: "#ffd455",
            custom_color_4: "#ffc518",
            custom_color_5: "#ff9700",
        },
        footer: {
            padding: theme.spacing(2),
            background: '#fff7e3',
            custom_color_1: "#fff7e3",
            custom_color_2: "#ffe69c",
            custom_color_3: "#ffd455",
            custom_color_4: "#ffc518",
            custom_color_5: "#ff9700",
        },
        custom_color_1: "#fff7e3",
        custom_color_2: "#ffe69c",
        custom_color_3: "#ffd455",
        custom_color_4: "#ffc518",
        custom_color_5: "#ff9700",
    }))

    render() {
        return (
            <ThemeProvider theme={this.theme}>
                <CssBaseline />
                <Router>
                    <AppNav />
                        <Switch>
                            <Route path='/' exact render={() => (<Redirect to="/summary" />)} />
                            <Route path='/summary' component={Summary} />
                            <Route path='/review' component={ReviewContents} />
                        </Switch>
                    <BottomNav />
                </Router>
            </ThemeProvider >
        );
    }
}

export default App;
