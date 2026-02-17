import { Package, MessageCircle, Star, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { orders } from "@/data/mockData";
import { Link } from "react-router-dom";

const statusColor: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Delivered: "bg-emerald-100 text-emerald-700",
  Completed: "bg-primary/10 text-primary",
};

const ClientDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Client Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, John 👋</p>
          </div>
          <Button asChild>
            <Link to="/gigs">
              <Search className="mr-2 h-4 w-4" /> Find Freelancers
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: "Active Orders", value: "2", icon: Package },
            { label: "Completed", value: "8", icon: ShoppingCart },
            { label: "Reviews Given", value: "6", icon: Star },
            { label: "Messages", value: "12", icon: MessageCircle },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
              <stat.icon className="mb-3 h-5 w-5 text-muted-foreground" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Orders */}
        <h2 className="mb-4 text-lg font-semibold">My Orders</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Order</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Gig</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Seller</th>
                  <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
                  <th className="px-4 py-3 text-right font-medium text-muted-foreground">Price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0 hover:bg-secondary/20 transition-colors">
                    <td className="px-4 py-3 font-medium">{order.id}</td>
                    <td className="px-4 py-3">{order.gigTitle}</td>
                    <td className="px-4 py-3 text-muted-foreground">{order.seller}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColor[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">${order.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
