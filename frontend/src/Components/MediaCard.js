import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
    const { id, title, stars, description, image, name } = props;


    const handleDelete = () => {
        props.handleDelete(id);
    }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image} // TODO : Still need to fix the api link in the backend. There is no returned image. 
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Rating readOnly value={stars} />
                    <Typography variant="body2" color="textSecondary" component="p">
                        Description: {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={handleDelete}>
                    Delete
                </Button>
                <Button size="small" color="primary">
                    Placeholder
                </Button>
            </CardActions>
        </Card>
    );
}

