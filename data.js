const urlButtonL = ['buttonLarge_Contact', 'buttonLarge_About', 'buttonLarge_Portfolio'];
const urlButtonS = ['buttonSmall_Contact', 'buttonSmall_About', 'buttonSmall_Portfolio'];

// Static HTML code

function getHeader(indexL, indexM, indexR)
{
	return `
	<div class="header">
	<div class="headerBackground"></div>
	<div class="headerContainer">
		<div class="headerDecoration"></div>
		<div class="headerButton" style="background-image: url(images/buttons/${urlButtonS[indexL]}.png)"></div>
		<div class="headerButton" style="background-image: url(images/buttons/${urlButtonL[indexM]}.png); opacity: 1.0;"></div>
		<div class="headerButton" style="background-image: url(images/buttons/${urlButtonS[indexR]}.png)"></div>
		<div class="headerDecoration"></div>
	</div>
	</div> `
}

var content1HTML = `	
<div class="content">
<div class="contentBackground"></div>
<div class="contentContainer">
	<div class="contentBox" style="grid-area: boxH; align-items:center; display:flex;"><h1>< Hello World ></h1></div>
	<div class="contentBox" style="grid-area: boxL;"></div>
	<div class="contentBox" style="grid-area: boxS;"></div>
	<div class="contentPortrait"></div>
</div>
</div>`;

var footerHTML = `			
<div class="footer">

</div>`;