function update(data)
{
	var text = JSON.parse(data);
	$('#totalText').html(text.f0);
}