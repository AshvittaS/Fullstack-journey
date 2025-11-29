import React, { useState } from 'react'

function Login() {
        const [pwd1,setPwd1]=useState("");
        const [pwd2,setPwd2]=useState("");
        const [sameState,setSame]=useState(true);
        function handlePWD1Change(event){
            setPwd1(event.target.value);
        }
        function handlePWD2Change(event){
            setPwd2(event.target.value);
        }
        function PwdCheck(){
            if(pwd1!==pwd2){
                console.log("ReType");
                setSame(false);
            }

        }
  return (
    <>
        <form className="my-5" style={{width:"20%", margin: "auto"}}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input type="email" className="form-control" />        
            </div>
            <div className="mb-3">
                <label  className="form-label">Password</label>
                <input value={pwd1} onChange={handlePWD1Change} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Re-enter Password</label>
                <input value={pwd2} onChange={handlePWD2Change} type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            {!sameState &&<p>Password Not  Match</p>}

            <div className="mb-3 form-check">
                <input onChange={PwdCheck} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">I Agree</label>
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
    </>
  )
}

export default Login;