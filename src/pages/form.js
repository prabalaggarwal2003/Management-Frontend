import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
export default function Form(){
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

            <br /><br />
            <br /><br />

            <form action="" className="form1">
                <h1 id="part">Personal Details:</h1><br /><br />

                <label for="roles">Please select your designation:</label>
                <select name="role" id="role">
                    <option value="select" hidden>Select your option</option>
                    <option value="student">Student</option>
                    <option value="faculty">Faculty</option>
                </select>

                <br /><br /><br />
                <div className="per">
                    <label for="name">Full Name:</label><br />
                    <input type="text" required /><br /><br /><br />

                    <label for="enrolment">Enrolment No./Teacher ID:</label><br />
                    <input type="text" required /><br /><br /><br />
                </div><br />
                <h1 id="part">Issue Details:</h1><br /><br />


                <label for="item">Please select the location:</label><br /><br />
                <select name="loc" id="dropdown1" onClick={()=>{var d1=document.getElementById('dropdown1');
    var d2=document.getElementById('ob');
    var d3=document.getElementById('nb');
    var d4=document.getElementById('ground');
    var d5=document.getElementById('canteen');
    var d6=document.getElementById('parking');


    var selected = d1.value;
   
    if(selected==='ob'){
      
      d3.disabled=true;
      d4.disabled=true;
      d2.disabled=false;

    }
    
        if(selected==='nb'){
      d2.disabled=true;
      d4.disabled=true;
      d3.disabled=false;
    }
    
  
    if(selected ==='ground'){
      d2.disabled=true;
      d3.disabled=true;
      d4.disabled=false;
    }else{
      d4.disabled=false;
    }
    
    if(selected==='canteen'){
      d2.disabled=true;
      d3.disabled=true;
      d4.disabled=true;

    }
    
    if(selected==='parking'){
      d2.disabled=true;
      d3.disabled=true;
      d4.disabled=true;
    }
    if(selected==='nb' || selected === 'ob'){
      d4.disabled=true;
    }
  }}>
                    <option value="select" hidden>Select your option</option>
                    <option value="ob">Old Building</option>
                    <option value="nb">New Building</option>
                    <option value="canteen">Canteen</option>
                    <option value="ground">Ground</option>
                    <option value="parking">Parking</option>

                </select>

                <br /><br /><br /><br />

                <div className="line">

                    <label for="ob">Please select the Room:</label><br /><br />
                    <select name="loc" id="ob">
                        <option value="select" hidden>Old Building</option>
                        <option value="lib">Library</option>
                        <option value="classes">Classes</option>
                        <option value="labs">Labs</option>
                        <option value="clawn">Central Lawn</option>
                        <option value="rec">Reception</option>
                        <option value="shall">Seminar Hall</option>
                        <option value="chall">Conference Halls</option>
                        <option value="wash">Washrooms</option>
                        <option value="office">Offices</option>
                        <option value="office">Lifts</option>


                    </select>
                    <br /><br /><br /><br />

                    <label for="nb"></label><br /><br />
                    <select name="loc" id="nb">
                        <option value="select" hidden>New Building</option>
                        <option value="offices">Offices</option>
                        <option value="classNamees">classNamees</option>
                        <option value="common">Common Room</option>
                        <option value="wash">Washrooms</option>
                    </select>
                    <br /><br /><br /><br />

                    <label for="ground"></label><br /><br />
                    <select name="loc" id="ground">
                        <option value="select" hidden>Ground</option>
                        <option value="basket">Basketball Court</option>
                        <option value="foot">Football Ground</option>
                        <option value="volley">Volleyball Court</option>
                    </select>

                </div>

                <br />
                <label for="floor">Floor No:</label><br />
                <input type="text" required /><br /><br /><br />

                <label for="room">Room No:</label><br />
                <input type="text" required /><br /><br /><br />

                <label for="item">Please select the items you wish to report:</label><br /><br />
                <select name="equipment" id="we">
                    <option value="select" hidden>Select your option</option>
                    <option value="ac">AC</option>
                    <option value="pc">PC</option>
                    <option value="chair">Chair</option>
                    <option value="table">Table</option>
                    <option value="fan">Fans</option>
                    <option value="fan">Lights</option>
                    <option value="fan">Projector</option>
                    <option value="fan">Projector Screen</option>
                    <option value="fan">Switch Boards</option>
                    <option value="fan">Notice Board</option>
                    <option value="fan">WIFI</option>
                    <option value="fan">White Board</option>
                    <option value="fan">Wall Clock</option>
                    <option value="fan">Dustbins</option>
                    <option value="fan">Water Cooler</option>
                    <option value="fan">Lab Apparatus</option>
                    <option value="fan">Others</option>
                    

                </select>

                <br /><br /><br />

                <label for="id">Equipment ID (if any):</label><br />
                <input type="text" /><br /><br /><br />

                <label for="desc">Please provide a description of the issue:</label><br />
                <textarea name="desc" rows="8" cols="30" required></textarea><br /><br /><br />

                <label for="photo">Upload a photo of the faulty equipment:</label><br />
                <input className='in' /*style="border: none;"*/ type="file" name="photo" /><br /><br /><br /><br />

                <input type="submit" value="Submit" className="btn"/>
                <input type="reset" value="Reset" className="btn" />
                </form>

            <br /><br /><br /><br />

  </div>
    )
}