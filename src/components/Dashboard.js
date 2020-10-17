import React from 'react';
import logo from '../images/logo.jpg';
import notification from '../images/notification.jpg';
import profilpic from '../images/profilpic.png';
import graph from '../images/graph.jpg';
import dashicon from '../images/dashicon.png';
import createicon from '../images/createicon.png';
import issuesicon from '../images/issuesicon.png';
import Searchissue from './Searchissue';
import Highpriorityissue from './Highpriorityissue';
import Allissues from './Allissues';
import Recentlyupdatedissue from './Recentlyupdatedissue';








function Dashboard() {
  return (
    <div className="App">
      <header className="navmain">
        <div className="nav1">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="search">
          <Searchissue/>
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
              <li><a class="active" href="/"><img src={dashicon}/>&nbsp;&nbsp;Dashboard</a></li>
              <li><a href="/create"><img src={createicon}/>&nbsp;&nbsp;Create</a></li>
              <li><a href="/issues"><img src={issuesicon}/>&nbsp;&nbsp;Issues</a></li>
            </ul>
          </div>
        </div>
        <div className="main">
          <div className="dash">
            <div>
              <h3>Dashboard</h3>
              <img src={graph} alt="" />
            </div>
          </div>

          <div className="issuescontainer">
            <div className="issuebox">
              <h2>High Priority Issue</h2>
              <Highpriorityissue />
            </div>


            <div className="issuebox">
              <h2>Recently Updated Issue</h2>
              <Recentlyupdatedissue/>
            </div>


            <div className="issuebox">
              <h2>All Issues</h2>
              <Allissues />
            </div>

          </div>

        </div>


      </div>

    </div>
  );
}

export default Dashboard;
