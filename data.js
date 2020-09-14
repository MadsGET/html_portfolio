const urlButtonL = ['buttonLarge_Contact', 'buttonLarge_About', 'buttonLarge_Portfolio'];
const urlButtonS = ['buttonSmall_Contact', 'buttonSmall_About', 'buttonSmall_Portfolio'];
const contentAnimState = ['fadeIn', 'fadeOut'];

// Static text fields
const largeInfo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend quis lorem molestie sagittis. Donec tempus, purus sit amet blandit scelerisque, tellus quam dignissim orci, quis tempus mi tortor sed urna. Vestibulum eget dolor quis magna efficitur tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Nulla facilisi. Morbi et orci eget eros congue fermentum. Aenean interdum luctus mi, ut maximus erat ultrices vitae. Aenean blandit tempor ornare. Duis nisi dolor, condimentum quis dolor vitae, volutpat bibendum odio. Quisque congue nulla odio. In ultricies, eros eu condimentum dignissim, nisl dui ultrices ligula, vitae blandit risus dui dictum dolor. Class aptent taciti sociosquo.`

// Static HTML code
function getHeader(buttonIndex)
{
	return  `<div class="header"></div>` 
	
}

// Defunct
function getContent(index)
{
	if (index == 0) {
		return content0HTML;
	}
	else if (index == 1)
	{
		return content1HTML;
	}
}

var content0HTML = `<div class="content"></div>`;

var footerHTML = `<div class="footer"></div>`;