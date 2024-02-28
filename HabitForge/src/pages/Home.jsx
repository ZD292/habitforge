import React from "react";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

import HabitCard from "../components/HabitCard";
const Home = () => {
  // console.log(import.meta.env.REACT_APP_SUPABASE_URL);
  // console.log(import.meta.env.REACT_APP_ANON_KEY);
  // console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [habit, setHabit] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");

  // fetch all data from the habits table
  useEffect(() => {
    const fetchHabit = async () => {
      const { data, error } = await supabase
        .from("habits")
        .select()
        .order(orderBy, { ascending: false });

      if (error) {
        setFetchError("could not fetch");
        setHabit(null);
        console.log("error", error);
      } else {
        setHabit(data);
        setFetchError(null);
      }
    };

    fetchHabit();
  }, [orderBy]);

  return (
    <div className="page home">
      {fetchError && <p>{fetchError}</p>}
      <div className="order-by flex justify-between w-1/ w-1/2">
        <p>Sort:</p>
        <button onClick={() => setOrderBy("created_at")}>Time Created</button>
        <button onClick={() => setOrderBy("title")}>Title</button>
        <button onClick={() => setOrderBy("date")}>Date</button>
      </div>

      <div className="habit-grid">
        {habit &&
          habit.map((habit) => (
            <HabitCard
              key={habit.id}
              id={habit.id}
              title={habit.title}
              description={habit.description}
              date={habit.date}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
