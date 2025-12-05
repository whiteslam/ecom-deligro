import React from "react";
import { restaurantsData } from "../../data/restaurants";
import RestaurantMenuClient from "./RestaurantMenuClient";

export async function generateStaticParams() {
  return restaurantsData.map((restaurant) => ({
    id: restaurant.id,
  }));
}

const RestaurantMenuPage = () => {
  return <RestaurantMenuClient />;
};

export default RestaurantMenuPage;
