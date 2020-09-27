// Model
var currentPageIndex = 1;
var languageSelection = 0; // 0# ENG 1# NOR
var currentButtonIndex = [0, 1, 2]; //Defunct

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		${getHeader(currentPageIndex, languageSelection)}
		<div class="content">
			<div class="contentContainer">
				<div class="contentHead">
					<p class="contentTitle">${aboutTitle[languageSelection]}<p>
				</div>
				<div class="contentArea">
					<div class="contentBox">
							<div class="textArea">${largeInfo}</div>
					</div>
				</div>
				<div class="contentOverlay"></div>
			</div>
		</div>

		${getFooter(languageSelection)}
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