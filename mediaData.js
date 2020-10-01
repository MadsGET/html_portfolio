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
				['Toglinjer inn i mørket', 'Traintracks in gloom'],
				[
					'Jøss dette så kult ut',
					'Wow this looks cool.',
				]
			),

			new Media
			(
				'Whatever I want want2',
				['Regne refleksjon', 'Rain Reflection'],
				[
					'Når skal det stoppe å regne?',
					'When will it ever stop raining?',
				]
			),
		]),
	]