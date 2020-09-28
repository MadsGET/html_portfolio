const pageTitle = [['Om Meg', 'About'], ['Portof&oslash;lje', 'Portfolio'], ['Kontakt', 'Contact']];

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
	if (pageIndex == 0) {

		// Text
		let title = (languageIndex) ? '< Hello World >' : '< Hallo Verden >';

		return `
				<div class="contentHead">
					<p class="contentTitle" style="padding-right:45%;">${title}<p>
				</div>
				<div class="contentBody" style="background-image: url('images/aboutFrame.svg');">
					<div class="contentBox">
							<div class="textArea">${largeInfo[languageIndex]}</div>
					</div>
				</div>
				<div class="contentOverlay" style="left:50%;"></div>
		`
	}
	else if (pageIndex == 1) {

	}
	else
	{
		// Text
		let title = (languageSelection) ? 'Lets stay connected' : 'La oss holde kontakten';
		let projectText = (languageSelection) ? 'Projects' : 'Prosjekter';
		let blogText = (languageSelection) ? 'Blog' : 'Blogg';

		return`
				<div class="contentHead">
					<p class="contentTitle" style="margin-right:0; text-align:right;">${title}<p>
				</div>
				<div class="contentBody" style="background-image: url('images/contactFrame.svg');">
						<div class="buttonContainer">
							<div style="grid-area: buttonsT; align-items:center; display:flex;">
								<div class="borderButton largeRoundButton" style="background-image:url('images/iconProject.png');">
									<p style="margin:auto;">${projectText}</p>
								</div>
								<div class="borderButton largeRoundButton" style="background-image:url('images/iconBlog.png');">
									<p style="margin:auto;">${blogText}</p>
								</div>
							</div>
							<div style="grid-area: buttonsM; align-items:center; display:flex;">
								<div class="smallButton borderButton"><p style="margin:auto;">Email</p></div>
								<div class="smallButton borderButton"><p style="margin:auto;">Discord</p></div>
							</div>
							<div style="grid-area: buttonsB; align-items:center; display:flex;">
								<div class="mediumButton borderButton"></div>
								<div class="mediumButton borderButton"></div>
								<div class="mediumButton borderButton"></div>
							</div>
						</div>
					</div>
				<div class="contentOverlay" style="left:0%;"></div>
				</div>
		`
	}
}
