import React from 'react';
import RestaurantForm from "main/components/Restaurants/RestaurantForm"
import { restaurantFixtures } from 'fixtures/restaurantFixtures';

export default {
    title: 'components/Restaurants/RestaurantForm',
    component: RestaurantForm
};

const Template = (args) => {
    return (
        <RestaurantForm {...args} />
    )
};

export const Create = Template.bind({});

Create.args = {
    buttonLabel: "Create",
    submitAction: () => { console.log("Create was clicked"); }
};

export const Edit = Template.bind({});

Edit.args = {
    initialContents: restaurantFixtures.oneRestaurant,
    buttonLabel: "Update",
    submitAction: () => { console.log("Update was clicked");}
};
