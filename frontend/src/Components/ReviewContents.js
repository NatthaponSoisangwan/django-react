import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
// import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./MediaCard";
import axios from "axios";
import useForceUpdate from 'use-force-update';
// import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
import 'date-fns';
// import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers/';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
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



export default function ContentReviews() {
    const classes = useStyles();
    const [data, setData] = useState([])
    const forceUpdate = useForceUpdate();
    let [count, setCount] = useState(0);

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };


    // Filter bar stuff
    const [state, setState] = useState({
        foodName: '',
        mealTime: 'hai',
        date: "",
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    const handleChange = name => event => {
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    useInterval(() => {
        axios
            .get("/api/reviews/")
            .then(result => setData(result.data));
        setCount(count + 1);
    }, 10000);


    useEffect(() => {
        const loadData = async () => {
            axios
                .get("/api/reviews/")
                .then(result => 
                    setData(result.data));
        };
        loadData()
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
            <Container fixed>
                <Typography
                    component="div"
                    style={{ backgroundColor: "#FFFFFF", height: "8vh" }}
                />
                <FormControl className={classes.formControl}>
                    <Select
                        value={state.age}
                        onChange={handleChange('age')}
                        name="age"
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'age' }}
                        display='sticky'
                    >
                        <option value="">None</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                    <FormHelperText>Label 1</FormHelperText>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <Select
                        value={state.age}
                        onChange={handleChange('age')}
                        name="age"
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'age' }}
                        display='sticky'
                    >
                        <option value="">None</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                    <FormHelperText>Label 2</FormHelperText>
                </FormControl>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="MM/dd/yyyy"
                        style={useStyles.KeyboardDatePicker}
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Container>


            <Container className={classes.container}>
                <List className={classes.list}>
                    {data.map(({ id, title, stars, description, name, image }) => (
                            <ListItem key = {id}>
                                <Card id={id}
                                    title={title}
                                    stars={stars}
                                    description={description}
                                    name={name}
                                    image={image}
                                    handleDelete={handleDelete} />
                            </ListItem>
                    ))}
                </List>
            </Container>
        </div>
    );
}