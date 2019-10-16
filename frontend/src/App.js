import React from "react";
import BottomNav from "./components/Layout/BottomNav";
import TopAppNav from "./components/Layout/TopNav";
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';

import Content from "./components/Content";


export default function App() {

    return (
        <React.Fragment>
            <CssBaseline/>>
            <TopAppNav/>
            <Content/>
            <BottomNav/>
        </React.Fragment>
    );
}
