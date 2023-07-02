import React, {Component} from "react";


class Contact extends Component {
    constructor() {
      super();
      
      this.state = {
        name: "",
        email: "",
        description: "",
        submitMessage: "",
        submitMessageTextColor: "",
      };
    }
    
    onChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value,
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        let isSuccessfull = true;
        const { name } = this.state;
    
        if (isSuccessfull) {
            this.setState({
                submitMessage: `Thank You! ${name}. I Will Contact You Soon. :)`,
                submitMessageTextColor: 'text-info'
            });
        } else {
            this.setState({
                submitMessage: 'Oops! Something Went Wrong, Try Again Later. :(',
                submitMessageTextColor: 'text-danger'
            });
        }
    };
    

    render(){
        const {submitMessage,submitMessageTextColor}=this.state
        return(

            // Contact me
            <div className="comtainer-fluid py-5 my-5" >
            <h1 className="font-weight-light text-center "><span className="text-info ">Thank You!</span> for Your Interest</h1>

            <div className="row justify-content-center">
                <div className="col-11 col-lg-5 ">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group pt-3">
                    <label for="name" >Name: </label>
                    <input type="text" name="name" className="form-control "  onChange={this.onChange} required/>
                    </div>

                    <div className="form-group pt-3">
                    <label for="email">Email: </label>
                    <input type="email" name="email" className="form-control " onChange={this.onChange} required/>
                    </div>

                    <div className="form-group pt-3">
                    <label for="description">Tell Me About Your Project*</label>
                    <textarea  name="description" className="form-control" rows="5" onChange={this.onChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-dark btn mt-2" style={{backgroundColor: "black"}}>Let's Talk</button>
                </form>
                </div>
            </div>

            <div className="py-3 mx-2 text-center">
                <h3 className={submitMessageTextColor}>{submitMessage}</h3>

            </div>
        </div>

        );
    }
}

export default Contact;
