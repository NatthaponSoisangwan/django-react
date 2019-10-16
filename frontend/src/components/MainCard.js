import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        maxWidth: 375,
        position: 'relative',
        margin: '0 auto',
        height: 820,
    },
}));

export default function PaperSheet() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
                <Typography component="p">
                    Background paper
                </Typography>
            </Paper>
        </div>
    );
}