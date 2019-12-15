import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        marginBottom: theme.spacing(1)
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 3,
        fontColor: 'primary'
    },
    pos: {
        marginBottom: 12,
        fontSize: 10,
    }
}));

export default function MenuCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { menu_name, meal_vegan, meal_vegetarian, meal_gluten_free } = props.menu
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {menu_name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {meal_vegan === "1" ? "vegan" : ''}{meal_vegetarian === "1" ? "vegetarian" : ''}{meal_gluten_free === "1" ? "gluten free" : ''}
                </Typography>
            </CardContent>
        </Card>
    );
}
