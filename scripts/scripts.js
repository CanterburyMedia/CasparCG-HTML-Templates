function play ( )
{
    $('#totalText').html("1234 piggy");
}

function update(data)
{
	var text = JSON.parse(data);
	$('#totalText').html(text.f0);
}