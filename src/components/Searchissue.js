
import React, { Component } from 'react'
import '../App.css'

export class Searchissue extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData:false,
        }

    }
    search(key) {
        console.warn(key)
        fetch("http://localhost:8000/api/v1/issues?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp".resp)
                if(resp.length>0){
                    this.setState({ searchData: resp })
                }
                else{
                    this.setState({ noData:true,searchData:null })
                }
                
            })
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(event) => this.search(event.target.value)} />
                <div>{
                    this.state.searchData ?
                        <div>
                            {
                                this.state.searchData.map((item) =>
                                    <div className="dropdown-content">{item.title}</div>
                                )
                            }
                        </div>
                        : ""
                }
                {
                                    this.state.noData?<h3>No issue found</h3>:null
                }
                </div>
            </div>
        );
    }
}

export default Searchissue;
