function update_result(values, result, result_div)
{
	var n;

	n = 0;
	for (var value of values)
		n += (value.value - 1) * (18 / (value.max - 1));
	result.innerHTML = Math.floor(n * 100 / (values.length * 18));
	result_div.hidden = false;
}

/*
function update_result(values, result, result_div)
{
	var numbs = {};
	var vals = {};

	for (var value of values)
	{
		++numbs[value.scale];
		vals[value.scale] += value.value;
	}
	for (var value of vals)
	{
		console.log(value);
	}
}
*/

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
