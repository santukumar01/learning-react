import React from "react";

const AddTodo = () => {
  return (
    <div class="row  container text-center">
      <div class="col-6">
        <input type="text" placeholder="Enter you Todo" />
      </div>
      <div class="col-4">
        <input type="date" name="" id="" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
