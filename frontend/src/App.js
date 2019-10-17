import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AppNav from "./components/Layout/TopNav";
import Contents from "./components/Contents";
import BottomNav from "./components/Layout/BottomNav";

const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(2, 2, 0)
    },
    paper: {
        paddingBottom: 50
    },
    list: {
        marginBottom: theme.spacing(2)
    },
    subheader: {
        backgroundColor: theme.palette.background.paper
    },
    appBar: {
        top: "auto",
        bottom: 0
    },
    grow: {
        flexGrow: 1
    },
    fabButton: {
        position: "absolute",
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: "0 auto"
    },

    container: {
        ...theme.mixins.toolbar,
        flexGrow: 1
    }
}));

class App extends Component{

    constructor(props) {
        super(props);
    };

    handleRenderPage=(props) =>{
        this.setState({displayPage:props})
    };



    render() {
        return(
            <React.Fragment>
                <CssBaseline />
                <AppNav />
                 <Contents/>
                <BottomNav displayPage={this.handleRenderPage}/>
            </React.Fragment>
        ) ;
    }
}

export default App;