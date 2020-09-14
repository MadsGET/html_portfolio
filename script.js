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
				<object type="image/svg+xml" data="images/headerImage.svg" style="height: 100%; width:100%"></object>
			</div>
		</div>
		<div class="content">
			<div class="contentContainer">

			</div>
		</div>
		<div class="footer">
			<div class="footerContainer">
				<object type="image/svg+xml" data="images/footerImage.svg" style="height: 100%; width:100%"></object>
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
	//console.log('From: ' + 	currentButtonIndex[buttonIndex] + ' To: ' + currentButtonIndex[1]);

	// Set current page index to new index.
	currentPageIndex = pageIndex;

	// Draw view
	drawView();
}