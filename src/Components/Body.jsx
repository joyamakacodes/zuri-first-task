import Image from "../Images/profile.jpeg";
import Image2 from '../Images/Icon.svg';
import Image3 from '../Images/slack.svg';
import Image5 from '../Images/avatar.svg';
import Image6 from '../Images/hamburger.svg';

const Body= ()=>{
    return(
        <div className="container">
          <div className="header">
            <div className="profile">
                <div className=""><img src={Image} alt="profilePic" id="profile__img"/></div>
                <div  className="avatar"><img src={Image5} alt="avatar" /></div>
                <div  className="hamburger"><img src={Image6} alt="hamburger" /></div>
            </div>
            
            <h3 id="twitter">Onweani Joy</h3>
            <h3 id="slack">Joy Onweani</h3>
            </div>
            <div className="linksSocialContainer">
            <div className="link">
            <a id="twitter-link" href="https://twitter.com/OnweaniJoy"
            target="_blank">
            Twitter Link
            </a>
            </div>
            <div className="link">
            <a id="btn_zuri" href="https://training.zuri.team/"
            target="_blank">
            Zuri Team
            </a>
            </div>
            <div className="link">
            <a id="books" href="http://books.zuri.team"
            target="_blank">
            Zuri Books
            </a>
            </div>
            <div className="link">
            <a id="book_python" href="https://books.zuri.team/python-for-beginners?ref_id=<joyonweani>"
            target="_blank">
            Python Books
            </a>
            </div>
            <div className="link">
            <a id="pitch" href="https://background.zuri.team"
            target="_blank">
            Background Checks For Coders
            </a>
            </div>
            
            <div className="link">
            <a id="book_design" href="https://books.zuri.team/design-rules"
            target="_blank">
            Design Books
            </a>
            </div>
            <div className="socials">
            <img src={Image3} alt="zuriSvg" />
            <img src={Image2} alt="zuriSvg" />
            </div>
            </div>  
        </div>
    )
}

export default Body