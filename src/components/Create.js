import React from 'react';
import logo from '../images/logo.jpg';
import notification from '../images/notification.jpg';
import profilpic from '../images/profilpic.png';
import graph from '../images/graph.jpg';
import dashicon from '../images/dashicon.png';
import createicon from '../images/createicon.png';
import issuesicon from '../images/issuesicon.png';








function Create() {
    return (
        <div className="App">
            <header className="navmain">
                <div className="nav1">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="search">
                    <input type="text" id="title" name="title" placeholder="Search Your issues..." maxlength="100" />
                    </div>
                </div>

                <div className="nav2">

                    <ul>
                        <li><a href=""><img src={notification} alt="" /></a></li>
                        <li><a href=""><img src={profilpic} alt="" /></a></li>
                    </ul>

                </div>

            </header>
            <div className="body">
                <div className="sidenav">
                    <div>
                        <ul>
                            <li><a href="/"><img src={dashicon} />&nbsp;&nbsp;Dashboard</a></li>
                            <li><a class="active" href="/create"><img src={createicon} />&nbsp;&nbsp;Create</a></li>
                            <li><a href="/issues"><img src={issuesicon} />&nbsp;&nbsp;Issues</a></li>
                        </ul>
                    </div>
                </div>
                <div className="main">

                    <div>
                        <h3>Create</h3>
                    </div>
                    
                    <form class='forms'>
                        <label for="title">Title</label>
                        <input type="text" id="title" name="title" placeholder="Enter title" maxlength="100" />
                        <label for="type">Type</label>
                        <input type="text" id="type" name="type" placeholder="Enter type" maxlength="40" />
                        <label for="status">Status</label>
                        <input type="text" id="status" name="status" placeholder="Enter status" maxlength="40" />
                        <label for="priority">Priority</label>
                        <input type="text" id="priority" name="priority" placeholder="Enter priority" maxlength="40" />
                        <label for="resolution">Resolution</label>
                        <input type="text" id="resolution" name="resolution" placeholder="Enter resolution" maxlength="40" />
                        <label for="affectversion">Affects Versions</label>
                        <input type="text" id="affectversion" name="affectversion" placeholder="Enter affectversion" maxlength="40" />
                        <label for="fixversion">Fix Version</label>
                        <input type="text" id="fixversion" name="fixversion" placeholder="Enter fixversion" maxlength="40" />
                        <label for="components">Components</label>
                        <input type="text" id="fname" name="components" placeholder="Enter components" maxlength="40" />
                        <label for="assignee">Assignee</label>
                        <input type="text" id="assignee" name="assignee" placeholder="Enter assignee" maxlength="40" />
                        <label for="labels">Labels</label>
                        <input type="text" id="labels" name="labels" placeholder="Enter labels" maxlength="40" />
                        <label for="reporter">Reporter</label>
                        <input type="text" id="reporter" name="reporter" placeholder="Enter reporter" maxlength="40" />
                        <label for="Sprint">Sprint</label>
                        <input type="text" id="Sprint" name="Sprint" placeholder="Enter Sprint" maxlength="40" />
                            <label for="Description">Description</label>
                            <input type="text" id="Description" name="Description" placeholder="Enter Description" maxlength="40" />
                            <label for="storypoints">Story Points</label>
                            <input type="text" id="storypoints" name="storypoints" placeholder="Enter storypoints" maxlength="40" />
                            <label for="Attachment">Attachment</label>
                            <input type="file" id="Attachment" name="Attachment" placeholder="Attach your docs" maxlength="40" />
                            <input type="submit" value="Submit"/></form>
                    
                </div>
            </div>
        </div>
    );  
}

export default Create;
