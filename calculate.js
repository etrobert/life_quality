function update_result(values, result)
{
	var n;

	n = 0;
	for (var value of values)
	{
		if (value.max == "7")
			n += (parseInt(value.value) - 1) * 3;
		else if (value.max == "4")
			n += (parseInt(value.value) - 1) * 6;
		else if (value.max == "2")
			n += (parseInt(value.value) - 1) * 18;
		else
			console.log("Wrong max");
	}
	result.innerHTML = Math.floor(n * 100 / (values.length * 18));
}

function cancel(event)
{
	event.preventDefault();
}

function main()
{
	var	submit = document.getElementById("submit");
	var values = document.querySelectorAll(".value");
	var result = document.getElementById("result");

	//submit.addEventListener("click", update_result.bind(null, event, values, result));
	submit.addEventListener("click", function (event) {
		event.preventDefault();
		update_result(values, result); });
}

main();
