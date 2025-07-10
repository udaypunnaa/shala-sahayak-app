
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Bell, 
  Users, 
  BookOpen, 
  BarChart3, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Zap
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  const todayClasses = [
    { time: '09:00', subject: 'Mathematics', grade: 'Class 5', status: 'upcoming' },
    { time: '10:30', subject: 'Hindi Literature', grade: 'Class 3-4', status: 'current' },
    { time: '12:00', subject: 'Science', grade: 'Class 5', status: 'upcoming' },
    { time: '14:00', subject: 'Social Studies', grade: 'Class 4', status: 'upcoming' }
  ];

  const quickStats = [
    { label: 'Present Today', value: '28/35', icon: Users, color: 'text-success', bgColor: 'bg-success/10' },
    { label: 'Pending Tasks', value: '12', icon: AlertCircle, color: 'text-warning', bgColor: 'bg-warning/10' },
    { label: 'Completed Lessons', value: '4/6', icon: CheckCircle, color: 'text-primary', bgColor: 'bg-primary/10' },
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <div className="app-header p-6 mb-6 slide-up">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Hello, Sarah! 👋</h1>
              <p className="text-muted-foreground text-sm">Sunrise Primary School</p>
            </div>
            <Button variant="glass" size="icon" className="relative pulse-glow">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                3
              </Badge>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Wednesday, July 10th
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="glass-card border-0 shadow-lg interactive-hover slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className={`${stat.bgColor} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Today's Schedule */}
        <Card className="glass-card border-0 shadow-lg mb-6 slide-up" style={{ animationDelay: '300ms' }}>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-lg">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayClasses.map((class_, index) => (
              <div key={index} className="p-4 rounded-xl bg-card/50 border border-border/50 interactive-hover">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center bg-primary/10 rounded-lg p-2 min-w-[60px]">
                      <Clock className="h-4 w-4 text-primary mb-1" />
                      <span className="text-xs font-medium text-primary">{class_.time}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{class_.subject}</h3>
                      <p className="text-xs text-muted-foreground">{class_.grade}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={class_.status === 'current' ? 'default' : 'secondary'}
                    className={class_.status === 'current' ? 'bg-primary text-primary-foreground pulse-glow' : 'bg-secondary/50'}
                  >
                    {class_.status === 'current' ? '▶ Live' : 'Upcoming'}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button 
            size="lg"
            variant="premium"
            className="h-20 flex-col gap-3 rounded-2xl"
            onClick={() => navigate('/attendance')}
          >
            <Users className="h-6 w-6" />
            <span className="text-sm font-medium">Take Attendance</span>
          </Button>
          
          <Button 
            size="lg"
            variant="glass"
            className="h-20 flex-col gap-3 rounded-2xl bg-success/10 border-success/20 text-success hover:bg-success/20"
            onClick={() => navigate('/content')}
          >
            <Sparkles className="h-6 w-6" />
            <span className="text-sm font-medium">AI Content</span>
          </Button>
          
          <Button 
            size="lg"
            variant="glass"
            className="h-20 flex-col gap-3 rounded-2xl bg-accent/10 border-accent/20 text-accent hover:bg-accent/20"
            onClick={() => navigate('/reports')}
          >
            <TrendingUp className="h-6 w-6" />
            <span className="text-sm font-medium">Analytics</span>
          </Button>
          
          <Button 
            size="lg"
            variant="glass"
            className="h-20 flex-col gap-3 rounded-2xl bg-warning/10 border-warning/20 text-warning hover:bg-warning/20"
            onClick={() => console.log('AI Assistant coming soon!')}
          >
            <Zap className="h-6 w-6" />
            <span className="text-sm font-medium">AI Assistant</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
