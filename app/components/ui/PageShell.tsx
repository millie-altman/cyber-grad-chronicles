type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageShell({ children, className = "" }: PageShellProps) {
  return <div className={`page-shell ${className}`}>{children}</div>;
}