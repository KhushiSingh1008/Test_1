import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide developers with a robust, production-ready foundation for building modern web applications with best practices built-in.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A passionate group of developers dedicated to creating tools and templates that make development faster and more enjoyable.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To empower developers worldwide to build exceptional web experiences without reinventing the wheel for every project.',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">ModernApp</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the future of web development, one component at a time. 
            Our mission is to provide developers with production-ready tools and templates.
          </p>
        </div>

        {/* Image Placeholder */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-large">
          <div className="aspect-video bg-gradient-primary flex items-center justify-center">
            <p className="text-white text-2xl font-semibold">Team Photo Placeholder</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-4">
              ModernApp started with a simple observation: developers spend too much time setting up 
              boilerplate code and infrastructure instead of building features that matter.
            </p>
            <p className="mb-4">
              We created this template to solve that problem. By combining the best tools and practices 
              in the React ecosystem, we've built a foundation that lets you start building immediately.
            </p>
            <p>
              Whether you're building a SaaS application, an e-learning platform, or a portfolio website, 
              ModernApp provides the structure and components you need to ship faster and with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
