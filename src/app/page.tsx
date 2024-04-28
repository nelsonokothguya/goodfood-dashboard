import Sidenav from "./dashboard/sidenav";
import Header from "./dashboard/header";
import RevenueChart from "./dashboard/revenue-chart";
import OrderTimeChart from "./dashboard/order-time-chart";
import OrderTrendChart from "./dashboard/order-trend-chart";
import RatingsChart from "./dashboard/ratings-charts";
import MostOrderedFoodsList from "./dashboard/most-ordered-foods";

export default function Page() {
  return (
    <main>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        <Header />
        {/* <RevenueChart /> */}

        {/* <Sidenav />
        <OrderTimeChart /> */}
        {/* <OrderTrendChart /> */}
        {/* <RatingsChart /> */}
        {/* <MostOrderedFoodsList /> */}
      </div>
    </main>
  );
}
