import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const ramdom = () => {
  const arr: { cx: number; cy: number; r: number; color: string }[] = [];
  for (let i = 0; i < 20; i++) {
    arr.push({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      r: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
  }

  return arr;
};

export default function Bubble() {
  const [init, setInit] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const circlesRef = useRef<SVGCircleElement[]>([]);
  const [selected, setSelected] = useState<number | null>(null);

  const [data] = useState(ramdom());

  useEffect(() => {
    const $box = boxRef.current;
    const $circles = circlesRef.current;

    if (!$box) return;

    const tooltip = d3
      .select($box)
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "#fff")
      .style("padding", "5px 10px")
      .style("border-radius", "5px")
      .style("font-size", "12px");

    const svg = d3
      .select($box)
      .append("svg")
      .attr("width", 1200)
      .attr("height", 1200)
      .style("transform", "translateZ(0)"); // GPU 가속을 위한 속성

    svgRef.current = svg.node();

    data.forEach((d, index) => {
      const circle = svg
        .append("circle")
        .attr("data-id", `d_${index}`)
        .attr("cx", d.cx * 12)
        .attr("cy", d.cy * 12)
        .attr("r", d.r * 1)
        .attr("fill", d.color)
        .on("mouseover", function () {
          d3.select(this).style("stroke", "black").style("stroke-width", "2px");

          tooltip
            .style("visibility", "visible")
            .text(
              `Circle ${index + 1}: (${d.cx.toFixed(1)}, ${d.cy.toFixed(1)})`
            );
        })
        .on("mouseout", function () {
          d3.select(this).style("stroke", "none").style("stroke-width", "none");
          tooltip.style("visibility", "hidden");
        });

      const circleNode = circle.node();

      if (circleNode) {
        $circles.push(circleNode);
      }
    });

    const timer = setInterval(() => {
      data.forEach((d, index) => {
        d.cx = Math.random() * 100;
        d.cy = Math.random() * 100;
        d.r = Math.random() * 100;
        d.color = `hsl(${Math.random() * 360}, 100%, 50%)`;

        d3.select($circles[index])
          .transition()
          .ease(d3.easeLinear)
          .duration(300)
          .attr("cx", d.cx * 12)
          .attr("cy", d.cy * 12)
          .attr("r", d.r * 1)
          .attr("fill", d.color);
      });
    }, 1500);

    setInit(true);

    return () => {
      console.log("remove!!");
      clearInterval(timer);

      tooltip.remove(); // 툴팁 제거

      $circles.forEach((circle) => {
        circle.remove();
      });

      circlesRef.current = [];

      if (svgRef.current) {
        svgRef.current.remove();
        svgRef.current = null;
      }
    };
  }, [data]);

  return <div id="box" ref={boxRef}></div>;
}
