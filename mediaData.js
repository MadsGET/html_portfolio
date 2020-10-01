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
		new Album('Default Album',
		[
			new Media
			(
				'Whatever I want want',
				['Toglinjer inn i m�rket', 'Traintracks in gloom'],
				[
					'J�ss dette s� kult ut',
					'Wow this looks cool.',
				]
			),

			new Media
			(
				'Whatever I want want2',
				['Regne refleksjon', 'Rain Reflection'],
				[
					'N�r skal det stoppe � regne?',
					'When will it ever stop raining?',
				]
			),
		]),
	]