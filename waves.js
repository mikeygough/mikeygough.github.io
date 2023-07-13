import { select, range } from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const data = range(15);

svg.selectAll('circle')
  .data(data)
  .enter()
  .append('circle');