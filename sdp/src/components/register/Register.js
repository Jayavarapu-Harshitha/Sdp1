import { Avatar, Button, Link, Grid, Paper, TextField, Typography, RadioGroup, FormLabel } from '@material-ui/core';
import React,{useState} from 'react';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import {useHistory} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
// import Radio from '@material-ui/core/Radio';
// import FormControl from '@material-ui/core/FormControl';
import axios from 'axios'
const Register = () => {
const[inputField,setInputField] =useState({
    name:'',
    email:'',
    phone:'',
    password:'',
    confirmpassword:''
})


// const history=useHistory()
const[errField,setErrField] =useState({
    nameErr:'',
    emailErr:'',
    phoneErr:'',
    passwordErr:'',
    confirmpasswordErr:''
})

const inputHandler=(e)=>{
    setInputField({...inputField,[e.target.name]:e.target.value})
}

const submitButton= async ()=>{
    
    if(validForm())
    {
        let url='http://localhost:9002/auth/signup'
        let options={
            method:'POST',
            url:url,
            headers:{

            },
            data: inputField
        }
        console.log(inputField)
      try{
         let response = await axios(options)
         console.log(response)
         alert('Added Succesfully');
         if(response.status==200)
         {
          alert('Added Succesfully');
          setTimeout(()=>{
            // history.push('/login')  
          },1500)
         }
      }
      catch(e){
       alert('Something went wrong');
      }
    }
    else
    {
      alert('Form invalid');
    }
}

const validForm=()=>{
    let formIsValid=true;
    var validEmailRegex =RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\")) @(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    setErrField({
    nameErr:'',
    emailErr:'',
    phoneErr:'',
    passwordErr:'',
    confirmpasswordErr:''
    })
  if(inputField.name == ''){
    formIsValid=false;
      setErrField(prevState=>({
          ...prevState,nameErr:'Please Enter Name'
      }))
  }
  if(inputField.email == ''){
    formIsValid=false;
      setErrField(prevState=>({
          ...prevState,emailErr:'Please Enter Email'
      }))
  }
  if(inputField.email !== '' && validEmailRegex.test(inputField.email)){
    formIsValid=false
      setErrField(prevState=>({
          ...prevState,emailErr:'Please Enter valid Email'
      }))
  }
  if(inputField.phone == ''){
    formIsValid=false;
      setErrField(prevState=>({
          ...prevState,phoneErr:'Please Enter phone number'
      }))
  }
  if(inputField.password == ''){
    formIsValid=false;
      setErrField(prevState=>({
          ...prevState,passwordErr:'Please Enter password'
      }))
  }
  if(inputField.confirmpassword == ''){
    formIsValid=false;
      setErrField(prevState=>({
          ...prevState,confirmpasswordErr:'Please Enter confirmpassword'
      }))
  }
  if(inputField.confirmpassword != '' && inputField.password!=inputField.confirmpassword){
    formIsValid=false;
      setErrField(prevState=>({
          ...prevState,confirmpasswordErr:'password are not matched'
      }))
  }
  return   formIsValid
}
    const paperStyle = { padding: '30px 20px', height: '95vh', width: 350, margin: "20px auto" }
    const avatarStyle = { backgroundColor: "green" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
    return (
        <Grid autoComplete='off'> 
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddCircleOutlineOutlinedIcon /></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2> <br/>
                    Please fill this form to create an account?
                </Grid>
                <div>
    
                <TextField label="Username" placeholder="Enter Username" type="text" name="name" method="post"
                 value={inputField.name} onChange={inputHandler} fullWidth required />
                 {
                     errField.nameErr.length > 0 && <span className="error">{errField.nameErr}</span>
                 }
                 </div>
                 <div>
                <TextField label="Email" placeholder="Enter Email"  name="email" method="post"
                   value={inputField.email} onChange={inputHandler}
                type="text" fullWidth required />
                {
                    errField.emailErr.length > 0 && <span className="error">{errField.emailErr}</span>
                }
                </div>
                {/* <FormControl component="fieldset" method="post" style={marginTop,{color:"Black"}}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup arial-label="gender" name="gender" style={{ display: 'initial' }}>
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl> */}
                <div>
                <TextField label="Phone Number" method="post" placeholder="Enter Phone Number"  name="phone"
                   value={inputField.phone} onChange={inputHandler}
                type="text" fullWidth required />
                      {
                          errField.phoneErr.length > 0 && <span className="error">{errField.phoneErr}</span>
                      }
                      </div>
                      <div>
                <TextField label="Password" method="post"  placeholder="Enter Password"  name="password"
                   value={inputField.password} onChange={inputHandler}
                 type="password" fullWidth required />
                  {
                          errField.passwordErr.length > 0 && <span className="error">{errField.passwordErr}</span>
                  }
             </div>
             <div>
                <TextField label=" Confirm Password" method="post" placeholder="Confirm Password" name="confirmpassword"
                   value={inputField.confirmpassword} onChange={inputHandler}
                type="password" fullWidth required />
            
                  {
                          errField.confirmpasswordErr.length > 0 && <span className="error">{errField.confirmpasswordErr}</span>
                  }
                  </div>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checked"
                            color="secondary"
                        />
                    }
                    label="I accept the terms and conditions"
                />
                <Button type='submit' onClick={submitButton} variant="contained" color='primary' >Sign Up</Button>&nbsp;
            </Paper>
        </Grid>
    );
}
export default Register