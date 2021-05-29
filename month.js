const monthSvg = d3.select("svg.month")

const radiusScale = d3.scaleSqrt()
	.domain([0, 30000])
	.range([0, 50])

const stepsFormat = d3.format(",.0f")

const monthGroups = monthSvg
	.selectAll("g")
	.data(monthData)
	.enter()
		.append("g")
	.attr("transform", (d, i) => {
    const x = (i % 7) * 125 + 60
    const y = Math.floor(i / 7) * 150 + 60
    return `translate(${x}, ${y})`
  })

monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("class", "ring")
	.attr("r", radiusScale(10000))

monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("class", "ring")
	.attr("r", radiusScale(20000))

monthGroups
	.append("circle")
	.attr("cx", 0)
	.attr("cy", 0)
	.attr("class", "actual")
	.attr("r", 10)
		.transition()
			.duration(250)
			.delay((d, i) => { return i * 30 + 500 })
			.ease(d3.easeCubicIn)
		.attr("r", (d, i) => { return radiusScale(d) })

monthGroups
	.append("text")
	.attr("class", "day")
	.attr("x", 0)
	.attr("y", 70)
	.text((d, i) => { return i + 1 })

monthGroups
	.append("text")
	.attr("class", "steps")
	.attr("x", 0)
	.attr("y", 70)
	.text((d, i) => { return stepsFormat(d) })
