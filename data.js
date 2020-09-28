const pageTitle = [['Om Meg', 'About'], ['Portof&oslash;lje', 'Portfolio'], ['Kontakt', 'Contact']];

const titleText = [['< Hallo Verden >', '< Hello World >'], ['Image (0/0)', 'Image (0/0)'], ['La oss holde kontakten', 'Lets stay connected']];
const titleSize	= [['180', '200'], ['125', '125'], ['175', '200']];
const titleMargin = ['-left:10.5vmax;', ':auto', '-right:0;'];

// Static text fields
const largeInfo =
[		
		`Velkommen til min portf&oslash;lje side! Jeg har alltid hatt en interesse for datamaskiner og videospill, og over tid s&aring; har produsert en god del ressurser for applikasjoner, websider og spill. Som dere kan n&aring; se p&aring portof&oslash;lje seksjonen.

		Over tiden har jeg f&aring;tt en erfaringskurve som gj&oslash;r at jeg kan b&aring;de lage produkter for den visuelle og den kodebaserte delen av et prosjekt.

		Til slutt s&aring; &oslash;nsker jeg &aring; takke dere for at dere viser interesse til meg og mitt arbeid. Og jeg vil gjerne peke ut at alt p&aring; denne siden fra den grafiske til kode biten av denne siden er produsert av meg. Jeg h&aringper at dere finner denne sidens innhold verdifullt, og h&aring;per at dere tenker p&aring meg til deres neste prosjekt.`
		,
		`Welcome to my portfolio site! I have always had an interest in computers and videogames, and over the years I have created numerous assets for applications, websites and games. Which can now be viewed in the portfolio section.

		Over time I have accumulated a wide skillset that enables me to create both the visual and programming assets needed for a project.

		I want to thank you for taking an interest into me and my work.  And I would like to point out that everything on this site from graphics to scripting is created by me. I hope that you find the website and its content worthwhile and I hope that you consider me for your next project.`
]

function getHeader(pageIndex, languageIndex)
{
	return ` 

		<div class="header">
			<div class="buttonArea">
				${createHeaderButton(pageIndex, languageIndex, 0, "grid-area: buttonL; margin-right:0;")}
				${createHeaderButton(pageIndex, languageIndex, 1, "grid-area: buttonM;")}
				${createHeaderButton(pageIndex, languageIndex, 2, "grid-area: buttonR; margin-left:0;")}
			</div>
		</div>
	`;
}

// Simplified creation of  header button.
function createHeaderButton(pageIndex, languageIndex, buttonIndex, styleContent)
{
	return `<div class="${styleContent}" onclick="onPageSelection(${buttonIndex})"><div class="headerButtonText ${(pageIndex != buttonIndex) ? 'deactivatedButton' : ''}">${pageTitle[buttonIndex][languageIndex]}</div></div>`
}

function getFooter(languageIndex)
{
	let copyright = (languageIndex) ? 'Copyright 2020' : 'Opphavsrett 2020';
	let language = (languageIndex) ? 'Language: English' : 'Spr&aring;k: Norsk';

	return `
		<div class="footer">
			<div class="footerContent">
				<div class="footerContainer" style="grid-area: footerContainerL;"><p class="footerText" style="margin-left:0;"> ${language}<p></div>
				<div class="footerContainer toggleButton toggleButton${(languageIndex == 0) ? 'On' : 'Off'}" style="grid-area: footerContainerM;" onclick="languageSelection = (languageSelection == 0) ? 1 : 0; drawView();"></div>
				<div class="footerContainer" style="grid-area: footerContainerR;"><p class="footerText" style="margin-right:0;">${copyright}<p></div>
			</div>
		</div>
	`
}

function getContent(pageIndex, languageIndex)
{
	// Content Title
	let _titleText = titleText[currentPageIndex][languageIndex];
	let _titleSize = titleSize[currentPageIndex][languageIndex] + '%;';
	let _titleMargin = 'margin' + titleMargin[currentPageIndex] + ';';

	let textPanelStyle = 'width:40vmax; margin-left: 5vw; border-top: none; border-bottom:none; font-size:65%; overflow: auto; white-space:pre-line; padding:1vmax; color: rgba(255, 255, 255, 0.75)';

	if (pageIndex == 0) {
		return `	
				<div class="contentHead"><p class="title" style="${_titleMargin} font-size:${_titleSize} "> ${_titleText}</p></div>
				<div class="contentBody">
					<div class="glassPanel" style="${textPanelStyle}">${largeInfo[languageIndex]}</div>
					<div class="portrait" style="left:50%;"></div>
				</div>
				<div class="contentFoot"></div>
			   `;
	}
	else if (pageIndex == 1) {

	}
	else
	{

	}
}
