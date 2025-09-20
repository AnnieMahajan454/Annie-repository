export function Button({ children, onClick, variant = "default", size = "md", className = "" }) {
  const base = "rounded-full px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105";
  const variants = {
    default: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white",
    outline: "border-2 border-purple-400 hover:border-purple-600 text-purple-600 hover:text-purple-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 backdrop-blur-sm",
  };
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
}
