import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Chocolate", orders: 40 },
  { name: "Vanilla", orders: 25 },
  { name: "Strawberry", orders: 30 },
];

const Dashboard = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Dashboard;
