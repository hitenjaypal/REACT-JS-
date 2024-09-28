function AddTodo() {
  return (
    <div class="container text-center">     
    {/* Above is a class that made a content in center  */}
      <div class="row kg-row">
{/* Enter Todo */}
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
{/* Date month year */}
        <div class="col-4">
          <input type="date" />
        </div>
{/* Add Button */}
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>


        </div>
      </div>
    </div>
  );
}

export default AddTodo;