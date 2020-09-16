// Model
var currentPageIndex = 1;
var currentButtonIndex = [0, 1, 2];
var currentAnimState = 0;

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		<div class="header">
			<div class="headerContainer">
				
				<div class="headerDecoration" style="grid-area:'decorationL'">
					<div class="decorationImage"><div class="decorationMirror" style="opacity:0.5"></div></div>
				</div>
				<div class="headerContainerL">
					<div class="headerButton" style="background-image: url('images/button_Contact.svg');"></div>
					<div class="headerButtonImage"></div>
				</div>		
				<div class="headerContainerM">
					<div class="headerButton" style="background-image: url('images/button_About.svg');	background-size: 80% 70%; opacity:1.0;"></div>
					<div class="headerButtonImage"></div>
				</div>
				<div class="headerContainerR">
					<div class="headerButton" style="background-image: url('images/button_Portfolio.svg');"></div>
					<div class="headerButtonImage"></div>
				</div>
				<div class="headerDecoration" style="grid-area:'decorationR';">
					<div class="decorationImage"></div>
				</div>
			</div>
		</div>
		<div class="content">
			<div class="contentContainer"><div class="content1HTML"></div></div>
		</div>
		<div class="footer">
		</div>
	`;
}

// Controller
function onPageSelection(buttonIndex, pageIndex)
{
	// Guard clause; On same page index.
	if (currentPageIndex == pageIndex)
	{
		return;
	}

	// Swap button indexes.
	currentButtonIndex[buttonIndex] = currentPageIndex;
	currentButtonIndex[1] = pageIndex;
	console.log(currentButtonIndex);
	//console.log('From: ' + 	currentButtonIndex[buttonIndex] + ' To: ' + currentButtonIndex[1]);

	// Set current page index to new index.
	currentPageIndex = pageIndex;

	// Draw view
	drawView();
}