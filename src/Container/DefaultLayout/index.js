import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";

const data = localStorage.getItem("token");
const  DefaultLayout =props=>(
      <div>
          <Header token={data ? data : null} {...props.children.props} />
          <>
          {props.children}
          </>
          <Footer />
      </div>
)


export default DefaultLayout;