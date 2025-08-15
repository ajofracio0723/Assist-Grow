import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import heroImage from "@/assets/hero-va-professional.jpg";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for email integration
    console.log("Form submitted:", formData);
    alert("Thank you! Your free productivity blueprint will be sent to your email.");
    setFormData({ name: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Get More Done in Less Time –{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Hire Your Virtual Assistant Today
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Download our FREE 10-Day Productivity Blueprint and see how a VA can transform your business.
              </p>
            </div>

            {/* Opt-in Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Get Your Free Blueprint Now!
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl border-2 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 rounded-xl border-2 focus:border-primary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold"
                >
                  Download Free Blueprint
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                No spam. Unsubscribe at any time. Your information is safe with us.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:order-last">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              <img
                src={heroImage}
                alt="Professional virtual assistant working remotely"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;