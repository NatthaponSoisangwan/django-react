import {createMuiTheme, Typography} from '@material-ui/core';
import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./MediaCard";
import axios from "axios";
import useForceUpdate from 'use-force-update';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MENU } from "./PrepopulatedData";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers/';
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import {deepOrange, pink} from "@material-ui/core/colors";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

theme = createMuiTheme({
        palette: {
            primary: pink,                                     // Customize primary color here
            secondary: deepOrange,                             // Customize secondary color here
            custom_color_1: '#fff7e3',
            custom_color_2: '#ffe69c',
            custom_color_3: '#ffd455',
            custom_color_4: '#ffc518',
            custom_color_5: '#ff9700',
        }
    }
    );

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



export default function TopReviews() {
    const classes = useStyles();
    const [data, setData] = useState([])
    // const forceUpdate = useForceUpdate();
    let [count, setCount] = useState(0);

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };


    // Filter bar stuff
    const [state, setState] = useState({
        foodName: '',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    const handleChange = evt => {
        const value =
        evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      setItem({
        ...item,
        [evt.target.name]: value
      });
        setItem(evt.target.value)
        console.log("handleChange")
        console.log(item)
        console.log(data)
    };


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

    const [item, setItem] = React.useState({title: "Pepperonni Pizza"});

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
