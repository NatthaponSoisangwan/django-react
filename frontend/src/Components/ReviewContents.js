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
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


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
    // const forceUpdate = useForceUpdate();
    let [count, setCount] = useState(0);

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    const handleChange = (evt, options) => {
        evt.persist();
        const lastAddedItem = options[options.length - 1];
        const checked = evt.target.checked
        // console.log(evt)
        console.log("debugging...")
        console.log(options)

        // const foodName = lastAddedItem.item
        let temp = {}

        setMenuState(

            menuState.map(menuitem => {
                temp = options.filter(option => (option.item === menuitem.item))

                if (temp.length == 1) {
                    // if (temp.item === menuitem.item) {
                    // console.log("setting to true")
                    // console.log(menuitem)
                    menuitem.select = true
                    // }
                }
                else {
                    // console.log("setting to false")
                    // console.log(menuitem)
                    menuitem.select = false
                }
                return menuitem;
            })
        )


        console.log(menuState)
    };


    useInterval(() => {
        axios
            .get("/api/reviews/")
            .then(result => {
                console.log(result.data)
                setData(result.data)
                setFilteredData(filterData(result.data.reverse()))
                }
            );
            
        // setFilteredData()
        setCount(count + 1);
        console.log(filteredData)
    }, 1000);


    useEffect(() => {
        const loadData = async () => {
            axios
                .get("/api/reviews/")
                .then(result => {
                    console.log(result.data)
                    setData(result.data)
                    setFilteredData(filterData(result.data.reverse()))     
                    }              
                );
        };
        loadData()
        
    }, []);

    const [menuState, setMenuState] = useState([])

    useEffect(() => {
        let menuState = { MENU }

        setMenuState(
            MENU.map(d => {
                return {
                    select: false,
                    item: d.item,
                    time: d.time
                }
            })
        )
        console.log(menuState)
    }, []);


    const [filteredData, setFilteredData] = React.useState([]);

    const filterData = () => {
        console.log(data)
        let fdata = data.filter(menuitem => {
            console.log("debugging...")
            console.log(menuitem)
            console.log(menuState)
            const result = menuState.find(obj => {
                console.log(menuitem.title)
                console.log(obj.item)
                return obj.item == menuitem.title
            })
            console.log(result)
            console.log("end debug")
            // const value = result[0]
            // console.log(result[0])
            if (result.select == true) {
                console.log(true)
                return true
            }
    
    
            // if (result["0"].select === true) {
            //     console.log(true)
            //     return true
            // }
            else {
                console.log(false)
                return false
            }
    
            // if (menuState.find(menuitem.item).select) {
            //     return true
            // }
            // else {
            //     return false
            // }
    
            // let index = menuState.find( ({temp}) => temp === menuitem.item )
            // if (index.select === true) {
            //     return true
            // }
            // else {
            //     return false
            // }
            console.log("debugging...")
            console.log(menuitem)
            // console.log(index)
            // let obj = menuState.find(menuitem.item)
            // if obj
            // return menuState.item.includes(menuitem.item)
            // return menuitem.title === item.title
        });
        return fdata
    }

    // const filteredData = data.filter(menuitem => {
    //     console.log("debugging...")
    //     console.log(menuitem)
    //     result = menuState.find(obj => obj.item === menuitem.title)
    //     console.log(result)
    //     console.log("end debug")
    //     // const value = result[0]
    //     // console.log(result[0])
    //     if (result.select == true) {
    //         console.log(true)
    //         return true
    //     }


    //     // if (result["0"].select === true) {
    //     //     console.log(true)
    //     //     return true
    //     // }
    //     else {
    //         console.log(false)
    //         return false
    //     }

    //     // if (menuState.find(menuitem.item).select) {
    //     //     return true
    //     // }
    //     // else {
    //     //     return false
    //     // }

    //     // let index = menuState.find( ({temp}) => temp === menuitem.item )
    //     // if (index.select === true) {
    //     //     return true
    //     // }
    //     // else {
    //     //     return false
    //     // }
    //     console.log("debugging...")
    //     console.log(menuitem)
    //     // console.log(index)
    //     // let obj = menuState.find(menuitem.item)
    //     // if obj
    //     // return menuState.item.includes(menuitem.item)
    //     // return menuitem.title === item.title
    // });

    return (
        <div>
            <Container>
                {/* <Autocomplete
                    id="combo-box-demo"
                    value={item}
                    options={MENU}
                    getOptionLabel={option => option.item}
                    style={{ width: 300 }}
                    onChange={handleChange}
                    renderInput={params => (
                        <TextField {...params} label="" variant="outlined" fullWidth />
                    )}
                /> */}
                {/* <Autocomplete
                    id="combo-box-demo"
                    value={item}
                    options={MENU}
                    // options={MENU.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                    // groupBy={option => option.firstLetter}
                    getOptionLabel={option => option.item}
                    style={{ width: 300 }}
                    onChange={e => setItem(e.target.value)}
                    renderInput={params => (
                        <TextField {...params} label="" variant="outlined" fullWidth />
                    )}
                /> */}
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={MENU}
                    disableCloseOnSelect
                    getOptionLabel={option => option.item}
                    renderOption={(option, { selected }) => (
                        <React.Fragment>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.item}
                        </React.Fragment>
                    )}
                    name="hooks"
                    style={{ width: 345 }}
                    onChange={(e, options) => {
                        handleChange(e, options);
                    }}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="outlined"
                            // label="Menu"
                            placeholder="Item"
                            // size="medium"
                            fullWidth
                        />
                    )}
                />
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