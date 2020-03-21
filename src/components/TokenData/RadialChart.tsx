import { PieChart } from 'react-minimal-pie-chart';

interface Item {
    title?: string | number;
    color: string;
    value: number;
    key?: string | number;
    [key: string]: any;
}
interface RadialChartProps {
    data: Item[],
    value: number,
    title: string,
}

const RadialChart = ({data, value, title}: RadialChartProps) => {
    return (
        <div className="flex flex-col w-[30%] justify-center items-center">
            <div className="rotate-[4deg]">
                <PieChart data={data} totalValue={100} background="rgb(248, 248, 249)" startAngle={-90} />
            </div>
            <span className="font-bold">{value}%</span>
            <span className="font-bold">{title}</span>
        </div>

    )
}

export default RadialChart;