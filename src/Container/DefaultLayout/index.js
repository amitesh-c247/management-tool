import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";

const data = JSON.parse(localStorage.getItem("data"));
const  DefaultLayout =props=>(
      <div>
          <Header token={data && data.token ? data.token : null} {...props.children.props} />
          <>
          {props.children}
          </>
          <Footer />
      </div>
)


export default DefaultLayout;