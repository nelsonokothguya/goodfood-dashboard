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
    <main className="px-4 sm:px-8 py-4 sm:py-8">
      <header>
        <Header />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 w-full h-full">
        <div className="col-span-1 md:col-span-2 bg-gray-100  p-4 md:p-0">
          <Sidenav />
        </div>

        <div className="col-span-1 md:col-span-10 flex flex-col gap-6">
          <div className="bg-white overflow-hidden p-2 flex-grow ">
            <h1 className="font-bold text-2xl">Dashboard</h1>
          </div>

          <div className="grid grid-cols-10 gap-1">
            <div className="col-span-10 md:col-span-6 bg-white shadow-lg rounded-lg overflow-hidden flex-grow">
              <div className="p-6">
                <RevenueChart />
              </div>
            </div>

            <div className="col-span-10 md:col-span-4 bg-white shadow-lg rounded-lg overflow-hidden flex-grow">
              <div className="p-6">
                <OrderTimeChart />
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow col-span-10 md:col-span-3">
              <div className="p-6">
                <RatingsChart />
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow col-span-10 md:col-span-3">
              <div className="p-6">
                <MostOrderedFoodsList />
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-grow col-span-10 md:col-span-4">
              <div className="p-6">
                <OrderTrendChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
