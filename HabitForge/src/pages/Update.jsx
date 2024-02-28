import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !date) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { error } = await supabase
      .from("habits")
      .update({ title, description, date })
      .eq("id", id);

    if (error) {
      console.log(error);
      setFormError("Could not update habit");
    } else {
      setFormError(null);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchHabit = async () => {
      const { data, error } = await supabase
        .from("habits")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      } else {
        setTitle(data.title);
        setDescription(data.description);
        setDate(data.date);
      }
    };

    fetchHabit();
  }, [id, navigate]);

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button>Update Habit</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Update;
