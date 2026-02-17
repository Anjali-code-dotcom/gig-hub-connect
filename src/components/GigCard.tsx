import { Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { Gig } from "@/data/mockData";

const GigCard = ({ gig }: { gig: Gig }) => {
  return (
    <Link
      to={`/gigs/${gig.id}`}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={gig.image}
          alt={gig.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <img
            src={gig.freelancer.avatar}
            alt={gig.freelancer.name}
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-foreground">{gig.freelancer.name}</span>
          {gig.freelancer.level === "Top Rated" && (
            <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
              {gig.freelancer.level}
            </span>
          )}
        </div>
        <h3 className="mb-3 text-sm font-medium leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {gig.title}
        </h3>
        <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-foreground">{gig.rating}</span>
            <span>({gig.reviewCount})</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {gig.deliveryDays}d delivery
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-3">
          <div className="flex gap-1.5">
            {gig.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wide text-muted-foreground">From</span>
            <span className="ml-1 text-base font-bold text-foreground">${gig.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
