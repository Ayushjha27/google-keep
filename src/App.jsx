import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

const App = () => {
  const [arr, upArr] = useState([]);

  const thisFun = (val) => {
    upArr((obj) => {
      return ([
        ...obj, val,
      ])
    })

  }

  const dleteit = (id) => {
    upArr((obj1) => {
      return (obj1.filter((v, i) => {
        return i !== id;
      }))
    })
  }

  return (
    <>
      <div className="bg-info maindiv">
        <Header />
        <CreateNote passNote={thisFun} />
        {
          arr.map((valo, index) => {
            return (
              <Notes delBtn={dleteit} id={index} key={index} va={valo.title}
                con={valo.content} />
            )
          })}
        <Footer />
      </div>
    </>
  )
}
export default App;

