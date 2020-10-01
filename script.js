// Model
var currentPageIndex = 1;
var languageSelection = 1; // 0# Nor 1# Eng

// Media Object
let mediaIndex = 0;
let mediaObject = fetchMediaData(mediaIndex);

// View
function drawView()
{
	// Draw the view.
	document.getElementById('page').innerHTML = `
		${getHeader(currentPageIndex, languageSelection)}
		${getContent(currentPageIndex, languageSelection)}
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

// On Media Change
function onMediaChange(delta)
{
	if (withinRange(0, albums[selectedAlbumIndex].mediaArray.length, mediaIndex + delta))
	{
		mediaObject = fetchMediaData(mediaIndex + delta);
		mediaIndex = mediaIndex + delta;
		console.log(mediaIndex);
		drawView();
	}
}