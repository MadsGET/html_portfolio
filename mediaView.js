// Album path strings
let pathPrefix = 'albums/';
let pathSuffix = '.png';

// Selected album index.
let selectedAlbumIndex = 0;

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

	return fetchedObject;
}

function getOverlayHTML(mediaDataObject, languageIndex)
{
	return `
		<div class="mediaDataDisplay">
			<div class="mediaHead">
			<div class="mediaDate">${(!languageIndex) ? 'Opprettelsesdato' : 'Creation Date'}: ${ mediaDataObject.date }</div >
			<div class="mediaMenuIcons">
				<div class="mediaDownload" style="background-image: ${mediaIcons[0]}"></div>
				<div class="mediaFullscreen" style="background-image: ${mediaIcons[1]}" onclick="window.open('${mediaDataObject.path}')"></div>
				<div class="mediaMenu" style="background-image: ${mediaIcons[2]}"></div>
			</div>
		</div>
			<div style="grid-area: mediaBody"></div>
			<div class="mediaFooter">- ${mediaDataObject.description[languageIndex]}</div>
		</div>
	`;
}