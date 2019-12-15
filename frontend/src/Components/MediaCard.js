import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        width: 500,
    },
    media: {
        height: 140
    }

});

export default function MediaCard(props) {
    const classes = useStyles();
    const { menu_name, rating, description, created_date, image } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image} // TODO : Still need to fix the api link in the backend. There is no returned image.
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3">
                        {menu_name}
                    </Typography>
                        <Rating readOnly value={rating} align="center" />
                    <Typography variant="body2" color="textSecondary">
                        {new Date(created_date).getUTCMonth() + " / " +
                            new Date(created_date).getUTCDate() + " / " +
                            new Date(created_date).getUTCFullYear()}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

