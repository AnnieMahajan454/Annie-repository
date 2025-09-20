export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl shadow-xl border backdrop-blur-sm transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>
}
