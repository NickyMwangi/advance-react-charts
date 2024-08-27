import { color } from "framer-motion";

export const BasicBarOption = {
  xAxis: {
    type: "category",
    data: [
      "Jan `23",
      "Feb `23",
      "Mar `23",
      "Apr `23",
      "May `23",
      "Jun `23",
      "July `23",
      "Aug `23",
      "Sep `23",
      "Oct `23",
      "Nov `23",
      {
        value: "Dec `23",
        textStyle: {
          fontSize: 10,
          color: "#000",
          fontWeight: "bolder",
        },
      },
    ],
    fontSize: 10,
    nameTextStyle: {
      verticalAlign: "bottom",
    },

    axisLabel: {
      rotate: 90,
      fontSize: 10,
      verticalAlign: "middle",
    },
  },
  yAxis: {
    type: "value",
    show: false,
  },
  series: [
    {
      data: [22, 13, 35, 22, 35, 36, 18, 22, 35, 35, 19, 28],
      type: "bar",
      color: [
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#EAECF0",
        "#36D181",
      ],
      colorBy: "data",
      itemStyle: {
        borderRadius: [20, 20, 0, 0],
      },
      label: {
        normal: {
          show: true,
          position: "top",
          color: "#EAECF0",
        },
      },
    },
  ],
};

export const BasicStackedBarOption = {
  xAxis: {
    type: "category",
    data: [
      "Jan `23",
      "Feb `23",
      "Mar `23",
      "Apr `23",
      "May `23",
      "Jun `23",
      "July `23",
      "Aug `23",
      "Sep `23",
      "Oct `23",
      "Nov `23",
      {
        value: "Dec `23",
        textStyle: {
          fontSize: 10,
          color: "#000",
          fontWeight: "bolder",
        },
      },
    ],
    axisLabel: {
      rotate: 90,
      fontSize: 10,
      verticalAlign: "middle",
    },
  },
  yAxis: {
    type: "value",
  },
  legend: {
    selectedMode: false,
  },
  series: [
    {
      name: "Complete",
      type: "bar",
      stack: "total",
      barWidth: "40%",
      color: "#36D181",
      data: [22, 13, 35, 22, 35, 36, 18, 22, 35, 35, 19, 28],
      itemStyle: {
        borderRadius: [20, 20, 0, 0],
      },
    },
    {
      name: "C/O",
      type: "bar",
      stack: "total",
      barWidth: "40%",
      color: "#FC9F1E",
      data: [54, 12, 73, 29, 86, 41, 6, 95, 18, 67, 39, 50],
      itemStyle: {
        borderRadius: [0, 0, 20, 20],
      },
    },
    {
      name: "B/down",
      type: "bar",
      stack: "total",
      barWidth: "40%",
      color: "#FF5151",
      data: [91, 3, 27, 68, 45, 88, 14, 72, 50, 6, 35, 79],
      itemStyle: {
        borderRadius: [20, 20, 0, 0],
      },
    },
    {
      name: "Cancelled",
      type: "bar",
      stack: "total",
      barWidth: "40%",
      color: "#EAECF0",
      data: [87, 5, 63, 42, 18, 91, 36, 70, 24, 58, 10, 79],
      itemStyle: {
        borderRadius: [20, 20, 0, 0],
      },
    },
  ],
};
