function getChartObject(
  cases: number,
  recovered: number,
  deaths: number,
  title: string[]
) {
  return {
    labels: [title[0], title[1], title[2]],
    datasets: [
      {
        data: [cases, recovered, deaths],
        backgroundColor: [
          "rgba(200, 0, 0, 0.5)",
          "rgba(15, 170, 0, 0.5)",
          "rgba(255, 0, 0, 0.75)",
        ],
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };
}

export default getChartObject;
