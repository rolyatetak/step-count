const todaySvg = d3.select("svg.today")

const barScale = d3.scaleLinear()
	.domain([0, 2000])
	.range([1, 112])

const hourFormat = d3.format("02")
const stepFormat = d3.format(",.0f")

const todayGroups = todaySvg
	.selectAll("g")
	.data(todayData)
	.enter()
		.append("g")
	.attr("transform", (d, i) => { return "translate(" + (i * 36) + ", 0)" })

todayGroups
	.append("rect")
	.attr("y", (d, i) => { return 120 })
	.attr("x", 0)
	.attr("width", 24)
	.attr("height", 0)
		.transition()
			.duration(1000)
			.delay((d, i) => { return i * 20 + 200 })
		.attr("y", (d, i) => { return 120 - barScale(d) })
		.attr("height", (d, i) => { return barScale(d) })

todayGroups
	.append("text")
	.attr("x", 12)
	.attr("y", 140)
	.attr("class", "hours")
	.text((d, i) => { return hourFormat(i) })

todayGroups
	.append("text")
	.attr("x", 12)
	.attr("y", (d, i) => { return 110 - barScale(d) })
	.attr("class", "steps")
	.text((d, i) => { return stepFormat(d) })





