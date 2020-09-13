const urlButtonL = ['buttonLarge_Contact', 'buttonLarge_About', 'buttonLarge_Portfolio'];
const urlButtonS = ['buttonSmall_Contact', 'buttonSmall_About', 'buttonSmall_Portfolio'];
const contentAnimState = ['fadeIn', 'fadeOut'];

// Static text fields
const largeInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend quis lorem molestie sagittis. Donec tempus, purus sit amet blandit scelerisque, tellus quam dignissim orci, quis tempus mi tortor sed urna. Vestibulum eget dolor quis magna efficitur tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Nulla facilisi. Morbi et orci eget eros congue fermentum. Aenean interdum luctus mi, ut maximus erat ultrices vitae. Aenean blandit tempor ornare. Duis nisi dolor, condimentum quis dolor vitae, volutpat bibendum odio. Quisque congue nulla odio. In ultricies, eros eu condimentum dignissim, nisl dui ultrices ligula, vitae blandit risus dui dictum dolor. Class aptent taciti sociosquo.`

// Static HTML code
function getHeader(buttonIndex)
{
	return `
	<div class="header">
	<div class="headerBackground"></div>
	<div class="headerContainer">
		<div class="headerDecoration"></div>
		<div class="headerButton" onClick="onPageSelection(0, ${buttonIndex[0]})" style="background-image: url(images/buttons/${urlButtonS[buttonIndex[0]]}.png)"></div>
		<div class="headerButton" onClick="onPageSelection(1, ${buttonIndex[1]})" style="background-image: url(images/buttons/${urlButtonL[buttonIndex[1]]}.png); opacity: 1.0;"></div>
		<div class="headerButton" onClick="onPageSelection(2, ${buttonIndex[2]})" style="background-image: url(images/buttons/${urlButtonS[buttonIndex[2]]}.png)"></div>
		<div class="headerDecoration"></div>
	</div>
	</div> `
}

function getContent(index)
{
	if (index == 0) {
		return content0HTML;
	}
	else if (index == 1)
	{
		return content1HTML;
	}
}

var content0HTML =
`
	<div class="contentCard"></div>
` ;

var content1HTML = `	
<div class="contentBackground"></div>
<div class="contentContainer">
	<div class="contentBox" style="grid-area: boxH; align-items:center; display:flex; overflow:hidden;">
		<p style="margin: auto; font-size:250%">< Hello World ></p>
	</div>
	<div class="contentBox" style="grid-area: boxL;">
		<p style="font-size:75%">${largeInfo}</p>
	</div>
	<div class="contentBox" style="grid-area: boxS;">
	<p style="float:left;margin-left: 5%">[-] DOB: <br> [-]Name:<br> [-]Location: </p>
	<p style="float:right; margin-right: 5%">1994 <br> Mads <br> Norway</p>
	</div>
	<div class="contentPortrait"></div>
</div>`;

var footerHTML = `			
<div class="footer">
<p style="margin: auto; text-align:center;"> Copyright 2020 </p>
</div>`;