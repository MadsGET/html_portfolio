
// Static text.
var content1smallText =
// Det ligger en bug her?
` 
<p style="Text-Align: left; float:left; margin-left: 2.5%">[-] NAME:  <br> [-] DOB:  <br> [-] LOCATION:</p>
<p style="Text-Align: right; float:right; margin-right: 2.5%">Mads  <br> 1994  <br> Norway</p>
<small> Experience: C#, Javascript, HTML, CSS, Photoshop, Unity3D, Blender.</small>
`;

// Static HTML code
var headerHTML = `
<div class="header">
	<div class="headerLayerA">
		<div class="decorationL" style="background-position: center right;"></div>
		<div class="buttonL"><p class="navText lText" style="margin-right: 0;">CONTACT</p></div>
		<div class="buttonM"><p class="navText hText">ABOUT</p></div>
		<div class="buttonR"><p class="navText lText" style="margin-left: 0;">PORTFOLIO</p></div>
		<div class="decorationR" style=" background-position: center left;"></div>
	</div>
	<div class="headerLayerB"></div>
</div> `

var content1HTML = `	
<div class="content">
	<div class="contentLayerA">
			<div class="contentHead"><h1>< Hello World ></h1></div>
			<div class="contentBoxL"></div>
			<div class="contentBoxS">${content1smallText}</div>
			<div class="contentPortrait"></div>
	</div>
	<div class="contentLayerB"></div>
</div>`;

var footerHTML = `			
<div class="footer">
	<p class="footerText">Copyright 2020</p>
</div>`;