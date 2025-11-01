import { Card, CardContent } from '@/components/ui/card';
import { Bell, CheckCircle2, Info, AlertCircle, XCircle } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle2,
      title: 'Payment Successful',
      message: 'Your payment of $29.99 has been processed successfully.',
      time: '5 minutes ago',
      color: 'text-green-600',
      bg: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      id: 2,
      type: 'info',
      icon: Info,
      title: 'New Feature Available',
      message: 'Check out our new dashboard analytics features.',
      time: '1 hour ago',
      color: 'text-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      id: 3,
      type: 'warning',
      icon: AlertCircle,
      title: 'Profile Incomplete',
      message: 'Please complete your profile to unlock all features.',
      time: '2 hours ago',
      color: 'text-yellow-600',
      bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    },
    {
      id: 4,
      type: 'error',
      icon: XCircle,
      title: 'Action Required',
      message: 'Your subscription will expire in 3 days. Please renew.',
      time: '1 day ago',
      color: 'text-red-600',
      bg: 'bg-red-50 dark:bg-red-950/30',
    },
    {
      id: 5,
      type: 'info',
      icon: Bell,
      title: 'System Maintenance',
      message: 'Scheduled maintenance on Sunday, 2 AM - 4 AM UTC.',
      time: '2 days ago',
      color: 'text-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Notifications</span>
          </h1>
          <p className="text-muted-foreground">Stay updated with your latest activities and alerts</p>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card key={notification.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 ${notification.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-5 w-5 ${notification.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-base">{notification.title}</h3>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
