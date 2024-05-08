export const DoughnutOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    right: 10,
    top: 30,
    bottom: 20,
  },
  series: [
    {
      color: ["#36D181", "#2E90FA", "#FC9F1E", "#FF5151", "#EAECF0"],
      name: "Access From",
      type: "pie",
      radius: ["60%", "80%"],
      avoidLabelOverlap: true,
      label: {
        show: true,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 5, name: "Active" },
        { value: 7, name: "Modified" },
        { value: 1, name: "Quoted" },
        { value: 3, name: "Rejected" },
        { value: 6, name: "Cancelled" },
      ],
    },
  ],
};

export const Nightingaleoption = {
  title: {
    text: "Nightingale Chart",
    subtext: "With radius and area mode",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    left: "center",
    top: "bottom",
    data: ["Active", "Modified", "Quoted", "Rejected", "Cancelled"],
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      color: ["#36D181", "#2E90FA", "#FC9F1E", "#FF5151", "#EAECF0"],
      name: "Radius Mode",
      type: "pie",
      radius: [20, 140],
      center: ["25%", "50%"],
      roseType: "radius",
      itemStyle: {
        borderRadius: 5,
      },
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      data: [
        { value: 5, name: "Active" },
        { value: 7, name: "Modified" },
        { value: 1, name: "Quoted" },
        { value: 3, name: "Rejected" },
        { value: 6, name: "Cancelled" },
      ],
    },
    {
      name: "Area Mode",
      type: "pie",
      radius: [20, 140],
      center: ["75%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 5,
      },
      data: [
        { value: 5, name: "Active" },
        { value: 7, name: "Modified" },
        { value: 1, name: "Quoted" },
        { value: 3, name: "Rejected" },
        { value: 6, name: "Cancelled" },
      ],
    },
  ],
};
