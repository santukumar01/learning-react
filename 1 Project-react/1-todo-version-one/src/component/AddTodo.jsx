function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter your Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button new-btn" class="btn btn-success new-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
