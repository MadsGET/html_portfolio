const mediaIcons = ['url(images/icon_Download.svg)', 'url(images/icon_Fullscreen.svg)', 'url(images/icon_Menu.svg)'];

class Media
{
	constructor(date, title, description)
	{
		this.date = date;
		this.title = title;
		this.description = description;
	}
}

class Album
{
	constructor(title, mediaArray)
	{
		this.title = title;
		this.mediaArray = mediaArray;
	}
}

let albums =
	[

		// #region Album Example
		//new Album('Album Name',
		//[
		//	new Media
		//	(
		//		'Creation Date',
		//		['Title NOR', 'Title ENG'],
		//		[
		//			'Description NOR',
		//			'Description ENG',
		//		]
		//	),
		//]),
		// #endregion

		// #region Album Web Design #1
		new Album(['Norsk', 'Engelsk'],
		[
			// 1
			new Media
			(
				'13.08.2020',
				['F&oslash;rste utkast', 'First draft'],
				[
					'Dette er hvor ideen om en portof&oslash;lje side begynte, det var under leksjon p&aring; Get Academy ang&aring;ende css grids.',
					'This is where my idea to start a portfolio website, that was during a lecture in Get Academy that introduced css grids.',
				]
			),

			// 2
			new Media
			(
				'16.08.2020',
				['Bilde fremviser', 'Image viewer'],
				[
					'Men f&oslash;rst s&aring; m&aring;tte jeg forsikre meg at jeg kunne lage en m&aring;te &aring; vise bilder p&aring; for siden.',
					'But first I needed to make sure that I was able to create an image viewer for the site.',
				]
			),

			
			// 3
			new Media
			(
				'16.08.2020',
				['Matrix inspirasjon', 'Matrix inspiration'],
				[
					'Jeg startet med &aring; bygge p&aring; den ideen med et scifi tema, selvf&oslash;lgelig da som alle andre kule programmerere m&aring;tte jeg ha animert matrix kode.',
					'I started to build up an idea in my head about doing a sci-fi themed website, with of course as any cool programmer should have animated matrix code.',
				]
			),

			// 4
			new Media
			(
				'21.08.2020',
				['F&oslash;rste scifi utkast', 'First scifi draft'],
				[
					'Dette ble det f&oslash;rste utkastet av scifi siden, som jeg kan se klart n&aring; s&aring; var designet over hele stedet. Men p&aring; den tiden var jeg meget forn&oslash;yd med dette.',
					'This is the first draft of a scifi themed website, as I can clearly see now the design was all over the place. But at the time I was very excited for this design.',
				]
			),

			// 5
			new Media
			(
				'21.08.2020',
				['Skuffelse', 'Dissapointment'],
				[
					'Ideene som jeg pr&oslash;ved &aring; n&aring; kombinere virket ikke i det hele tatt i praksis. Den animerte koden var altfor distraherende til og med hvis den bevegede seg veldig sakte.',
					'The ideas that I had now combined did not work at all in practice. The moving matrix code was to distracting even if it moved very slowly.',
				]
			),

			// 6
			new Media
			(
				'29.08.2020',
				['Andre scifi utkast', 'Second scifi draft'],
				[
					'Det andre utkastet f&oslash;ltes bedre men forsatt litt for amat&oslash;raktig. Men ideen om boksen i midten av siden med "3d" effekt ble med meg videre.',
					'The second draft was good but felt a bit like an amatures work. But the idea of the middle box "3d" glass effect stuck with me.',
				]
			),

			// 7
			new Media
			(
				'30.08.2020',
				['Tredje scifi utkast', 'Third scifi draft'],
				[
					'Jeg pr&oslash;vde n&aring; mikse opp fargevalget men det f&oslash;ltes ut forsatt ut som et amat&oslash;rs verk, det hadde ogs&aring; noen skalerings problemer i tilegg.',
					'I tried to mix up the colors but it just felt like the previous design a bit to amature like, and it had some scaleability issues.',
				]
			),

			// 8
			new Media
			(
				'07.09.2020',
				['Fjerde scifi utkast', 'Fourth scifi draft'],
				[
					'Dette er hvor jeg begynte bli mere oppmerksom p&aring; hva jeg &oslash;nsket. Jeg liker forsatt dette designet, men hadde tr&oslash;bbel med &aring; forsette design flyten til andre sider.',
					'This is where I started to become much more aware of what I wanted. I still like this design, but at this point I had trouble with design flow between each page.',
				]
			),

			// 9
			new Media
			(
				'09.09.2020',
				['F&oslash;rste kontakt utkast', 'First contact draft'],
				[
					'Jeg tenkte ideen om p&aring; ha et "online visittkort" var s&aring; morsomt at jeg m&aring;tte pr&oslash;ve det p&aring; kontakt siden.',
					'I found the idea of having an "online business card" to hand out to potential employers so amusing that I just had to try it.',
				]
			),

			// 10
			new Media
			(
				'10.09.2020',
				['Andre kontakt utkast', 'Second contact draft'],
				[
					'Litt bedre, men forsatt forferdelig. Jeg bestemte meg for p&aring; ta en pause med designet til kontakt siden.',
					'A bit better, but the design was terrible. I decided to move away from the contact page for the time being.',
				]
			),

			// 11
			new Media
			(
				'12.09.2020',
				['F&oslash;rste portof&oslash;lje utkast', 'First portfolio draft'],
				[
					'Som jeg skulle f&aring; l&aelig;re var jeg altfor langt over mitt eget hode med dette designet, det var bare for vanskelig for meg &aring; foresette flyten mellom hver side.',
					'As I was about to learn I was way over my head with this design, it was to hard for me to find a design flow between each page.',
				]
			),

			// 12
			new Media
			(
				'12.09.2020',
				['Andre portof&oslash;lje Utkast', 'Second portfolio draft'],
				[
					'Begynte &aring; se litt bedre ut men &oslash;delegger flyten mellom sidene for mye.',
					'Starting to look better but breaks most of the design flow between the pages.',
				]
			),

			
			// 13
			new Media
			(
				'12.09.2020',
				['Tredje portof&oslash;lje utkast', 'Third portfolio draft'],
				[
					'Dette er punktet hvor jeg sa til meg selv at jeg m&aring; radikalt endre mitt design valg. S&aring; endte jeg opp med &aring; bruke litt tid p&aring; &aring; pr&oslash;ve &aring; forbedre mine egenskaper.',
					'This became the point where I said to myself I need to radically change course of design flow. So I spent some time trying to improve my design skills.',
				]
			),

			// 14
			new Media
			(
				'23.09.2020',
				['M&oslash;rkt glass tema', 'Dark glass theme'],
				[
					'N&aring; hadde jeg fokus p&aring; &aring; pr&oslash;ve noe drastiskt nytt, og det gjorde jeg. Jeg &oslash;nsket noe minimalistisk og skalerbart. Dette designet oppn&aring;r begge de kravene, og skalerer fint for mobil og pc.',
					'I had it in my mind to drasticly change course and I did. I want something minimalistic and easily scaleable. This design achieves that and could scale easily for mobile and desktop.',
				]
			),

			// 15
			new Media
			(
				'25.09.2020',
				['Scifi gr&aring; tema', 'Scifi grey theme'],
				[
					'P&aring; dette punktet begynte jeg &aring; bli mye bedre p&aring; design flyt men ogs&aring; &aring; holde fokus p&aring; skalering.',
					'At this point I was starting to get much better at design flow and keeping in mind scaleability.',
				]
			),

			// 16
			new Media
			(
				'26.09.2020',
				['Portof&oslash;lje seksjonen', 'Portfolio Section'],
				[
					'Her var ideen at man skulle intuitivt forst&aring; at knappene p&aring; siden representerte tastur knapper. Slik at man kunne bruke tastaturet for &aring; g&aring; videre eller &aring; laste ned bildet.',
					'The idea here was that the buttons were supposed to look like keyboard buttons so it would be intuitive to press the relevant button to change pages or download easily.',
				]
			),

			// 17
			new Media
			(
				'26.09.2020',
				['Minimalisme', 'Minimalism'],
				[
					'Her er slutten p&aring; design ferden min, det er forsatt mye som ikke ble vist. Enten fordi det ble slettet eller at det ikke er visbart. Jeg har l&aelig;rt utrolig mye, og mener at ferden var verdt det.',
					'This is the end of the design journey, there is much more that I have not shown. Either because I have deleted it or its not worth showing. I have learnt alot, and think it was worth it.',
				]
			),
		]),
		// #endregion


	]