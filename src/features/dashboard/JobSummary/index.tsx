import { Pie } from "@ant-design/charts";
import { Card, Typography } from "antd";
import React from "react";

const JobSummary = () => {
  const config = {
    data: [
      { type: "Published", value: 27 },
      { type: "Pending", value: 25 },
      { type: "Draft", value: 18 },
    ],
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.4,
    label: {
      text: (d: any) => `${d.type}\n ${d.value}`,
      position: "spider",
    },
    // legend: {
    //   color: {
    //     title: false,
    //     position: "right",
    //     rowPadding: 5,
    //   },
    // },
  };

  return (
    <Card>
      <Typography className="font-bold text-lg">Job Summary</Typography>
      <Pie {...config} />
    </Card>
  );
};

export default JobSummary;
