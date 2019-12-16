import React, { Component } from 'react';
import MenuCard from './Summary_card'
import axios from 'axios'
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

        if (date >= 14) {
            newUrl = newUrl + "Dinner";

        }
        else if (date >= 10) {
            newUrl = newUrl + "Lunch";

        } else {
            newUrl = newUrl + "Breakfast";

        }
        axios
            .get(newUrl)
            .then(result =>
                this.setState({ menuList: result.data }))
            .catch(error => {
                console.log(error)
            });
    }
    render() {

        return (
            <Container>
                <List >
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
