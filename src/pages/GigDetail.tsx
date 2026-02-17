import { useParams, Link } from "react-router-dom";
import { Star, Clock, ArrowLeft, Heart, Share2, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { gigs } from "@/data/mockData";

const reviews = [
  { name: "John D.", rating: 5, comment: "Absolutely incredible work! Delivered on time and exceeded expectations.", date: "2 weeks ago" },
  { name: "Alice K.", rating: 5, comment: "Very professional and communicative throughout the project.", date: "1 month ago" },
  { name: "Mark R.", rating: 4, comment: "Great quality, would hire again. Minor revisions needed but handled quickly.", date: "1 month ago" },
];

const GigDetail = () => {
  const { id } = useParams();
  const gig = gigs.find((g) => g.id === id);

  if (!gig) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium">Gig not found</p>
          <Button variant="outline" className="mt-4" asChild>
            <Link to="/gigs">Back to Gigs</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Link to="/gigs" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Gigs
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="overflow-hidden rounded-xl">
              <img src={gig.image} alt={gig.title} className="w-full aspect-video object-cover" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                {gig.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">{tag}</span>
                ))}
              </div>
              <h1 className="text-2xl font-bold md:text-3xl">{gig.title}</h1>
            </div>

            <div className="flex items-center gap-4">
              <img src={gig.freelancer.avatar} alt={gig.freelancer.name} className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{gig.freelancer.name}</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">{gig.freelancer.level}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-medium text-foreground">{gig.rating}</span>
                  <span>({gig.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">About This Gig</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{gig.description}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                I bring a detail-oriented approach to every project, ensuring pixel-perfect results and clean, maintainable code. 
                My process includes thorough requirements gathering, iterative development with regular check-ins, and comprehensive 
                testing before delivery.
              </p>
            </div>

            {/* Reviews */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Reviews ({gig.reviewCount})</h2>
              {reviews.map((review, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary font-semibold text-sm text-secondary-foreground">
                        {review.name[0]}
                      </div>
                      <span className="text-sm font-medium">{review.name}</span>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold">${gig.price}</span>
                  <span className="text-sm text-muted-foreground">per project</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {gig.deliveryDays}-day delivery</span>
                </div>
                <Button className="w-full" size="lg">
                  Purchase Gig
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" /> Contact Seller
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Heart className="mr-1 h-4 w-4" /> Save
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Share2 className="mr-1 h-4 w-4" /> Share
                  </Button>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Satisfaction Guaranteed
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Full refund if you're not satisfied with the final delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GigDetail;
