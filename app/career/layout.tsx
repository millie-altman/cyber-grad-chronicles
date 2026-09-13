import Navbar from "../components/layout/Navbar";
import "./career.css";

export default function CareerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
