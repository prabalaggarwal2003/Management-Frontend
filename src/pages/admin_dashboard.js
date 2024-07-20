import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Footer from '../components/footer'

export default function Admin_dashboard(){
    return(
        <div>
    <header className="header">
      <nav>
        <div className="left">
          <a href="https://bpitindia.com/" target="_blank"> <img src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png" alt="" /></a>  
        </div>
        <div className="right">
          <ul className="homelink">
          <Link to="/admin_dashboard"><li className="homelinklist">Home</li></Link>
          </ul>
        </div>
      </nav>
  </header>

      <br/><br/>
      <br/><br/>

      <div className="main">

        <div className="left">
          <h1 id="title">
            <span className="hello"> All reports </span>will be listed here. 
          </h1>
          <br/>
          <h2 id="subtitle">
            Click on any report to <span className="hello">view the details.</span>
          </h2>
          <br/>
          <h2 id="desc">
            Click on the <span className="hello"> refresh </span>button to check for new reports!
          </h2>

          <br/>

          <button className="btnn">Refresh</button>

        </div>

        <div className="right">

        </div>

      </div> 
      <Footer/>
  </div>
    )
}