import React, { useEffect, useState } from 'react';
import './assets/style.css';
import { getPosts } from './components/ApiCall';
import FormHook from './components/FormHook';
import Form from './components/index';
import PaginationComponent from './components/PaginationComponent';

function App() {
  const [postsdata, setpostsdata] = useState(undefined)
  const init = () => {
    getPosts().then(data => {
      if(data.error) {
        console.log(data.error)
      }
      else {
        setpostsdata(data)
      }
    })
  }
  useEffect(()=> {
    init()
  })
  // load categories and  set form data
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{textAlign:"center"}}>Form Validation</h2>
        <Form/>
        {/* <MomentDate/> */}
        {/* <Typescript name="joyonto kumar roy"/> */}
        <div className="getdata">
          <form action="">
            <select name="" id="">
              <option value="">select Posts Title</option>
              {postsdata && postsdata.map((single,index)=>(
                <option key={index} value={single.id}>{single.title}</option>
              ))}
              <option value=""></option>
            </select>
          </form>
        </div>
        <FormHook/>
        <PaginationComponent/>
      </header>
    </div>
  );
}

export default App;
