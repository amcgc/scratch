import React, { Component } from "react";
import * as d3 from "d3";

class FirstBarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBaChart.bind(this);
    this.state = {
      category: "math"
    };

    this.data = [
      { name: "Alice", math: 93, science: 300 },
      { name: "Bobby", math: 81, science: 97 },
      { name: "Carol", math: 74, science: 88 },
      { name: "David", math: 64, science: 76 },
      { name: "Emily", math: 80, science: 94 }
    ];
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const bars = d3
      .select(this.node)
      .selectAll("div")
      .data(this.data, d => d.name);

    // append new bars as required, starting with a zero width
    const newBars = bars
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("width", 0);

    newBars
      .merge(bars)
      .transition()
      .style("width", d => {
        return `${d[this.state.category]}px`;
      });
  }

  render() {
    return (
      <div>
        <div ref={node => (this.node = node)}>some content</div>
        <button onClick={() => this.setState({ category: "science" })}>
          Science
        </button>
        <button onClick={() => this.setState({ category: "math" })}>
          Math
        </button>
      </div>
    );
  }
}

export default FirstBarChart;
