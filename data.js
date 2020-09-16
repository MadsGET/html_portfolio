const buttonSrc = ["url('images/button_Contact.svg')", "url('images/button_About.svg')", "url('images/button_Portfolio.svg')"]
const pageTitle = ['Contact', 'About', 'Portfolio'];

// Static text fields
const largeInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend quis lorem molestie sagittis. Donec tempus, purus sit amet blandit scelerisque, tellus quam dignissim orci, quis tempus mi tortor sed urna. Vestibulum eget dolor quis magna efficitur tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Nulla facilisi. Morbi et orci eget eros congue fermentum. Aenean interdum luctus mi, ut maximus erat ultrices vitae. Aenean blandit tempor ornare. Duis nisi dolor, condimentum quis dolor vitae, volutpat bibendum odio. Quisque congue nulla odio. In ultricies, eros eu condimentum dignissim, nisl dui ultrices ligula, vitae blandit risus dui dictum dolor. Class aptent taciti sociosquo.`

// Static HTML code
function getHeader(buttonIndex)
{
	return `
	<div class="header">
		<div class="headerContainer">				
			<div class="headerDecoration" style="grid-area:'decorationL'">
				<div class="decorationImage"><div class="decorationMirror" style="opacity:0.5"></div></div>
			</div>
			<div class="headerContainerL">
				<div class="headerButton" onClick="onPageSelection(0, currentButtonIndex[0])" style="background-image: ${buttonSrc[buttonIndex[0]]};"></div>
				<div class="headerButtonImage"></div>
			</div>		
			<div class="headerContainerM">
				<div class="headerButton" onClick="onPageSelection(1, currentButtonIndex[1])" style="background-image: ${buttonSrc[buttonIndex[1]]}; background-size: 80% 70%; opacity:1.0;"></div>
				<div class="headerButtonImage"></div>
			</div>
			<div class="headerContainerR">
				<div class="headerButton" onClick="onPageSelection(2, currentButtonIndex[2])" style="background-image: ${buttonSrc[buttonIndex[2]]};"></div>
				<div class="headerButtonImage"></div>
			</div>
			<div class="headerDecoration" style="grid-area:'decorationR';">
				<div class="decorationImage"></div>
			</div>
		</div>
	</div>
	` 
	
}

// Defunct
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

var content0HTML = `
	<div class="content0HTML">
		<div class="content0Grid">
			<div class="decoratedBox" style="grid-area:contentH; background-Image:url('images/contentHeadText.svg');"></div>
			<div class="decoratedBox" style="grid-area:contentL"></div>
			<div class="decoratedBox textGrid" style="grid-area:contentS">
				<div class="textL">[-] Name: <br> [-] DOB: 1994 <br> [-] Location: </div>
				<div class="textR"> Mads <br> 1994 <br> Norway</div>
				<div class="textB"></div>
			</div>
			<div class="portrait"></div>
		</div>
	</div>
`;

var footerHTML = `<div class="footer"></div>`;