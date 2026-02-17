import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import GigCard from "@/components/GigCard";
import Footer from "@/components/Footer";
import { categories, gigs } from "@/data/mockData";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Active Freelancers", value: "12K+", icon: Users },
  { label: "Projects Completed", value: "48K+", icon: Zap },
  { label: "Satisfaction Rate", value: "98%", icon: Star },
  { label: "Secure Payments", value: "100%", icon: Shield },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Find the perfect{" "}
              <span className="text-primary">freelancer</span> for your project
            </h1>
            <p className="mb-8 text-lg opacity-70 md:text-xl">
              Connect with top talent worldwide. Get quality work done fast, with
              secure payments and guaranteed satisfaction.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link to="/gigs">
                  Browse Gigs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/dashboard/freelancer">Become a Seller</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="relative border-t border-background/10">
          <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs opacity-50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Popular Categories</h2>
            <p className="mt-1 text-sm text-muted-foreground">Browse services by category</p>
          </div>
          <Link to="/gigs" className="hidden text-sm font-medium text-primary hover:underline md:block">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <Link
                to={`/gigs?category=${encodeURIComponent(cat.name)}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="text-2xl">{cat.icon}</span>
                <div>
                  <div className="text-sm font-semibold group-hover:text-primary transition-colors">{cat.name}</div>
                  <div className="text-xs text-muted-foreground">{cat.gigCount.toLocaleString()} gigs</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="bg-surface">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Featured Gigs</h2>
              <p className="mt-1 text-sm text-muted-foreground">Handpicked services from top-rated freelancers</p>
            </div>
            <Link to="/gigs" className="hidden text-sm font-medium text-primary hover:underline md:block">
              View All →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gigs.slice(0, 4).map((gig, i) => (
              <motion.div
                key={gig.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <GigCard gig={gig} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to get started?</h2>
        <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
          Join thousands of freelancers and clients already using GigFlow to bring ideas to life.
        </p>
        <div className="flex justify-center gap-3">
          <Button size="lg" asChild>
            <Link to="/gigs">Find Talent</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/dashboard/freelancer">Start Selling</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
