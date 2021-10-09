import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state={
            Return_ID:"",
            Return_Date:"",
            Return_ItemName:"",
            Customer_Name:"",
            Customer_ContactNo:"",
            Return_Reason:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e) =>{

        e.preventDefault();

        const {Return_ID,Return_Date,Return_ItemName,Customer_Name,Customer_ContactNo,Return_Reason} = this.state; 

        const data ={
            Return_ID:Return_ID,
            Return_Date:Return_Date,
            Return_ItemName:Return_ItemName,
            Customer_Name:Customer_Name,
            Customer_ContactNo:Customer_ContactNo,
            Return_Reason:Return_Reason
        }

        console.log(data)

        axios.post("http://localhost:8000/post/save",data).then((res) =>{
            if(res.data.success){
                alert("Post add Succesfully")
                window.location.replace("/return")
                this.setState(
                    {
                        Return_ID:"",
                        Return_Date:"",
                        Return_ItemName:"",
                        Customer_Name:"",
                        Customer_ContactNo:"",
                        Return_Reason:""
                    }
                )

                
            }
        })
    }

    render() {
        return (
            
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Create new post</h1>
                <form className="needs-validation" noValidate>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Return_ID</label>
                        <input type="text"
                        className="form-control"
                        name="Return_ID"
                        placeholder="Enter Return_ID"
                        value={this.state.Return_ID}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Return_Date</label>
                        <input type="text"
                        className="form-control"
                        name="Return_Date"
                        placeholder="Enter Return_Date"
                        value={this.state.Return_Date}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Return_ItemName</label>
                        <input type="text"
                        className="form-control"
                        name="Return_ItemName"
                        placeholder="Enter Return_ItemName"
                        value={this.state.Return_ItemName}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Customer_Name</label>
                        <input type="text"
                        className="form-control"
                        name="Customer_Name"
                        placeholder="Enter Customer_Name"
                        value={this.state.Customer_Name}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Customer_ContactNo</label>
                        <input type="text"
                        className="form-control"
                        name="Customer_ContactNo"
                        placeholder="Enter Customer_ContactNo"
                        value={this.state.Customer_ContactNo}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Return_Reason</label>
                        <input type="text"
                        className="form-control"
                        name="Return_Reason"
                        placeholder="Enter Return_Reason"
                        value={this.state.Return_Reason}
                        onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-square"></i>
                        &nbsp; Save
                    </button>
                </form>
            </div>
        )
    }
}