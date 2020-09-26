// Model
var currentPageIndex = 1;
var currentButtonIndex = [0, 1, 2];

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		<div class="header">
			<div class="buttonArea">
				<div class="headerButton" style="grid-area: buttonL;"><div class="headerButtonText" ${(currentPageIndex == 1) ? '' : 'style="opacity:0.5"'}>ABOUT</div></div>
				<div class="headerButton" style="grid-area: buttonM;"><div class="headerButtonText" ${(currentPageIndex == 2) ? '' : 'style="opacity:0.5"'}>PORTFOLIO</div></div>
				<div class="headerButton" style="grid-area: buttonR;"><div class="headerButtonText" ${(currentPageIndex == 3) ? '' : 'style="opacity:0.5"'}>CONTACT</div></div>
			</div>
		</div>
		<div class="content">
			<div class="contentContainer">
				<div class="contentHead"> < Hello World ></div>
				<div class="contentArea"></div>
			</div>
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

	// Set current page index to new index.
	currentPageIndex = pageIndex;

	// Set head title
	document.title = pageTitle[currentPageIndex];

	// Draw view
	drawView();
}