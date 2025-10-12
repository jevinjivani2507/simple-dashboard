"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "@/components/map";

interface LocationData {
  name: string;
  revenue: number;
  position: { x: number; y: number };
}

const locations: LocationData[] = [
  { name: "New York", revenue: 72, position: { x: 20, y: 30 } },
  { name: "San Francisco", revenue: 39, position: { x: 15, y: 35 } },
  { name: "Sydney", revenue: 25, position: { x: 80, y: 75 } },
  { name: "Singapore", revenue: 61, position: { x: 60, y: 55 } },
];

const RevenueByLocations = () => {
  const maxRevenue = 100;

  return (
    <Card className="bg-muted flex h-full w-full flex-col gap-0 border-0 shadow-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          Revenue by Location
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="relative h-40 w-full overflow-hidden rounded-lg">
          <Map className="h-full w-full" />
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-accent absolute h-2 w-2 rounded-full border-1 border-white"
              style={{
                left: `${location.position.x}%`,
                top: `${location.position.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>

        {/* Locations List */}
        <div className="space-y-3">
          {locations.map((location, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground font-medium">
                  {location.name}
                </span>
                <span className="text-foreground font-semibold">
                  {location.revenue}K
                </span>
              </div>
              <div className="bg-accent/50 h-1 w-full overflow-hidden rounded-full">
                <div
                  className="bg-accent h-full rounded-full transition-all"
                  style={{
                    width: `${(location.revenue / maxRevenue) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueByLocations;
