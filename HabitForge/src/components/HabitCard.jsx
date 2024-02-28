import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import supabase from "../config/supabaseClient";

const HabitCard = (habit) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("habits")
      .delete()
      .eq("id", habit.id);

    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };

  return (
    <div className="habit-card" signUp>
      <h3>{habit.title}</h3>
      <p>{habit.description}</p>
      <div className="date">{habit.date} </div>
      <div className="buttons">
        <Link to={"/" + habit.id}>
          <div className="text-right">
            <EditIcon className="mr-2"></EditIcon>
            <DeleteIcon onClick={handleDelete}></DeleteIcon>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HabitCard;
