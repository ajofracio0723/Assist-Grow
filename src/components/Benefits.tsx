import { Clock, Users, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Time Savings",
      description: "Reclaim 20+ hours per week by delegating routine tasks to skilled professionals. Focus on what matters most - growing your business."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Professional Support",
      description: "Access experienced virtual assistants with specialized skills in admin, marketing, customer service, and more."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Scalability",
      description: "Scale your support team up or down based on your needs. No overhead costs, contracts, or office space required."
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose a Virtual Assistant?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business operations with dedicated support that works around your schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="bg-primary-light rounded-full p-6">
                  {benefit.icon}
                </div>
                
                <h3 className="text-2xl font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;