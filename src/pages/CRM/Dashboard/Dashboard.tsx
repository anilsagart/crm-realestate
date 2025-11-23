import { CustomePieChart } from "../../../components/charts/CustomePieChart";
import { CustomBarChart } from "../../../components/charts/CustomBarChart"

export const Dashboard = () => {
      const revenueData = [
    { month: 'Jan', productA: 4000, productB: 2400 },
    { month: 'Feb', productA: 3000, productB: 1398 },
    { month: 'Mar', productA: 2000, productB: 9800 },
    { month: 'Apr', productA: 2780, productB: 3908 },
    { month: 'May', productA: 1890, productB: 4800 },
    { month: 'Jun', productA: 2390, productB: 3800 },
  ];

    return (
        <>Dashboard
         {/* <CustomBarChart
            data={revenueData}
            xAxisKey="month"
            barKeys={[
              { key: 'productA', color: '#8884d8', name: 'Product A' },
              { key: 'productB', color: '#82ca9d', name: 'Product B' }
            ]}
            height={300}
          />
           <CustomePieChart /> */}
        </>
    )
}