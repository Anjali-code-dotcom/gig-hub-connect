import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">G</span>
            </div>
            <span className="text-xl font-heading font-bold">GigFlow</span>
          </div>
          <p className="text-sm opacity-60">The modern marketplace connecting top freelancers with clients worldwide.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">For Clients</h4>
          <ul className="space-y-2 text-sm opacity-60">
            <li><Link to="/gigs" className="hover:opacity-100 transition-opacity">Browse Gigs</Link></li>
            <li><Link to="/gigs" className="hover:opacity-100 transition-opacity">Post a Project</Link></li>
            <li><Link to="/gigs" className="hover:opacity-100 transition-opacity">How It Works</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">For Freelancers</h4>
          <ul className="space-y-2 text-sm opacity-60">
            <li><Link to="/dashboard/freelancer" className="hover:opacity-100 transition-opacity">Start Selling</Link></li>
            <li><Link to="/dashboard/freelancer" className="hover:opacity-100 transition-opacity">Community</Link></li>
            <li><Link to="/dashboard/freelancer" className="hover:opacity-100 transition-opacity">Resources</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Company</h4>
          <ul className="space-y-2 text-sm opacity-60">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">About</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Careers</Link></li>
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-background/10 pt-6 text-center text-xs opacity-40">
        © 2026 GigFlow. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
