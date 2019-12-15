import React, { Component, Fragment } from 'react';
import MenuCard from './Summary_card'
import axios from 'axios'
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";

export default class SummaryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
        };
    }

    componentWillMount() {
        const date = new Date().getHours();
        let newUrl = "api/menus/?meal_time="
        console.log(date)
        if (date >= 14) {
            console.log(1)
            newUrl = newUrl + "Dinner";
            console.log(newUrl)
        }
        else if (date >= 10) {
            console.log(2)
            newUrl = newUrl + "Lunch";
            console.log(newUrl)
        } else {
            console.log(3)
            newUrl = newUrl + "Breakfast";
            console.log(newUrl)
        }
        axios
            .get(newUrl)
            .then(result =>
                this.setState({ menuList: result.data }))
            .catch(error => {
                console.log(error)
            });
    }
    classes = makeStyles(theme => ({
        list: {
            // marginBottom: theme.spacing(0)
            color: 'primary'
        },
        container: {
            // width: '100%',
            // // paddingTop: "46px",
            // paddingBottom: "56px"
        },
    }));

    render() {

        return (
            <Container className={this.classes.container}>
                <List className={this.classes.list}>
                    {
                        this.state.menuList.map((menu) => (
                            <ListItem key={menu.id}>
                                <MenuCard menu={menu} />
                            </ListItem>)
                        )
                    }
                </List>
            </Container >
        )
    }
}
