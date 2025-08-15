import { Button } from "@/components/ui/button";
import { Calendar, Phone, Mail } from "lucide-react";

const Footer = () => {
  const handleBookCall = () => {
    // Placeholder for booking integration
    alert("Redirecting to booking page...");
  };

  return (
    <footer className="bg-gradient-to-r from-primary to-accent py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Book your free consultation call and discover how a virtual assistant can help you reclaim your time and grow your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleBookCall}
              variant="outline"
              size="lg"
              className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary-dark h-14 px-8 text-lg font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Free Consultation Call Now
            </Button>
          </div>

          <div className="pt-12 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>hello@yourvabusiness.com</span>
              </div>
            </div>
            
            <div className="mt-8 text-white/60 text-sm">
              <p>&copy; 2024 Virtual Assistant Services. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;