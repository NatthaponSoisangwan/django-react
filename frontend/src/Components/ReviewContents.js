import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./card";
import axios from "axios";
import useForceUpdate from 'use-force-update';


const data = [
    {
        "id": 1,
        "title": "dsf",
        "stars": "sd",
        "description": "fsdf",
        "name": "sddf",
        "createdAt": "2019-10-18T03:03:19.478478Z"
    },
    {
        "id": 2,
        "title": "sdas",
        "stars": "dsad",
        "description": "ass",
        "name": "",
        "createdAt": "2019-10-19T15:32:38.350776Z"
    },
    {
        "id": 3,
        "title": "sad",
        "stars": "asd",
        "description": "asd",
        "name": "",
        "createdAt": "2019-10-19T15:32:44.532507Z"
    },
    {
        "id": 4,
        "title": "ss",
        "stars": "ss",
        "description": "ss",
        "name": "ss",
        "createdAt": "2019-10-19T15:34:04.083341Z"
    }
]

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
    const [data, setData] = useState([])
    const forceUpdate = useForceUpdate();



    useEffect(() => {
        axios
            .get("/api/reviews/")
            .then(result => setData(result.data));
    }, []);

    let handleDelete = async (childid) => {
        await axios
            .delete(`/api/reviews/${childid}`);
        axios
            .get("/api/reviews/")
            .then(result => setData(result.data));
        forceUpdate()
    };

    return (
        <Container className={classes.container}>
            <List className={classes.list}>
                {data.map(({ id, title, stars, description, name, image }) => (
                    <React.Fragment>
                        <ListItem >
                            <Card id = {id} title={title} stars={stars} description={description} name={name} image={image} handleDelete={handleDelete}/>
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>
        </Container>
    );
}
