import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import React from "react";
import Rating from "@material-ui/lab/Rating";
// import Modal from "./components/Modal";

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
    const { title, stars, description, image, name } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image} 
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Rating readOnly value= {parseInt(stars)} />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

