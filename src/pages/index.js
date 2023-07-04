import React { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import TripCard from "../components/tripCard/TripCard";

const MainPage = ({ trips }) => {
  const [trip, setTrip] = useState(trips);
  return (
  <div>
    <Navbar />
    <div className={styles.cardsWrapper}>
      {trips.map((trip)) => (
        <div key={trip.id}>
          <TripCard

          id={trip.id}
          destination={trip.destination}
          museum={trip. museum}
          reference={trip.reference}
          date= {trip.date}
          duration={trip.duration}
          imageUrl={trip.imageUrl} 
          />
        </div>
      ))};
export default MainPage;


