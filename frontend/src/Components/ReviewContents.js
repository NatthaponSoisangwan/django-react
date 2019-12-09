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
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const menu = [
    {
      "item": "Roasted Pumpkin and Apple",
      "time": "lunch"
    },
    {
      "item": "Turkey Vegetable Soup",
      "time": "lunch"
    },
    {
      "item": "Black Bean Chili",
      "time": "lunch"
    },
    {
      "item": "Turkey Vegetable Soup",
      "time": "lunch"
    },
    {
      "item": "Turkey Vegetable Soup",
      "time": "lunch"
    },
    {
      "item": "Pepperoni Pizza",
      "time": "lunch"
    },
    {
      "item": "Five Cheese Pizza",
      "time": "lunch"
    },
    {
      "item": "Spinach and Sun Dried Tomatoes with Garlic Cream Sauce",
      "time": "lunch"
    },
    {
      "item": "Build Your Own Pasta Bar",
      "time": "lunch"
    },
    {
      "item": "Pepper Steak Stir Fry",
      "time": "lunch"
    },
    {
      "item": "Spicy Seitan and Vegetable Stir Fry",
      "time": "lunch"
    },
    {
      "item": "Steamed Brown Basmati Rice",
      "time": "lunch"
    },
    {
      "item": "Beyond Sausage Link",
      "time": "lunch"
    },
    {
      "item": "Spicy Green Chili Lime Chicken",
      "time": "lunch"
    },
    {
      "item": "Chicken and Potato Masala Curry",
      "time": "lunch"
    },
    {
      "item": "Vegetable Chickpea and Potato Curry",
      "time": "lunch"
    },
    {
      "item": "Steamed Basmati Rice",
      "time": "lunch"
    },
    {
      "item": "Brown Rice",
      "time": "lunch"
    },
    {
      "item": "Grilled Naan Bread",
      "time": "lunch"
    },
    {
      "item": "Wild Rice Salad",
      "time": "lunch"
    },
    {
      "item": "Quinoa Salad",
      "time": "lunch"
    },
    {
      "item": "Rosemary Orange Lime Spa Water",
      "time": "lunch"
    },
    {
      "item": "Blueberry Hibiscus Tea",
      "time": "lunch"
    },
    {
      "item": "Assorted Cookies",
      "time": "lunch"
    },
    {
      "item": "Assorted Bars",
      "time": "lunch"
    },
    {
      "item": "Cheese Pizza",
      "time": "lunch"
    },
    {
      "item": "Pepperoni Pizza",
      "time": "lunch"
    },
    {
      "item": "Parmesan Cheese",
      "time": "lunch"
    },
    {
      "item": "Herb Chicken Breast",
      "time": "lunch"
    },
    {
      "item": "Hamburger",
      "time": "lunch"
    },
    {
      "item": "Black Bean Patty",
      "time": "lunch"
    },
    {
      "item": "Steamed Vegetable",
      "time": "lunch"
    },
    {
      "item": "French Fries",
      "time": "lunch"
    },
    {
      "item": "Grilled Vegetable Sandwich",
      "time": "lunch"
    },
    {
      "item": "Grilled Cheese",
      "time": "lunch"
    },
    {
      "item": "Grilled Cheese",
      "time": "lunch"
    },
    {
      "item": "Hamburger",
      "time": "lunch"
    },
    {
      "item": "Turkey Burger",
      "time": "lunch"
    },
    {
      "item": "Cheeseburger",
      "time": "lunch"
    },
    {
      "item": "Bacon Cheeseburger",
      "time": "lunch"
    },
    {
      "item": "Chicken Tender Melt",
      "time": "lunch"
    },
    {
      "item": "Grilled Ham and Cheese Sandwich",
      "time": "lunch"
    },
    {
      "item": "Chicken Guacamole Melt",
      "time": "lunch"
    },
    {
      "item": "Chicken Quesadilla",
      "time": "lunch"
    },
    {
      "item": "Black Bean Burger",
      "time": "lunch"
    },
    {
      "item": "Hummus",
      "time": "lunch"
    },
    {
      "item": "Chicken Tenders Fried",
      "time": "lunch"
    },
    {
      "item": "French Fries",
      "time": "lunch"
    },
    {
      "item": "Onion Rings",
      "time": "lunch"
    },
    {
      "item": "Garden Salad with Cheddar Cheese",
      "time": "lunch"
    },
    {
      "item": "Caesar Salad",
      "time": "lunch"
    },
    {
      "item": "Chicken Caesar Salad",
      "time": "lunch"
    },
    {
      "item": "Blt Salad",
      "time": "lunch"
    },
    {
      "item": "Greek Salad with Feta Cheese",
      "time": "lunch"
    },
    {
      "item": "Chicken Breast Marinated",
      "time": "lunch"
    },
    {
      "item": "Edamame",
      "time": "lunch"
    },
    {
      "item": "Bruschetta with Tomato and Basil",
      "time": "lunch"
    },
    {
      "item": "French Fries and Ketchup",
      "time": "lunch"
    },
    {
      "item": "Caprese Flatbread",
      "time": "lunch"
    },
    {
      "item": "Meatlovers Flatbread",
      "time": "lunch"
    },
    {
      "item": "Buffalo Flatbread",
      "time": "lunch"
    },
    {
      "item": "Smoked Turkey Panini",
      "time": "lunch"
    },
    {
      "item": "Mozzarella Melt Panini",
      "time": "lunch"
    },
    {
      "item": "Italian Melt Panini",
      "time": "lunch"
    },
    {
      "item": "Caesar Salad",
      "time": "lunch"
    },
    {
      "item": "Chicken Caesar Salad",
      "time": "lunch"
    },
    {
      "item": "Buffalo Chicken Salad",
      "time": "lunch"
    },
    {
      "item": "Hummus",
      "time": "lunch"
    },
    {
      "item": "Cottage Cheese 1%",
      "time": "lunch"
    },
    {
      "item": "Yogurt Plain Low Fat",
      "time": "lunch"
    },
    {
      "item": "Yogurt Plain Full Fat Greek",
      "time": "lunch"
    },
    {
      "item": "Cheddar Cheese",
      "time": "lunch"
    },
    {
      "item": "Pepper Jack Cheese",
      "time": "lunch"
    },
    {
      "item": "Provolone Cheese",
      "time": "lunch"
    },
    {
      "item": "Swiss Cheese",
      "time": "lunch"
    },
    {
      "item": "Pickled Jalapeño (purchased)",
      "time": "lunch"
    },
    {
      "item": "Coca-Cola",
      "time": "lunch"
    },
    {
      "item": "Cherry Coca-Cola",
      "time": "lunch"
    },
    {
      "item": "Dr. Pepper",
      "time": "lunch"
    },
    {
      "item": "Mountain Dew",
      "time": "lunch"
    },
    {
      "item": "Fanta Orange",
      "time": "lunch"
    },
    {
      "item": "Pepsi",
      "time": "lunch"
    },
    {
      "item": "Wild Cherry Pepsi",
      "time": "lunch"
    },
    {
      "item": "Barq's Root Beer",
      "time": "lunch"
    },
    {
      "item": "Sierra Mist",
      "time": "lunch"
    },
    {
      "item": "Sprite",
      "time": "lunch"
    },
    {
      "item": "Gatorade Fruit Punch",
      "time": "lunch"
    },
    {
      "item": "Diet Coke",
      "time": "lunch"
    },
    {
      "item": "Diet Mountain Dew",
      "time": "lunch"
    },
    {
      "item": "Diet Pepsi",
      "time": "lunch"
    },
    {
      "item": "Sprite Zero",
      "time": "lunch"
    },
    {
      "item": "Iced Tea Unsweetened",
      "time": "lunch"
    },
    {
      "item": "Black Coffee",
      "time": "lunch"
    },
    {
      "item": "Hot Cocoa",
      "time": "lunch"
    },
    {
      "item": "Unsweetened Agua Fresca",
      "time": "lunch"
    },
    {
      "item": "Orange Juice",
      "time": "lunch"
    },
    {
      "item": "Apple Juice",
      "time": "lunch"
    },
    {
      "item": "Fruit Punch",
      "time": "lunch"
    },
    {
      "item": "Lemonade",
      "time": "lunch"
    },
    {
      "item": "Soy Milk Vanilla",
      "time": "lunch"
    },
    {
      "item": "Skim Milk",
      "time": "lunch"
    },
    {
      "item": "2% Milk",
      "time": "lunch"
    },
    {
      "item": "1% Chocolate Milk",
      "time": "lunch"
    },
    {
      "item": "Chocolate Soy Milk",
      "time": "lunch"
    },
    {
      "item": "Yellow Mustard",
      "time": "lunch"
    },
    {
      "item": "Lettuce",
      "time": "lunch"
    },
    {
      "item": "Tomato",
      "time": "lunch"
    },
    {
      "item": "Onion",
      "time": "lunch"
    },
    {
      "item": "Mayonnaise",
      "time": "lunch"
    },
    {
      "item": "Ketchup",
      "time": "lunch"
    },
    {
      "item": "Pickle",
      "time": "lunch"
    },
    {
      "item": "American Cheese",
      "time": "lunch"
    },
    {
      "item": "Cheddar Cheese",
      "time": "lunch"
    },
    {
      "item": "Pepper Jack Cheese",
      "time": "lunch"
    },
    {
      "item": "Provolone Cheese",
      "time": "lunch"
    },
    {
      "item": "Whole Grain Hamburger Bun",
      "time": "lunch"
    },
    {
      "item": "White Hamburger Bun",
      "time": "lunch"
    },
    {
      "item": "Whole  Wheat Pita",
      "time": "lunch"
    },
    {
      "item": "Nine-grain Bread",
      "time": "lunch"
    },
    {
      "item": "Whole Wheat Bread",
      "time": "lunch"
    },
    {
      "item": "White Hamburger Bun",
      "time": "lunch"
    },
    {
      "item": "American Cheese",
      "time": "lunch"
    },
    {
      "item": "Cheddar Cheese",
      "time": "lunch"
    },
    {
      "item": "Pepper Jack Cheese",
      "time": "lunch"
    },
    {
      "item": "Provolone Cheese",
      "time": "lunch"
    },
    {
      "item": "Swiss Cheese",
      "time": "lunch"
    },
    {
      "item": "Balsamic Vinaigrette",
      "time": "lunch"
    },
    {
      "item": "Caesar Anchovy Dressing",
      "time": "lunch"
    },
    {
      "item": "Honey Mustard Dressing",
      "time": "lunch"
    },
    {
      "item": "Ranch Dressing",
      "time": "lunch"
    },
    {
      "item": "Fruit Cup",
      "time": "lunch"
    },
    {
      "item": "Apple",
      "time": "lunch"
    },
    {
      "item": "Banana",
      "time": "lunch"
    },
    {
      "item": "Oranges",
      "time": "lunch"
    },
    {
      "item": "Iceberg Lettuce",
      "time": "lunch"
    },
    {
      "item": "Leaf Lettuce",
      "time": "lunch"
    },
    {
      "item": "Mesclun",
      "time": "lunch"
    },
    {
      "item": "Romaine",
      "time": "lunch"
    },
    {
      "item": "Spinach",
      "time": "lunch"
    },
    {
      "item": "Broccoli",
      "time": "lunch"
    },
    {
      "item": "Carrots",
      "time": "lunch"
    },
    {
      "item": "Cauliflower",
      "time": "lunch"
    },
    {
      "item": "Cucumbers",
      "time": "lunch"
    },
    {
      "item": "Blanched Green Beans",
      "time": "lunch"
    },
    {
      "item": "Mushrooms",
      "time": "lunch"
    },
    {
      "item": "Bell Peppers",
      "time": "lunch"
    },
    {
      "item": "Radishes",
      "time": "lunch"
    },
    {
      "item": "Tomatoes",
      "time": "lunch"
    },
    {
      "item": "Balsamic Vinaigrette",
      "time": "lunch"
    },
    {
      "item": "French Dressing",
      "time": "lunch"
    },
    {
      "item": "Italian Dressing",
      "time": "lunch"
    },
    {
      "item": "Caesar Anchovy Dressing",
      "time": "lunch"
    },
    {
      "item": "Ranch Buttermilk Dressing",
      "time": "lunch"
    },
    {
      "item": "Roasted Garlic Mayonnaise",
      "time": "lunch"
    },
    {
      "item": "Chipotle Mayo",
      "time": "lunch"
    },
    {
      "item": "Parmesan Pesto Mayonnaise",
      "time": "lunch"
    },
    {
      "item": "Sriracha Mayo",
      "time": "lunch"
    },
    {
      "item": "Raisins",
      "time": "lunch"
    },
    {
      "item": "Dried Cranberries",
      "time": "lunch"
    },
    {
      "item": "Sunflower Seeds",
      "time": "lunch"
    },
    {
      "item": "Croutons",
      "time": "lunch"
    },
    {
      "item": "Saltine Crackers",
      "time": "lunch"
    },
    {
      "item": "Hummus",
      "time": "lunch"
    },
    {
      "item": "Quinoa",
      "time": "lunch"
    },
    {
      "item": "Apple",
      "time": "lunch"
    },
    {
      "item": "Banana",
      "time": "lunch"
    },
    {
      "item": "Cantaloupe",
      "time": "lunch"
    },
    {
      "item": "Grapes",
      "time": "lunch"
    },
    {
      "item": "Honeydew",
      "time": "lunch"
    },
    {
      "item": "Orange",
      "time": "lunch"
    },
    {
      "item": "Pineapple",
      "time": "lunch"
    },
    {
      "item": "Strawberries",
      "time": "lunch"
    },
    {
      "item": "Watermelon",
      "time": "lunch"
    },
    {
      "item": "Turkey Breast",
      "time": "lunch"
    },
    {
      "item": "Salami",
      "time": "lunch"
    },
    {
      "item": "Smoked Ham",
      "time": "lunch"
    },
    {
      "item": "Smoked Turkey",
      "time": "lunch"
    },
    {
      "item": "Nine-grain Bread",
      "time": "lunch"
    },
    {
      "item": "Wheat Bread",
      "time": "lunch"
    },
    {
      "item": "Sourdough Bread",
      "time": "lunch"
    },
    {
      "item": "White Bread",
      "time": "lunch"
    }
  ]

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
    }, 1000);


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

    const [item, setItem] = React.useState(null);


    return (
        <div>
            <Container >
                <Autocomplete
                    id="combo-box-demo"
                    value={item}
                    options={menu}
                    getOptionLabel={option => option.item}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="" variant="outlined" fullWidth />
                    )}
                />
            </Container>


            <Container className={classes.container}>
                <List className={classes.list}>
                    {data.reverse().map(({ id, title, stars, description, name, image }) => (
                        <ListItem key={id}>
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