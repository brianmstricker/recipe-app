import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
 return (
  <>
   <Navbar />
   <main className="px-[16px] [@media(min-width:600px)]:px-[24px] pt-4 relative">
    <Outlet />
   </main>
  </>
 );
};
export default MainLayout;
