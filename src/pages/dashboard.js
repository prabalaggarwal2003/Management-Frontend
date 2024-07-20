import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Footer from '../components/footer'

export default function Dashboard(){
  
  function ButtonLink({to, children}){
return <Link to={to}><button>{children}</button></Link>
  }

    return(
        <div>
    <header className="header">
      <nav>
        <div className="left">
          <a href="https://bpitindia.com/" target="_blank"> <img src="https://bpitindia.com/wp-content/uploads/2023/04/logo1-1.png" alt="" /></a>  
        </div>
        <div className="right">
          <ul className="homelink">
              <Link to="/dashboard"><li className="homelinklist">Home</li></Link>
            </ul>
        </div>
      </nav>
  </header>

      <br/><br/>
      <br/><br/>

      <div className="main">

        <div className="left">
          <h1 id="title">
            Got something to <span className="hello">report</span>?
          </h1>
        <br/>
          <h2 id="subtitle">
            Fill a <span className="hello">quick form </span>to get it reported to <br/>
            the authorities <span className="hello">in a snap!</span>
          </h2>

          <br/>

          <ButtonLink to="/form">
Report here
          </ButtonLink>
        </div>

        <div className="right">

        </div>

      </div>
      <br/>
      <h1 className="p">Your reports:</h1>
      <table id="reports">
        <tr>
            <th>Floor Number</th>
            <th>Room Number</th>
            <th>Equipment ID</th>
            <th>Status</th>
          </tr>
          <tr>
          </tr>
      </table>
<br/><br/><br/><br/>
      
       <Footer/>
  </div>
    )
}