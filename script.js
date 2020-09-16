// Model
var currentPageIndex = 1;
var currentButtonIndex = [0, 1, 2];

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		${getHeader(currentButtonIndex)}
		<div class="content">
			<div class="contentContainer">
				${content0HTML}
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