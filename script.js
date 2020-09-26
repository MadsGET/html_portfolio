// Model
var currentPageIndex = 1;
var currentButtonIndex = [0, 1, 2]; //Defunct

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		${getHeader(currentPageIndex)}
		<div class="content">
			<div class="contentContainer">
				<div class="contentHead"> < Hello World ></div>
				<div class="contentArea"></div>
			</div>
		</div>
		<div class="footer">
			<div class="footerContent">
				<div class="footerContainer" style="grid-area: footerContainerL;"><p class="footerText"> Language: English<p></div>
				<div class="footerContainer toggleButtonOn" style="grid-area: footerContainerM;"></div>
				<div class="footerContainer" style="grid-area: footerContainerR;"><p class="footerText">Copyright 2020<p></div>
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