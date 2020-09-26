const pageTitle = ['Contact', 'About', 'Portfolio'];

// Static text fields
const largeInfo = `Welcome to my portfolio site, I to want first thank you for taking an into intrest in me and my website.
Secondly I would like to note that everything in this website you see or interact with is created by yours truly. 
I began messing around with computer hardware and software at a young age. Later as I grew so did my intrest into the field of IT.
From building my own computer to creating video game assets such as 3D models and scripts. <br> <br>

The result is that over the years I have accumulated a wide skillset that enables me to rapidly create prototypes of games, 
applications and websites. Since I can master both the visual and programming side of things, the question I will pose to you is this;
Why hire one person for each job, why not hire one jack of all trades instead?`

function getHeader(pageIndex)
{
	return ` 

		<div class="header">
			<div class="buttonArea">
				<div class="headerButton" style="grid-area: buttonL;"><div class="headerButtonText ${(pageIndex != 1) ? 'deactivatedButton' : ''}">ABOUT</div></div>
				<div class="headerButton" style="grid-area: buttonM;"><div class="headerButtonText ${(pageIndex != 2) ? 'deactivatedButton' : ''}"">PORTFOLIO</div></div>
				<div class="headerButton" style="grid-area: buttonR;"><div class="headerButtonText ${(pageIndex != 3) ? 'deactivatedButton' : ''}"">CONTACT</div></div>
			</div>
		</div>
	`;
}

var aboutContent =
`
	<div class="aboutContent"></div>
`;
