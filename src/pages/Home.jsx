import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

// import Datatable from "../components/Datatable";

function Home() {

    


    return (
        <>
            <div className="w-full h-screen flex">

                <Sidebar />
                <div className="w-full sm:0 lg:ml-60">
                    <Navbar />
                 
                </div>
            </div>
        </>
    );
}

export default Home;

