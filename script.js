// Model
var currentPageIndex = 0;

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		${getHeader(0, 1, 2)}	
		${content1HTML}	
		${footerHTML}	
	`;
}

// Controller