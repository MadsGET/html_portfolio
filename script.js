// Model
var currentPageIndex = 1;
var currentButtonIndex = [0, 1, 2];
var currentAnimState = 0;

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		${getHeader(currentButtonIndex)}	
		<div class="content ${contentAnimState[currentAnimState]}">${getContent(currentPageIndex)}</div>
		${footerHTML}	
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