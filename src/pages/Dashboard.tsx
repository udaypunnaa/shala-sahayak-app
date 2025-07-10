
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
  AlertCircle
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
    { label: 'Present Today', value: '28/35', icon: Users, color: 'text-green-600' },
    { label: 'Pending Tasks', value: '12', icon: AlertCircle, color: 'text-orange-600' },
    { label: 'Completed Lessons', value: '4/6', icon: CheckCircle, color: 'text-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-gray-900">नमस्ते, प्रिया जी!</h1>
            <Button variant="outline" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-500">
                3
              </Badge>
            </Button>
          </div>
          <p className="text-gray-600">Wednesday, July 10th • Sunrise Primary School</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Today's Schedule */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-orange-600" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayClasses.map((class_, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <Clock className="h-4 w-4 text-gray-500 mb-1" />
                      <span className="text-sm font-medium">{class_.time}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{class_.subject}</h3>
                      <p className="text-sm text-gray-600">{class_.grade}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={class_.status === 'current' ? 'default' : 'secondary'}
                    className={class_.status === 'current' ? 'bg-green-500' : ''}
                  >
                    {class_.status === 'current' ? 'Now' : 'Upcoming'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button 
            className="h-24 flex-col gap-2 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => navigate('/attendance')}
          >
            <Users className="h-6 w-6" />
            <span className="text-sm">Take Attendance</span>
          </Button>
          
          <Button 
            className="h-24 flex-col gap-2 bg-green-500 hover:bg-green-600 text-white"
            onClick={() => navigate('/content')}
          >
            <BookOpen className="h-6 w-6" />
            <span className="text-sm">Generate Content</span>
          </Button>
          
          <Button 
            className="h-24 flex-col gap-2 bg-purple-500 hover:bg-purple-600 text-white"
            onClick={() => navigate('/reports')}
          >
            <BarChart3 className="h-6 w-6" />
            <span className="text-sm">View Reports</span>
          </Button>
          
          <Button 
            className="h-24 flex-col gap-2 bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => console.log('AI Assistant coming soon!')}
          >
            <AlertCircle className="h-6 w-6" />
            <span className="text-sm">AI Assistant</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
