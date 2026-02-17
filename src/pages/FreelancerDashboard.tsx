import { BarChart3, Package, MessageCircle, Star, DollarSign, Plus, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gigs, orders } from "@/data/mockData";
import { Link } from "react-router-dom";

const myGigs = gigs.slice(0, 3);
const myOrders = orders.filter((o) => o.seller === "Alex Chen" || o.seller === "Sarah Miller");

const statusColor: Record<string, string> = {
  Pending: "bg-amber-100 text-amber-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Delivered: "bg-emerald-100 text-emerald-700",
  Completed: "bg-primary/10 text-primary",
};

const FreelancerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Freelancer Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, Alex 👋</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create New Gig
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: "Total Earnings", value: "$4,280", icon: DollarSign, trend: "+12%" },
            { label: "Active Orders", value: "3", icon: Package, trend: "+2" },
            { label: "Total Reviews", value: "234", icon: Star, trend: "+8" },
            { label: "Profile Views", value: "1.2K", icon: TrendingUp, trend: "+24%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center justify-between">
                <stat.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-medium text-primary">{stat.trend}</span>
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* My Gigs */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">My Gigs</h2>
            <div className="space-y-3">
              {myGigs.map((gig) => (
                <Link
                  key={gig.id}
                  to={`/gigs/${gig.id}`}
                  className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary/30"
                >
                  <img src={gig.image} alt={gig.title} className="h-20 w-28 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium line-clamp-1">{gig.title}</h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {gig.rating} ({gig.reviewCount}) · ${gig.price}
                    </div>
                    <div className="mt-2 flex gap-1.5">
                      {gig.tags.map((t) => (
                        <span key={t} className="rounded bg-secondary px-1.5 py-0.5 text-[10px] text-secondary-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <div className="space-y-3">
              {orders.map((order) => (
                <div key={order.id} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium">{order.gigTitle}</p>
                      <p className="text-xs text-muted-foreground">{order.buyer} · {order.date}</p>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusColor[order.status]}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-semibold">${order.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
