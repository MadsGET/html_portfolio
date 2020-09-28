// Model
var currentPageIndex = 2;
var languageSelection = 1; // 0# Nor 1# Eng

// View
function drawView()
{
	// Draw the view.
	document.getElementById('page').innerHTML = `
		${getHeader(currentPageIndex, languageSelection)}
		<div class="content">
			<div class="contentContainer">
				${getContent(currentPageIndex, languageSelection)}
			</div>
		</div>

		${getFooter(languageSelection)}
	`;

	// Update title text.
	updateTitleText();
}

// Controller
function onPageSelection(pageIndex)
{
	if (pageIndex != currentPageIndex)
	{
		// Set page index
		currentPageIndex = pageIndex;
	}

	drawView();
}

// Updates title text.
function updateTitleText()
{
	document.title = pageTitle[currentPageIndex][languageSelection];
}