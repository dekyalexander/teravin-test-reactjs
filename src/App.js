import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import ListData from "./Components/ListData";
import "./App.css";
import FormSubmission from "./Components/FormSubmission";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [todos, setTodos] = useState([{ nama: "", completed: false }]);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Local")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("Local", JSON.stringify(todos));
  }, [todos]);
  //populating localStorage to ui

  const completedTasks = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed === false
      ? (newTodos[index].completed = true)
      : (newTodos[index].completed = false);

    setTodos(newTodos);
  };

  const addTask = (newTask) => {
    // console.log(newTask);
    setTodos([{ nama: newTask, completed: false }, ...todos]);
  };
  const deleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodoItems = (index) => {
    const newTodoItems = [...todos];
    const item = newTodoItems[index];
    let updatedVal = prompt("Enter updated value", item.id);
    let completeObj = { id: updatedVal, completed: false };
    newTodoItems.splice(index, 1, completeObj);
    if (updatedVal === "" || updatedVal === null) return;
    else item.id = updatedVal;
    setTodos(newTodoItems);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container fixed>
      <div className="app">
        <h2> Teravin Test React Js </h2>
        <br></br>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Button variant="contained" size="small" onClick={handleOpen}>
              Add Data
            </Button>
          </Grid>
        </Grid>
        <br></br>
        <FormSubmission
          addTask={addTask}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        {/* {todos.map((todo, index) => (
          <ListData
            key={index}
            index={index}
            todo={todo}
            deleteItem={deleteItem}
            completedTasks={completedTasks}
            updateTodoItems={updateTodoItems}
          />
        ))} */}
        {/* {todos.map((todo) => (
          <ListData key={uuidv4()} todo={todo} deleteItem={deleteItem} />
        ))} */}
      </div>
      <br></br>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID No.</TableCell>
              <TableCell align="right">Nama</TableCell>
              <TableCell align="right">Alamat</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((row) => (
              <TableRow
                key={row.nama}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nama}
                </TableCell>
                <TableCell align="right">{row.nama}</TableCell>
                <TableCell align="right">{row.nama}</TableCell>
                <TableCell align="right">
                  {row.nama !== "" ? (
                    <div className="btns">
                      <button onClick={() => deleteItem()}>View</button>
                    </div>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
export default App;
