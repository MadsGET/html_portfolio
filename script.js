// Model
var currentPageIndex = 1;
var languageSelection = 0; // 0#ENG 1#NOR
var currentButtonIndex = [0, 1, 2]; //Defunct

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		${getHeader(currentPageIndex, languageSelection)}
		<div class="content">
			<div class="contentContainer">
				<div class="contentHead"> < Hello World ></div>
				<div class="contentArea"></div>
			</div>
		</div>
		<div class="footer">
			<div class="footerContent">
				<div class="footerContainer" style="grid-area: footerContainerL;"><p class="footerText" style="margin-left:0;"> ${footerText[0][languageSelection]}<p></div>
				<div class="footerContainer toggleButton toggleButton${(languageSelection == 0) ? 'On' : 'Off'}" style="grid-area: footerContainerM;" onclick="languageSelection = (languageSelection == 0) ? 1 : 0; drawView();"></div>
				<div class="footerContainer" style="grid-area: footerContainerR;"><p class="footerText" style="margin-right:0;">${footerText[1][languageSelection]}<p></div>
			</div>
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