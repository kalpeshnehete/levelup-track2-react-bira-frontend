import React from 'react';
import DataFetching from './DataFetching';
import logo from '../images/logo.jpg';
import notification from '../images/notification.jpg';
import profilpic from '../images/profilpic.png';
import dashicon from '../images/dashicon.png';
import createicon from '../images/createicon.png';
import issuesicon from '../images/issuesicon.png';







function Issues() {
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
              <li><a href="/create"><img src={createicon} />&nbsp;&nbsp;Create</a></li>
              <li><a class="active" href="/issues"><img src={issuesicon} />&nbsp;&nbsp;Issues</a></li>
            </ul>
          </div>
        </div>
        <div className="main">
          <div>
            <h3>Issues</h3>
          </div>
          <div className="issuescontainer">
          
            <div className="issuebox">
              <h2>To Do</h2>
              
              <DataFetching />
              
            </div>


            <div className="issuebox">
              <h2>In Progress</h2>
              <DataFetching />
            </div>


            <div className="issuebox">
              <h2>Done</h2>
              <DataFetching />
            </div>

          </div>









        </div>

      </div>


    </div>


  );
}

export default Issues;
