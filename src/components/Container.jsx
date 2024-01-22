function Container({children, className = ""}) {
  return (
    <div className={`w-full p-4 flex justify-center items-start flex-wrap gap-3 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
