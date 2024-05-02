import Sidenav from "./dashboard/sidenav";
import Header from "./dashboard/header";
import RevenueChart from "./dashboard/revenue-chart";
import OrderTimeChart from "./dashboard/order-time-chart";
import OrderTrendChart from "./dashboard/order-trend-chart";
import RatingsChart from "./dashboard/ratings-charts";
import MostOrderedFoodsList from "./dashboard/most-ordered-foods";
import { poppins } from "./dashboard/font";

export default function Page() {
  return (
    <main className="px-8">
      <header className="flex justify-between">
        <Header />
      </header>
      <div className="flex w-full h-full">
        <div className="w-1/6 h-full bg-gray-100 border-r border-gray-300">
          <Sidenav />
        </div>
        <div className="flex flex-col w-1/2 h-full mt-5 bg-white border-r border-gray-300">
          <div className="p-6 font-bold">
            <h1>Dashboard</h1>
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex-grow h-1/2 border-b border-gray-300">
              <RevenueChart />
            </div>
            <div className="flex w-full h-1/2">
              <div className="w-1/2">
                <RatingsChart />
              </div>
              <div className="w-1/2 border-l border-gray-300">
                <MostOrderedFoodsList />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full mt-24 bg-white">
          <div className="h-1/2">
            <OrderTimeChart />
          </div>
          <div className="h-1/2 border-t border-gray-300">
            <OrderTrendChart />
          </div>
        </div>
      </div>
    </main>
  );
}
