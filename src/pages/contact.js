import React, {Component} from 'react';
import ContactPage from "../components/contact-page.js";
import "./contact.css";
import { encode } from 'punycode';

class Contact extends Component {
constructor(props){
    super(props);
    this.state = {};
}

handleContactSubmit = event => {
    event.preventDefault();
    const form = e.target;
    fetch("/", {
        method:"POST",
        body: {...this.state}
    })
    .then(() => alert("thank you!"))
    .catch(error => alert(error));
}
    render(){
        return(
            <div id ="contact-bg">
    <ContactPage
            handleContactSubmit={this.handleContactSubmit}
    />
    </div>
        )
    }
    }

    export default Contact;