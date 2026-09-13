import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./academy.css";

export default function AcademyLayout({ children }: LayoutProps<"/academy">) {
  return <><Navbar />{children}<Footer /></>;
}
