import {createMuiTheme, Typography} from '@material-ui/core';
import React, {useState, useEffect, useRef, Component} from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./MediaCard";
import axios from "axios";
import {deepOrange, pink} from "@material-ui/core/colors";
import 'date-fns';

const theme = createMuiTheme({
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


const useStyles = makeStyles(theme => ({
    custom_color_1: "#fff7e3",
    custom_color_2: "#ffe69c",
    custom_color_3: "#ffd455",
    custom_color_4: "#ffc518",
    custom_color_5: "#ff9700",

    formControl: {
        // margin: theme.spacing(1),
        // minWidth: 90,
        // marginTop: 40,
    },
    KeyboardDatePicker: {
        margin: theme.spacing(1),
        // minWidth: 90,
        width: 600,
        marginTop: 40,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    text: {
        padding: theme.spacing(2, 2, 0)
    },

    list: {
        marginBottom: theme.spacing(2)
    },

    container: {
        width: '100%',
        // paddingTop: "46px",
        paddingBottom: "46px"
    },

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



export default function TopReviews() {
    const classes = useStyles();
    const [data, setData] = useState([])
    // const forceUpdate = useForceUpdate();
    let [count, setCount] = useState(0);


    useInterval(() => {
        axios
            .get("/api/reviews/")
            .then(result => setData(result.data.reverse()));
        setCount(count + 1);
    }, 1000);


    useEffect(() => {
        const loadData = async () => {
            axios
                .get("/api/reviews/")
                .then(result =>
                    setData(result.data.reverse()));
        };
        loadData()
    }, []);


    const filteredData = data.filter(menuitem => {
        return menuitem.stars === "5"
    });

    return (
        <div>
            <Container>
                <Typography variant="subtitle2">
                &nbsp;This page shows all five star reviews.
                </Typography>
            </Container>

            <Container className={classes.container}>
                {/* <List className={classes.list}>
                    {data.map(({ id, title, stars, description, name, image }) => (
                        <ListItem key={id}>
                            <Card id={id}
                                title={title}
                                stars={stars}
                                description={description}
                                name={name}
                                image={image}
                            />
                        </ListItem>
                    ))}

                </List> */}
                <List className={classes.list}>
                    {filteredData.map(({ id, title, stars, description, name, image }) => (
                        <ListItem key={id}>
                            <Card id={id}
                                title={title}
                                stars={stars}
                                description={description}
                                name={name}
                                image={image}
                            />
                        </ListItem>
                    ))}

                </List>
            </Container>
        </div>
    );
}
