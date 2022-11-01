import "./style.css"
const Profile = ()=>{

	return(
		<div className="container">
<div className="profile">
<img src="/OS.jpg" alt="osazee" id="profile_img"/>
<h3 id="twitter">EddyNice</h3>
{/*osareniye osareniye id="slack" */}
</div>
<div className="section">
<div className="one">
<a href="http://training.zuri.team" id="btn_zuri" >Twiitter Link </a>
</div>
<div className="two">
<a href="https://books.zuri.team" id="book" >Zuri Team</a>
</div>
<div className="three">
<a href="http://books.zuri.team/python-for-beginners?ref_id=osazee" id="book_python">Zuri Books</a>
</div>
<div className="four">
<a href="https://background.zuri.team" id="pitch" >Python Books</a>
</div>
<div className="five">
<a href="http" id="book_design" >Design Books</a>
</div>

</div>


		 </div>

		)
}

export default Profile