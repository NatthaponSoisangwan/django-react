import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./MediaCard";
import axios from "axios";
import useForceUpdate from 'use-force-update';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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
    subheader: {
        backgroundColor: theme.palette.background.paper
    },
    container: {
        ...theme.mixins.toolbar,
        flexGrow: 1,
        width: '100%',
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



export default function ContentReviews() {
    const classes = useStyles();
    const [data, setData] = useState([])
    const forceUpdate = useForceUpdate();
    let [count, setCount] = useState(0);

    //Filter bar stuff
    // const [state, setState] = useState({
    //   age: '',
    //   name: 'hai',
    // });

    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
  
    // const handleChange = name => event => {
    //   setState({
    //     ...state,
    //     [name]: event.target.value,
    //   });
    // };


    useInterval(() => {
        axios
            .get("/api/reviews/")
            .then(result => setData(result.data));
        setCount(count + 1);
    }, 1000);


    useEffect(() => {
        const loadData = async () => {
            axios
                .get("/api/reviews/")
                .then(result => setData(result.data));
        };
        loadData()
        // setInterval(loadData(), 400); // does not work
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
        <div>
        <Container className={classes.container}>
            <List className={classes.list}>
                {data.map(({ id, title, stars, description, name, image }) => (
                    <React.Fragment>
                        <ListItem >
                            <Card id={id} title={title} stars={stars} description={description} name={name} image={image} handleDelete={handleDelete} />
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>
        </Container>
        </div>
    );
}