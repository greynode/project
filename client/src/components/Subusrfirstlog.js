
import "./CompanyForm.scss";
import Card from "./card/Card";
import React, { Component ,useState} from 'react';

import axios from 'axios';
import { NavLink,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Subfirst = () =>{
  

  const [inpval, setInpval] = useState({
     
      email:"",
      pass:"",
    
      npass:""
     
  });


  const setVal = (e) => {
      
      const {name, value } = e.target;

      setInpval(() => {
          return {
              ...inpval,
              [name]: value,
            
          }
      })
  };

  const addCompanydata = async (e) => {
      e.preventDefault();

      const { email,pass,npass,cpass} = inpval;

         // name,user,currency, country, pointofcontact,productservices,id,employee,website,activity,address
         if (email === "") {
          toast.warning("email is required!", {
              position: "top-center"
          });}
          else if (pass === "") {
            toast.warning("password is required!", {
                position: "top-center"
            });
            }else if (npass !== cpass) {
                toast.warning("password not match!", {
                    position: "top-center"
                });
                }else{

        

          const data = await fetch("/subadd", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  
                  email,pass,npass
              })
          });

          const res = await data.json();
          console.log(res)


          if (res.status === 201) {
                
              toast.success(" Created Success 😃!", {
                  position: "top-center"
              });
              setInpval({ ...inpval,  
                
              email:"",
              pass:"", cpass:"",
              npass:""
             });}else {
              toast.error(" invalid details !", {
                position: "top-center"
            });
              }

          
  }}


    return(
        <>
        
        <div className="add-company-name">
        <form>
         <Card cardClass={"card"}>
          
          <h3 align="center">Subuser Login first time</h3>
          
          <label>User  Email:</label>
            <input
              type="text"
              placeholder="enter the user email"
              name="email"
              onChange={setVal}
              value={inpval.email}
              id="email"
            />
             <label> temp password:</label>
            <input
              type="text"
              placeholder="set the password"
              name="pass"
              onChange={setVal}
              value={inpval.pass}
              id="pass"
            />
             <label>new pass:</label>
            <input
              type="text"
              placeholder="npass"
              name="npass"
              onChange={setVal}
              value={inpval.npass}
              id="npass"
            />
             <label>confirm pass:</label>
            <input
              type="text"
              placeholder="cpass"
              name="cpass"
              onChange={setVal}
              value={inpval.cpass}
              id="cpass"
            />
          
             
            
  
            <div className="--my" align="center" >
            <button className='--btn-primary' onClick={addCompanydata}>Submit</button>
            {/* <p>next page<NavLink to="/dash">Go</NavLink></p> */}
            </div>
            <ToastContainer />
        </Card>  </form>
      </div></>
  
    )}

export default Subfirst;