// Model
var currentPageIndex = 0;

// View
function drawView()
{
	document.getElementById('page').innerHTML = `
		${headerHTML}	
		${content1HTML}
		${footerHTML}
	`;
}

// Controller