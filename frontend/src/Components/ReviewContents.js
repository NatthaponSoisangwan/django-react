import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./card";
import axios from "axios";

const useStyles = makeStyles(theme => ({
    text: {
        padding: theme.spacing(2, 2, 0)
    },

    list: {
        marginBottom: theme.spacing(2)
    },
    subheader: {
        backgroundColor: theme.palette.background.paper
    },
    container: {
        ...theme.mixins.toolbar,
        flexGrow: 1,
        width: '100%',

    },

}));


export default function ContentReviews() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("/api/reviews/")
            .then(result => setData(result.data));
    }, []);


    return (
        <Container className={classes.container}>
            <List className={classes.list}>
                {data.map(({ id, title, stars, description, name, image }) => (
                    <React.Fragment>
                        <ListItem >
                            <Card id={id} title={title} stars={stars} description={description} name={name} image={image} />
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>
        </Container>
    );
}
