import React, { useState, useEffect } from 'react'
import axios from 'axios'


function DataFetching() {
    const [issues, SetIssues] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/issues')
            .then(res => {
                console.log(res)
                SetIssues(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            {
                issues.map(issue =>




                    <div className="parent" key={issue.id}>

                        <div className="child1">
                            <div className="child1-1">
                                <h5>Id : {issue.short_id}</h5>
                            </div>
                            <div className="child1-2">
                                <h5>Date :{issue.created_at}</h5>
                            </div>
                        </div>

                        <div className="child2">
                            <h5>Description : {issue.description}</h5>
                        </div>

                        <div className="child3">
                            <div className="child3-1">
                                <h5>Assignee : {issue.assignee}</h5>
                            </div>
                            <div className="child3-1">
                                <h5>Priority : {issue.priority}</h5>
                            </div>

                        </div>


                    </div>







                )

            }

        </div>
    )
}

export default DataFetching;