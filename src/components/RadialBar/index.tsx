import React from "react";
// import Chart from "react-apexcharts";

interface RadialBarProps {
    seriesVal : string
}

const RadialBar = ({seriesVal}: RadialBarProps) => {
    const state = {
        options: {
            plotOptions: {
                radialBar: {
                    size: undefined,
                    inverseOrder: false,
                    startAngle: -180,
                    endAngle: 180,
                    offsetX: 0,
                    offsetY: 0,

                    track: {
                        show: true,
                        startAngle: undefined,
                        endAngle: undefined,
                        background: "#f2f2f2",
                        strokeWidth: "97%",
                        opacity: 1,
                        margin: 5,
                        dropShadow: {
                            enabled: false,
                            top: 0,
                            left: 0,
                            blur: 3,
                            opacity: 0.5
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: "22px",
                            fontFamily: undefined,
                            color: undefined,
                            offsetY: -10
                        },
                        value: {
                            show: true,
                            fontSize: "16px",
                            fontFamily: undefined,
                            color: undefined,
                            offsetY: 16,
                            formatter: function (val: any) {
                                return val + "%";
                            }
                        },
                        total: {
                            show: true,
                            label: "ROI",
                            color: "#373d3f",
                            formatter: function (w: any) {
                                return (
                                    w.globals.seriesTotals.reduce((a: any, b: any) => {
                                        return a + b;
                                    }, 0) /
                                    w.globals.series.length +
                                    "%"
                                );
                            }
                        }
                    }
                }
            }
        },

        series: [90]
    };

    return (
        <div className="donut">
            {/* <Chart
                options={state.options}
                series={state.series}
                type="radialBar"
                width="380"
            /> */}
        </div>
    );
}

export default RadialBar;
