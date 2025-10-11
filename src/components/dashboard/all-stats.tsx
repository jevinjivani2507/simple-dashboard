import { TrendUpIcon, TrendDownIcon } from "@phosphor-icons/react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const StatCard = ({ title, value, change, isPositive }: StatCardProps) => {
  return (
    <div className="bg-accent flex flex-col gap-4 rounded-2xl p-6 transition-colors duration-300 hover:bg-blue-50">
      <h3 className="text-foreground text-md font-medium">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-foreground text-2xl font-bold">{value}</span>
        <div className="flex items-center gap-1">
          <span
            className={`text-sm font-medium ${isPositive ? "text-foreground" : "text-muted-foreground"}`}
          >
            {change}
          </span>
          {isPositive ? (
            <TrendUpIcon className="text-foreground h-4 w-4" />
          ) : (
            <TrendDownIcon className="text-muted-foreground h-4 w-4" />
          )}
        </div>
      </div>
    </div>
  );
};

const AllStats = () => {
  const stats = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      isPositive: true,
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      isPositive: false,
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      isPositive: true,
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      isPositive: true,
    },
  ];

  return (
    <div className="grid w-full grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default AllStats;
