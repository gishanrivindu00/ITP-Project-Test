import React, { Component } from 'react';
import axios from 'axios';
import cNavBar from './itemNavBar';

class CategoryDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        }
    }
componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/category/specific/${id}`).then((res)=>{
        if(res.data.success){
            this.setState({
                post:res.data.post
            });

            console.log(this.state.post);
        }
    });
}

    render() {
        const{CategoryName,Description,} = this.state.post;

        return (
            <div>
                <cNavBar/>
            <div className="container1">
            <div style={{marginTop:'20px'}}>
            <h4>{CategoryName}</h4>  
            <hr/>  

        <dl class="row">
            <dt class="col-sm-3">Category name</dt>
            <dd class="col-sm-9">{CategoryName}</dd>

            <dt class="col-sm-3">Description</dt>
            <dd class="col-sm-9">{Description}
            </dd>

         </dl>
    

            </div>
            </div>
            </div>
        );
    }
}

export default CategoryDetails;
