import { Outlet } from "react-router-dom"; 
import { Suspense } from "react"; 
import Navbar from "./components/Navbar";

export default function Layout() { 
return ( 
<Suspense fallback={<div>Loading...</div>}> 
<Navbar/>
<Outlet /> 
</Suspense> 
); 
} 