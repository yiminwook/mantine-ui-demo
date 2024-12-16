import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const ramdom = () => {
  const arr: {
    cx: number;
    cy: number;
    r: number;
    color: string;
    idx: number;
  }[] = [];
  for (let i = 0; i < 20; i++) {
    arr.push({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      r: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      idx: i,
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

  const box2Ref = useRef<HTMLDivElement>(null);

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
      .style("transform", "translateZ(0)") // GPU 가속을 위한 속성
      .style("border", "1px solid black");

    console.log(svg.node()?.outerHTML);
    svgRef.current = svg.node();
    // svg
    //   .append("circle")
    //   .data(data)
    //   .attr("data-id", (d, i) => `d_${i}`)
    //   .attr("cx", (d) => d.cx * 12)
    //   .attr("cy", (d) => d.cy * 12)
    //   .attr("r", (d) => d.r * 1)
    //   .attr("fill", (d) => d.color)
    //   .on("mouseover", function (e, d) {
    //     d3.select(this).style("stroke", "black").style("stroke-width", "2px");

    //     tooltip
    //       .style("visibility", "visible")
    //       .text(
    //         `Circle ${d.idx + 1}: (${d.cx.toFixed(1)}, ${d.cy.toFixed(1)})`
    //       );
    //   })
    //   .on("mouseout", function () {
    //     d3.select(this).style("stroke", "none").style("stroke-width", "none");
    //     tooltip.style("visibility", "hidden");
    //   });

    // 100 ~ 1100

    data.forEach((d, index) => {
      const circle = svg
        .append("circle")
        .attr("data-id", `d_${index}`)
        .attr("cx", d.cx * 10 + 100)
        .attr("cy", d.cy * 10 + 100)
        .attr("r", d.r * 1)
        .attr("fill", d.color);

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
          .attr("cx", d.cx * 10 + 100)
          .attr("cy", d.cy * 10 + 100)
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

  useEffect(() => {
    const $box2 = box2Ref.current;
    if (box2Ref) {
      const $svg = d3
        .select($box2)
        .append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .style("border", "1px solid black");

      // 100 ~ 400 사이의 범위에서 원이 잘리지 않는다.
      $svg
        .append("circle")
        .attr("cx", 100)
        .attr("cy", 100)
        .attr("r", 100)
        .attr("fill", "red");

      $svg
        .append("circle")
        .attr("cx", 400)
        .attr("cy", 400)
        .attr("r", 100)
        .attr("fill", "blue");
    }
  }, []);

  return (
    <>
      <div id="box" ref={boxRef}></div>
      <div id="box2" ref={box2Ref}></div>
    </>
  );
}
