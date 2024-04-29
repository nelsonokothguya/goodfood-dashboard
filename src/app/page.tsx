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
    <main>
      <header className="flex justify-between">
        <Header />
      </header>
      <div className="w-full h-full flex">
        <div className="w-1/5 border-r border-gray-300">
          <Sidenav />
        </div>
        <div className="w-1/2 h-full mt-24 border-l border-r border-gray-300">
          <div className="h-1/2 border-b border-gray-300">
            <RevenueChart />
          </div>
          <div className="flex w-full h-full">
            <RatingsChart />
            <div className="w-1/2 border-l border-gray-300">
              <MostOrderedFoodsList />
            </div>
          </div>
        </div>
        <div className="w-1/3 mt-24 border-l border-gray-300">
          <div>
            <OrderTimeChart />
          </div>
          <div className="border-t border-gray-300">
            <OrderTrendChart />
          </div>
        </div>
      </div>
    </main>
  );
}
