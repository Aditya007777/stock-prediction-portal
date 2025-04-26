import React from "react";
import { ChartLine, TrendingUp, Users } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Button from "./Button";

const chartData = [
  { name: "Mon", value: 120 },
  { name: "Tue", value: 132 },
  { name: "Wed", value: 101 },
  { name: "Thu", value: 134 },
  { name: "Fri", value: 150 },
];

export default function MainLanding() {
  return (
    <main className="d-flex flex-column align-items-center justify-content-center min-vh-100 py-5 bg-gradient-to-br from-white to-[#f3f1fa] animate-fade-in">
      {/* Hero */}
      <section className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-primary mb-2">
          StockVision
        </h1>
        <p className="lead text-muted mb-4">
        This stock prediction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django framework.<br></br>
        It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.
        </p>

        {/* Login Button */}
        <Button text='Login' class='btn-primary btn-lg'/>



      </section>

      {/* Demo Animated Chart */}
      <section className="w-100 d-flex justify-content-center mb-5">
        <div className="bg-white rounded-3 shadow-xl p-4 w-75 w-sm-50 w-md-40">
          <div className="d-flex align-items-center mb-3">
            <ChartLine className="text-primary mr-2" size={24} />
            <span className="font-weight-semibold h5 text-primary"> StocKVision, where VISION = VISUAL </span>
          </div>
          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#9b87f5"
                strokeWidth={3}
                dot={{ r: 4, fill: "#fff", stroke: "#9b87f5", strokeWidth: 2 }}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="pt-3 d-flex justify-content-end">
            <TrendingUp className="text-success mr-1" size={18} />
            <span className="text-success font-weight-semibold">+4.2% this week</span>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="w-100 max-w-5xl d-grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="bg-white rounded-3 shadow-xl p-4 d-flex flex-column align-items-center transition-all hover:scale-105 hover:shadow-2xl">
          <TrendingUp className="mb-3 text-purple-500" size={36} />
          <h3 className="font-weight-bold h5 mb-2 text-primary">Smart Predictions with ML</h3>
          <p className="text-muted text-center">
            Predict stock movements using cutting-edge ML techniques like LSTM and Keras.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-3 shadow-xl p-4 d-flex flex-column align-items-center transition-all hover:scale-105 hover:shadow-2xl">
          <ChartLine className="mb-3 text-pink-400" size={36} />
          <h3 className="font-weight-bold h5 mb-2 text-primary">Real-Time Charts</h3>
          <p className="text-muted text-center">
            Visualize real-time prices and trends with interactive, material-inspired charts.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-3 shadow-xl p-4 d-flex flex-column align-items-center transition-all hover:scale-105 hover:shadow-2xl">
          <Users className="mb-3 text-blue-400" size={36} />
          <h3 className="font-weight-bold h5 mb-2 text-primary">Portfolio Insights</h3>
          <p className="text-muted text-center">
            Track your virtual portfolio and receive tailored growth analytics.
          </p>
        </div>
      </section>
    </main>
  );
}
