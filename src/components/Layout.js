// Importing React
import React from "react";
// Importing Header
import Header from "./Header";
// Importing Footer
import Footer from "./Footer";

// Layout component will wrap all pages
function Layout({children}) {
    return (
        <div>
            { /* Header Stays at the top */}
            <Header />

            { /* This will render page content */}
            <main style={{ padding: "20px" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
}

// Exporting component for it's use in other files
export default Layout;