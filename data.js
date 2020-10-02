// Page Title
const pageTitle = [['Om Meg', 'About'], ['Portfolio', 'Portfolio'], ['Kontakt', 'Contact']];

// Media Links
const email = 'Mads@GetAcademy.no';
const discord = 'MadsF#6295';

// Images
const buttonImages = ['iconProject.png', 'iconBlog.png'];
const iconImages = ['icon_Email.svg', 'icon_Discord.svg', 'icon_Youtube.svg', 'icon_Instagram.svg', 'icon_Facebook.svg', 'icon_ArrowL.svg', 'icon_ArrowR.svg'];

// Content Title
const titleText = [['< Hallo Verden >', '< Hello World >'], ['Image (0/0)', 'Image (0/0)'], ['La oss holde kontakten', 'Lets stay connected']];

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
				${createHeaderButton(pageIndex, languageIndex, 0, "grid-area: buttonL;")}
				${createHeaderButton(pageIndex, languageIndex, 1, "grid-area: buttonM;")}
				${createHeaderButton(pageIndex, languageIndex, 2, "grid-area: buttonR;")}
			</div>
		</div>
	`;
}

// Simplified creation of  header button.
function createHeaderButton(pageIndex, languageIndex, buttonIndex, styleContent)
{
	return `<div class="headerButton" style="${styleContent}" onclick="onPageSelection(${buttonIndex})"><div class="headerButtonText ${(pageIndex != buttonIndex) ? 'deactivatedButton' : ''}">${pageTitle[buttonIndex][languageIndex]}</div></div>`
}

function getFooter(languageIndex)
{
	let copyright = (languageIndex) ? 'Copyright 2020' : 'Opphavsrett 2020';
	let language = (languageIndex) ? 'Language: English' : 'Spr&aring;k: Norsk';

	return `
		<div class="footer">
			<div class="footerContent">
				<div class="footerContainer" style="grid-area: footerContainerL;"><p class="footerText"> ${language}<p></div>
				<div class="footerContainer toggleButton toggleButton${(languageIndex == 0) ? 'On' : 'Off'}" style="grid-area: footerContainerM;" onclick="languageSelection = (languageSelection == 0) ? 1 : 0; drawView();"></div>
				<div class="footerContainer" style="grid-area: footerContainerR;"><p class="footerText">${copyright}</p></div>
			</div>
		</div>
	`
}

function getContent(pageIndex, languageIndex)
{
	// Content Title
	let _titleText = titleText[currentPageIndex][languageIndex];

	if (pageIndex == 0)
	{
		return `	
		<div class="content">
			<div class="contentHead"><p class="aboutTitle title"> ${_titleText}</p></div>
			<div class="contentBody">
				<div class="glassPanel aboutContainer">${largeInfo[languageIndex]}</div>
				<div class="portrait" style="left:42.5%;"></div>
			</div>
			<div class="contentFoot"></div>
		</div>
		`;
	}
	else if (pageIndex == 1)
	{
		return `	
		<div class="content">
			<div class="contentHead"><p class="title" style="font-size:3vw"> ${mediaObject.title[languageIndex]} (${(mediaIndex + 1)}/${fetchAlbumLength()})</p></div>
				<div class="contentBody">
					<div class="imageContainer">
					<div class="arrow" style="grid-area: arrowL; background-image: url('images/${iconImages[5]}'); background-position:center left;" onclick="onMediaChange(-1);"></div>
					<div class="imageViewer glassPanel" style="background-image:url('${mediaObject.path}')">${getOverlayHTML(mediaObject, languageIndex)}</div>
					<div class="arrow" style="grid-area: arrowR; background-image: url('images/${iconImages[6]}'); background-position:center right;" onclick="onMediaChange(+1);"></div>
					</div>
				</div>
			<div class="contentFoot"></div>
		</div>
		`;
	}
	else
	{

		// Panel style
		let panelColor = 'background-color: rgba(0, 0, 0, 0);';

		// Paragraph style and language
		let projectText = (languageIndex == 0) ? 'Prosjekter' : 'Projects';
		let blogText = (languageIndex == 0) ? 'Blogg' : 'Blog';

		return `	
				<div class="content">
					<div class="contentHead"><p class="contactTitle title"> ${_titleText}</p></div>
					<div class="contentBody">
						<div class="glassPanel contactContainer">
							<div class="buttonPanel">
								<div class="glassPanel socialMediaPanel" style="${panelColor} grid-area:socialMedia">
									<div class="socialMediaIcon" style="background-image: url('images/${iconImages[2]}');"></div>
									<div class="socialMediaIcon" style="background-image: url('images/${iconImages[3]}');"></div>
									<div class="socialMediaIcon" style="background-image: url('images/${iconImages[4]}');"></div>
								</div>
								<div class="glassPanel largeButton" style="${panelColor} grid-area:largeButtonL; background-image: url('images/${buttonImages[0]}');">
									<p class="hiddenText">${projectText}</p>
								</div>
								<div class="glassPanel largeButton" style="${panelColor} grid-area:largeButtonR; background-image: url('images/${buttonImages[1]}');">
									<p class="hiddenText">${blogText}</p>
								</div>
								<div class="glassPanel textfield" style="${panelColor} grid-area:textfieldL; background-image: url('images/${iconImages[0]}')" ${OnTextFieldEnter(email)} ${OnTextFieldExit('Email')}>
									<p>Email</p>
								</div>
								<div class="glassPanel textfield" style="${panelColor} grid-area:textfieldR; background-image: url('images/${iconImages[1]}')" ${OnTextFieldEnter(discord)} ${OnTextFieldExit('Discord')}>
									<p>Discord</p>
								</div>
							</div>
						</div>
						<div class="portrait" style="right:42.5%;"></div>
					</div>
					<div class="contentFoot"></div>
				</div>
				`;
	}
}


function OnTextFieldEnter(text)
{
	return `onMouseEnter = "this.children[0].innerText = '${text}'; console.log(true);"`;
}

function OnTextFieldExit(text)
{
	return `onMouseLeave = "this.children[0].innerText = '${text}'; console.log(false);"`;
}
