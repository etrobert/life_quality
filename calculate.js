function update_result(values, result, result_div)
{
	var n;

	n = 0;
	for (var value of values)
	{
		if (value.max == "7")
			n += (value.value - 1) * 3;
		else if (value.max == "4")
			n += (value.value - 1) * 6;
		else if (value.max == "2")
			n += (value.value - 1) * 18;
		else
			console.log("Wrong max");
	}
	result_div.hidden = false;
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
	var	result_div = document.getElementById("result_div");

	//submit.addEventListener("click", update_result.bind(null, event, values, result));
	submit.addEventListener("click", function (event) {
		event.preventDefault();
		update_result(values, result, result_div); });
}

main();
