function Theme() {
  const themes = ["light", "dark", "retro", "cyberpunk", "coffee"];
  const html = document.querySelector("html");
  return (
    <div className="dropdown dropdown-hover dropdown-end fixed top-3 right-3 " >
      <div tabIndex={0} role="button" className="btn m-1">
        Themes
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu z-0 p-2 shadow bg-base-100 rounded-box w-40"
      >
        {themes?.map((theme) => (
          <li 
            key={Math.random()}
            onClick={() => html.setAttribute("data-theme", theme)}
          >
            <a>{theme}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Theme;
