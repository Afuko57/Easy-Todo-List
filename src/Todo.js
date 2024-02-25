import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} md={6}>
        <div>
          <Typography variant="h4" gutterBottom>
            Easy Todo List
          </Typography>
          <TextField
            label="Add Task"
            variant="outlined"
            value={input}
            onChange={handleInputChange}
            sx={{ mx: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleAddTask}
            sx={{
              height: "100%",
              ml: 1, 
            }}
          >
            Add
          </Button>
          <List>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                <ListItemText primary={task} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteTask(index)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </Grid>
  );
}

export default TodoList;
