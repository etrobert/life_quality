/*function update_result(values, result, result_div)
{
	var n;

	n = 0;
	for (var value of values)
		n += (value.value - 1) * (18 / (value.max - 1));
	result.innerHTML = Math.floor(n * 100 / (values.length * 18));
	result_div.hidden = false;
}*/

function functionning_scale(scale)
{
	return (scale == "PF2" ||
		scale == "RF2" ||
			scale == "EF" ||
			scale == "CF" ||
			scale == "SF");
}

function ignore_scale(scale)
{
	return (scale == "FI" ||
		scale == "QL2");
}

function parse_values(values)
{
	var lists = new Map();

	for (var value of values)
	{
		cur_scale = value.getAttribute("scale");
		if (ignore_scale(cur_scale))
			break;
		if (lists.get(cur_scale) == undefined)
			lists.set(cur_scale, []);
		if (functionning_scale(cur_scale))
			lists.get(cur_scale).push(((value.max - 1) - (value.value - 1))
					* 100 / (value.max - 1));
		else
			lists.get(cur_scale).push((value.value - 1)
					* 100 / (value.max - 1));
	}
	return (lists);
}

function average(list)
{
	var n = 0;

	for (var k of list)
		n += k;
	return (n / list.length);
}

function calculate(lists)
{
	var n = 0;

	for (var [key, value] of lists)
	{
		k = average(value);
		n += k;
		console.log("Scale " + key + " has a score of " + k);
	}
	return (n / lists.size);
}

function update_result(values, result, result_div)
{
	for (var input of values)
	{
		if (input.value == "")
			return ;
	}
	var lists = parse_values(values);
	var n = calculate(lists);

	result.innerHTML = Math.floor(n);
	result_div.hidden = false;
}

function main()
{
	var	submit = document.getElementById("submit");
	var values = document.querySelectorAll(".value");
	var result = document.getElementById("result");
	var	result_div = document.getElementById("result_div");

	for (var input of values)
	{
		input.addEventListener("change", function(event) {
			var value = parseInt(this.value, 10);
			if (isNaN(value))
				this.value = this.min;
			if (value > parseInt(this.max, 10))
				this.value = this.max;
			else if (value < parseInt(this.min, 10))
				this.value = this.min;
		});
	}

	//submit.addEventListener("click", update_result.bind(null, event, values, result));
	submit.addEventListener("click", function (event) {
		event.preventDefault();
		update_result(values, result, result_div); });
}

main();
