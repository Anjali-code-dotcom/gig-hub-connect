import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className={`sticky top-0 z-50 border-b transition-colors ${isHome ? "bg-foreground text-background border-foreground/10" : "bg-card border-border"}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">G</span>
          </div>
          <span className="text-xl font-heading font-bold">GigFlow</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link to="/gigs" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            Browse Gigs
          </Link>
          <Link to="/dashboard/freelancer" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            Freelancer Dashboard
          </Link>
          <Link to="/dashboard/client" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
            Client Dashboard
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant={isHome ? "secondary" : "outline"} size="sm" asChild>
            <Link to="/gigs">
              <Search className="mr-2 h-4 w-4" /> Find Talent
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link to="/dashboard/freelancer">
              <User className="mr-2 h-4 w-4" /> Sign In
            </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`border-t p-4 md:hidden ${isHome ? "bg-foreground border-foreground/10" : "bg-card border-border"}`}>
          <div className="flex flex-col gap-3">
            <Link to="/gigs" onClick={() => setMobileOpen(false)} className="text-sm font-medium py-2">Browse Gigs</Link>
            <Link to="/dashboard/freelancer" onClick={() => setMobileOpen(false)} className="text-sm font-medium py-2">Freelancer Dashboard</Link>
            <Link to="/dashboard/client" onClick={() => setMobileOpen(false)} className="text-sm font-medium py-2">Client Dashboard</Link>
            <Button size="sm" className="mt-2" asChild>
              <Link to="/dashboard/freelancer" onClick={() => setMobileOpen(false)}>Sign In</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
