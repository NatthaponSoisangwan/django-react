import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./MediaCard";
import axios from "axios";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({
    
    text: {
        padding: theme.spacing(2, 2, 0)
    },

    list: {
        marginBottom: theme.spacing(2)
    },

    container: {
        width: '90%',
        paddingBottom: "96px"
    },

    root: {
        flexGrow: 1,
    }

}));

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default function ContentReviews() {
    const classes = useStyles();
    const [data, setData] = useState([])

    useInterval(() => {
        axios
            .get("/api/reviews/?ordering=-created_date")
            .then(result => setData(result.data));
    }, 10000);


    useEffect(() => {

        const loadData = async () => {
            axios
                .get("/api/reviews/?ordering=-created_date")
                .then(result =>
                    setData(result.data));
        };
        loadData()

        
    }, []);

    return (
        <div>
            <Container className={classes.container}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={3}>
                            {data.map(({ menu_name, id, rating, description, created_date, image }) => (
                                <Grid key={id} item>
                                    <Card
                                        menu_name={menu_name}
                                        rating={rating}
                                        description={description}
                                        created_date={created_date}
                                        image={image}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}