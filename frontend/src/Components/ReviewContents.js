import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "./MediaCard";
import axios from "axios";
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MENU } from "./PrepopulatedData";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const useStyles = makeStyles(theme => ({
    formControl: {
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
    let [count, setCount] = useState(0);

    const handleChange = (evt, options) => {
        evt.persist();
        let temp = {}

        setMenuState(
            menuState.map(menuitem => {
                temp = options.filter(option => (option.item === menuitem.item))

                if (temp.length === 1) {
                    menuitem.select = true
                }
                else {
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
                setData(result.data.reverse())
                setFilteredData(filterData(result.data.reverse()))
                }
            );
            
        setCount(count + 1);
    }, 1000);


    useEffect(() => {
        const loadData = async () => {
            axios
                .get("/api/reviews/")
                .then(result => {
                    setData(result.data.reverse())
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
    }, []);


    const [filteredData, setFilteredData] = React.useState([]);

    const filterData = () => {
        let fdata = data.filter(menuitem => {
            const result = menuState.find(obj => {
                console.log(menuitem.title)
                console.log(obj.item)
                return obj.item === menuitem.title
            })

            if (result.select === true) {
                return true
            }
    
            else {
                return false
            }
        });
        return fdata
    }

    let toRender = {}
    let show = menuState.find(item => item.select === true)
    console.log(show)
    if (show === undefined) {
        show = true
    }
    else {
        show = false
    }
    console.log(show)
    if (filteredData.length === 0 && show) {
        toRender = data;
    }
    else {
        toRender = filteredData;
    }



    return (
        <div>
            <Container>
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
                            placeholder="Item"
                            fullWidth
                        />
                    )}
                />
            </Container>



            <Container className={classes.container}>
                <List className={classes.list}>
                    {toRender.map(({ id, title, stars, description, name, image }) => (
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