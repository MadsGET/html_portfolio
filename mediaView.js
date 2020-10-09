// Album path strings
let pathPrefix = 'albums/';
let pathSuffix = '.png';

// Selected album index.
let selectedAlbumIndex = 0;
let selectedMediaIndex = 0;
let overlayState = 0; // #0 Image View #1 Album View

// Checks if a numbers within a specified range.
function withinRange(min, max, value)
{
	if (value >= min && value < max)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function fetchAlbumLength()
{
	return albums[selectedAlbumIndex].mediaArray.length;
}

function fetchMediaData(index)
{
	// Get fetched object and its associated data with a certian language.
	let fetchedObject = albums[selectedAlbumIndex].mediaArray[index];
	fetchedObject.path = pathPrefix + selectedAlbumIndex + '/' + index + pathSuffix;
	fetchedObject.albumID = selectedAlbumIndex;

	return fetchedObject;
}

function getOverlayHTML(mediaDataObject, languageIndex)
{
	return `
		<div class="mediaDataDisplay">
			<div class="mediaHead">
			<div class="mediaDate">${(!languageIndex) ? 'Opprettelsesdato' : 'Creation Date'}: ${ mediaDataObject.date }</div >
			<div class="mediaMenuIcons">
				<a class="mediaDownload" style="background-image: ${mediaIcons[0]}" href="albums/${selectedAlbumIndex}/${selectedMediaIndex}.png" download></a>
				<div class="mediaFullscreen" style="background-image: ${mediaIcons[1]}" onclick="window.open('${mediaDataObject.path}')"></div>
				<div class="mediaMenu" style="background-image: ${mediaIcons[2]}" onclick="overlayState = 1; drawView();"></div>
			</div>
		</div>
			<div style="grid-area: mediaBody"></div>
			<div class="mediaFooter">- ${mediaDataObject.description[languageIndex]}</div>
		</div>
	`;
}

function getAlbumViewHTML()
{
	return `
		<div class="albumContainer">
			<div class="albumPreview" style="grid-area: albumPreview; background-image: url('${pathPrefix + selectedAlbumIndex + '/' + '_-1' + pathSuffix}')"></div>
			<div class="glassPanel" style="grid-area: buttonOpen" onclick="onAlbumOpen();"><p>${(!languageSelection) ? '&Aring;pne' : 'Open'}</p></div>
			<div class="glassPanel" style="grid-area: buttonCancel" onclick="onAlbumCancel();"><p>${(!languageSelection) ? 'Avbryt' : 'Cancel'}</p></div>
		</div> 
	`;
}

function onAlbumOpen()
{
	// If the album index and object album id does not match.
	if (selectedAlbumIndex != mediaObject.albumID)
	{
		selectedMediaIndex = 0;
		mediaObject = fetchMediaData(0);
	}

	// Reset overlay state and draw view.
	overlayState = 0;
	drawView(); 
}

function onAlbumCancel()
{
	overlayState = 0;
	selectedAlbumIndex = mediaObject.albumID;
	drawView();
}