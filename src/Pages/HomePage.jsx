import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
              <div className="w-1/2 space-y-6">
              <h1 className="text-5xl font-semibold">
                 Find out best
                 <span className="text-yellow-500 font-bold">
                    Online Courses
                 </span>
               </h1>
                <p className="text-xl text-gray-200">
                 We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                </p>

              <div className="space-x-6">
                <Link to="/courses" >
                   <button className="bg-yellow-500 px-5 py-3">
                      Explore courses
                   </button>
                </Link>
              </div>
              </div>
            </div>
        </HomeLayout>
    )
}

export default HomePage;