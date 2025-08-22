import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  BookOpen,
  Users,
  Clock,
  Edit,
  Star,
  TrendingUp,
  Target,
  CheckCircle
} from 'lucide-react';

const Profile = () => {
  const teacher = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@sunrise.edu',
    phone: '+91 98765 43210',
    address: 'Sunrise Primary School, Village Ramnagar',
    employeeId: 'TE001',
    joinDate: 'August 2020',
    qualification: 'B.Ed, M.A. in English',
    experience: '8 years',
    subjects: ['English', 'Mathematics', 'Science', 'Hindi'],
    grades: ['Class 3', 'Class 4', 'Class 5']
  };

  const achievements = [
    {
      title: 'Best Teacher Award',
      year: '2023',
      description: 'Outstanding performance in student engagement',
      icon: Award
    },
    {
      title: 'Digital Teaching Excellence',
      year: '2023',
      description: 'Innovation in online teaching methods',
      icon: Star
    },
    {
      title: 'Student Progress Champion',
      year: '2022',
      description: 'Highest improvement in student performance',
      icon: TrendingUp
    }
  ];

  const analytics = {
    attendance: { percentage: 92, trend: '+5%' },
    tasks: { completed: 85, pending: 15 },
    classes: { taken: 450, rating: 4.9 },
    career: { courses: 3, certificates: 2 }
  };

  const statistics = [
    { label: 'Attendance %', value: `${analytics.attendance.percentage}%`, icon: Users, color: 'text-primary', bgColor: 'bg-primary/10', trend: analytics.attendance.trend },
    { label: 'Task Completion', value: `${analytics.tasks.completed}%`, icon: CheckCircle, color: 'text-success', bgColor: 'bg-success/10' },
    { label: 'Classes Rating', value: analytics.classes.rating, icon: Star, color: 'text-warning', bgColor: 'bg-warning/10' },
    { label: 'Certificates', value: analytics.career.certificates, icon: Award, color: 'text-accent', bgColor: 'bg-accent/10' },
  ];

  return (
    <div className="min-h-screen bg-gradient-surface pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <div className="app-header p-6 mb-6 slide-up">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Teacher Profile</h1>
              <p className="text-muted-foreground text-sm">Manage your information & achievements</p>
            </div>
            <Button variant="glass" size="icon" className="rounded-full">
              <Edit className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Profile Card */}
        <Card className="glass-card border-0 shadow-lg mb-6 slide-up">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <User className="h-12 w-12 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-1">{teacher.name}</h2>
              <p className="text-muted-foreground">Primary School Teacher</p>
              <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">
                Employee ID: {teacher.employeeId}
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{teacher.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Phone className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{teacher.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <MapPin className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium text-foreground">{teacher.address}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <Calendar className="h-4 w-4 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Joined</p>
                  <p className="font-medium text-foreground">{teacher.joinDate}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {statistics.map((stat, index) => (
            <Card key={index} className="glass-card border-0 shadow-lg interactive-hover slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-4 text-center">
                <div className={`${stat.bgColor} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="flex items-center justify-center gap-1">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  {stat.trend && (
                    <span className="text-xs text-success font-medium">{stat.trend}</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Details */}
        <Card className="glass-card border-0 shadow-lg mb-6 slide-up" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Professional Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Qualification</p>
              <p className="font-medium text-foreground">{teacher.qualification}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Experience</p>
              <p className="font-medium text-foreground">{teacher.experience}</p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Subjects Teaching</p>
              <div className="flex flex-wrap gap-2">
                {teacher.subjects.map((subject, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-2">Grade Levels</p>
              <div className="flex flex-wrap gap-2">
                {teacher.grades.map((grade, idx) => (
                  <Badge key={idx} variant="outline" className="border-accent/20 text-accent">
                    {grade}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="glass-card border-0 shadow-lg slide-up" style={{ animationDelay: '500ms' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-warning" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-card/50 rounded-lg">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <achievement.icon className="h-4 w-4 text-warning" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{achievement.year}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;