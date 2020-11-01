import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

const emailRegex = RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
const nameRegex = RegExp(/([A-Z][a-z])\w+/)
const urlRegex = RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
// Not the correct implementation yet
const phoneRegex = RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
            valid: null
        };
    }

    validate = () => {
        var validity;
        const values = this.state
        console.log(values)
        for( const value in values){
            if(value === false) {
                validity = false
            }
        }
        return validity
    }

    handleVerify = e => {
        e.preventDefault();
        if(this.validate){
            this.setState({valid: true})
        }
    }


    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;    
        switch (name) {
          case 'name':
            if(nameRegex.test(value)) {
                this.setState({isNameValid: true})
            } 
            break;
          case 'email':
            if(emailRegex.test(value)) {
                this.setState({isEmailValid: true})
            } 
            break;
          case 'phone':
            if(phoneRegex.test(value)) {
                this.setState({isPhoneValid: true})
            } 
            break;
          case 'blog-url':
            if(urlRegex.test(value)) {
                this.setState({isUrlValid: true})
            } 
            break;
        
          default:
            break;
        }
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            
            <form >
                {/* Display this if form is invalid by toggling the css display property to block */}
                <div className="invalid">
                    <h3>Form is incomplete</h3>
                </div>

                {/* Display this if form is valid by toggling the css display property to block */}
                <div className="valid">
                    <h3>Form is complete</h3>
                </div>

                <h3 htmlFor="name">Name:
                </h3>
                <input
                    className=""
                    placeholder="Name"
                    type="text" 
                    name="name"
                    noValidate
                    onChange={this.handleChange}
                    />

                <h3>Email:
                </h3>
                <input
                    className=""
                    placeholder="Name"
                    type="email" 
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                    />

                <h3>Phone:
                </h3>
                <input
                    className=""
                    placeholder="Name"
                    type="number" 
                    name="phone"
                    noValidate
                    onChange={this.handleChange}
                    />

                <h3>Blog URL:
                </h3>
                <input
                    className=""
                    placeholder="Name"
                    type="text" 
                    name="blog-url"
                    noValidate
                    onChange={this.handleChange}
                    />

                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={this.handleVerify}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

export default Form;
