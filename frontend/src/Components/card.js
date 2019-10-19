import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import React from "react";
// import Modal from "./components/Modal";
// import axios from "axios";

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
    const { id, title, stars, description, name } = props;
    const handleDelete = () => {
        axios
            .delete('api/reviews/{id}')
        //   .then(res => this.refreshList());
    };
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                // image="/static/images/cards/contemplative-reptile.jpg"
                // title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="stars" color="textSecondary" component="p">
                        {stars}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
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
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

