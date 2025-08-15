import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "E-commerce Business Owner",
      content: "My VA helped me save 25 hours per week on admin tasks. I can finally focus on strategy and growth. Best investment I've made!",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Digital Marketing Agency",
      content: "The quality of work is exceptional. Our VA handles client communications, social media, and project management flawlessly.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Real Estate Investor",
      content: "I was skeptical at first, but my virtual assistant has become an integral part of my team. Professional, reliable, and efficient.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} className="w-5 h-5 fill-accent text-accent" />
    ));
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied business owners who've transformed their productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Content */}
                <blockquote className="text-card-foreground leading-relaxed text-lg">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;