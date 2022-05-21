import React, { Component } from 'react'
import axios from 'axios'
import './newuser.css'
import useFullPageLoader from '../UseFullPageLoader'



class NewUser extends Component {

     constructor(props) {
       super(props)
     
       this.state = {
          name:'',
          job: '',
          email:'',
          phone:'',
          errors:{}
       }
     }

     changeHandler = (e) =>{
         this.setState({[e.target.name] : e.target.value})
     }

          formValidation = () =>{
       const {name, phone, job, email} = this.state;
       let isValid = true;
       const errors = {};
       if (name.trim().length < 3){
         errors.nameLength = "Input a full Name";
         isValid = false;
       }
       if (phone.includes('number')){
         errors.phoneNumber = "Input a valid Phone number";
         isValid = false;
       }
       if (job.trim().length < 3){
         errors.jobLength = "Input a valid job description";
         isValid = false;
       }
       if (!email.includes('@')){
         errors.emailAdd = "input a valid email";
         isValid = false;
       }

       this.setState({errors});
       return isValid;
     }

     submitHandler = e => {
              e.preventDefault()
         console.log(this.state)
         axios.post('https://62823e3c9fac04c65411c0b5.mockapi.io/users', this.state)
         .then(response =>{
             console.log(response)
                     })
         .catch(error =>{
             console.log(error)
         })

         const isValid = this.formValidation();

         if(isValid){
           this.setState({
           name:"",
           phone:'',
           job:'',
           email:''
          })
         }
     }

  render() {
      const {name, job, email, phone, errors} = this.state
      return (
        <div className="newUser">
      {/* <h1 className="newUserTitle">New User</h1> */}
      <form className="newUserForm" onSubmit={this.submitHandler}>
        
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" name='name' value={name} onChange={this.changeHandler} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" name='email' value={email} onChange={this.changeHandler}/>
        </div>
        <div className="newUserItem">
          <label>Occupation</label>
          <input type="text" placeholder="job" name='job' value={job} onChange={this.changeHandler}/>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" name='phone' value={phone} onChange={this.changeHandler} />
        </div>
        
    
        <button type='submit' className="newUserButton">Create</button>
             {Object.keys(errors).map((key) =>{
          return <div style={{color: "red"}} key={key}>
            {errors[key]}
          </div>
        })}
      </form>
    </div>
      
    )
  }
}

export default NewUser