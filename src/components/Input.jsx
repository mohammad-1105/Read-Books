

function Input({search ,setSearch}) {
  



  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="search here..."
      className="input input-bordered  w-full max-w-xl block my-4"
    />
  );
}

export default Input;
