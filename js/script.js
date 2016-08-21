function showMessageDetail()
{
	if(window.matchMedia( "(max-width: 768px)" ).matches)
	{
		$('#message_details').hide();
		//$('#message_menu_close_button').show();
	}
	else
	{
		$('#message_threades').show();
		$('#message_details').show();
		$('#message_menu_close_button').hide();
	}
}

$(window).resize(function()
{
	showMessageDetail();
});

$(document).ready(function()
{
	showMessageDetail();

	$('.inbox_titles li').click(function(event)
	{
		if(window.matchMedia( "(max-width: 768px)" ).matches)
		{
			$('#message_menu_close_button').show();
			$('#message_details').show();
			$('#message_threades').hide();

		}
	});
	$('#message_menu_close_button').click(function(event)
	{
		$('#message_menu_close_button').hide();
		if(window.matchMedia( "(max-width: 768px)" ).matches)
		{
			$('#message_details').hide();
			$('#message_threades').show();
		}
	});
});