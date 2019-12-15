import React, { Component } from 'react';
import axios from "axios";
import { AvField } from 'availity-reactstrap-validation';


export default class MenuName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            meal_time: "Breakfast"
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
            .then(result => this.setState({ menuList: result.data }))
            .catch(error => {
                console.log(error)
            });
    }

render() {
    const { label, name, value, onChange, errorMessage } = this.props
    return (
        <AvField type="select"
            label={label}
            required
            name={name}
            value={value}
            onChange={onChange}
            errorMessage={errorMessage}
        >
            {this.state.menuList.map((menu) => {
                return <option key={menu.id} value={menu.menu_name}>{menu.menu_name}</option>;
            })}
        </AvField>
    )
}
}
