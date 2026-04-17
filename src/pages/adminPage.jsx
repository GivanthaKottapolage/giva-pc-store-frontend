import { LuBoxes, LuClipboardList, LuUsers } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { Link, Route, Routes } from "react-router-dom";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductPage from "./admin/adminAddProduct";

export default function AdminPage() {
    return (
        <div className="w-full h-full flex bg-accent">
            <div className="w-[300px] h-full bg-accent">
                <div className=" w-full h-[100px] flex items-center text-primary">
                    <img src="/logo.png" className="h-full" />
                    <h1 className="text-2xl">Admin</h1>

                </div>
                <div className="w-full h-[400px] text-2xl text-white flex flex-col pl-[20px] pt-[20px]">


                    <Link to="/admin" className="w-full flex items-center h-[50px] gap-[10px]"> <LuClipboardList />Orders</Link>
                    <Link to="/admin/products" className="w-full flex items-center h-[50px] gap-[10px]"> <LuBoxes />Products</Link>
                    <Link to="/admin/users" className="w-full flex items-center h-[50px] gap-[10px]"> <LuUsers />Users</Link>
                    <Link to="/admin/reviews" className="w-full flex items-center h-[50px] gap-[10px]"> <MdOutlineRateReview /> Reviews</Link>


                </div>

            </div>
            <div className="w-[calc(100%-300px)] max-h-full border-[10px] rounded-3xl overflow-y-scroll border-accent bg-primary">

                <Routes path="/">
                    <Route path="/" element={<h1>Orders</h1>} />
                    <Route path="/products" element={<AdminProductsPage />} />
                    <Route path="/add-product" element={<AdminAddProductPage />} />
                    <Route path="/users" element={<h1>Users</h1>} />
                    <Route path="/reviews" element={<h1>Reviews</h1>} />

                </Routes>


            </div>


        </div>
    )
}