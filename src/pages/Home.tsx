import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with modern React and Vite for optimal performance and developer experience.',
    },
    {
      icon: Shield,
      title: 'Production Ready',
      description: 'Complete CI/CD pipeline with automated testing and deployment to Vercel.',
    },
    {
      icon: Sparkles,
      title: 'Modern Design',
      description: 'Beautiful UI built with Tailwind CSS and customizable design system.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
              Build Modern Web Apps
              <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
                With Confidence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A professional React starter template with best practices, modern tooling, 
              and ready-to-deploy CI/CD pipeline. Start building your next project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A complete foundation for building modern web applications with all the features you expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of developers building amazing applications with our modern stack.
          </p>
          <Link to="/auth">
            <Button size="lg">
              Start Building Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
