import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Plus, 
  User, 
  Award,
  TrendingUp,
  AlertCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const students = [
    {
      id: 1,
      name: 'Arjun Sharma',
      grade: 'Class 5',
      attendance: 95,
      performance: 'Excellent',
      status: 'active',
      phone: '+91 98765 43210',
      email: 'arjun.parent@email.com',
      address: 'Village Ramnagar',
      subjects: ['Math', 'Science', 'Hindi'],
      recentScore: 92
    },
    {
      id: 2,
      name: 'Priya Patel',
      grade: 'Class 4',
      attendance: 88,
      performance: 'Good',
      status: 'active',
      phone: '+91 87654 32109',
      email: 'priya.parent@email.com',
      address: 'Village Sundarpur',
      subjects: ['English', 'Math', 'Art'],
      recentScore: 85
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      grade: 'Class 3',
      attendance: 78,
      performance: 'Needs Attention',
      status: 'attention',
      phone: '+91 76543 21098',
      email: 'rahul.parent@email.com',
      address: 'Village Krishnapur',
      subjects: ['Hindi', 'Math'],
      recentScore: 65
    },
    {
      id: 4,
      name: 'Ananya Singh',
      grade: 'Class 5',
      attendance: 92,
      performance: 'Very Good',
      status: 'active',
      phone: '+91 65432 10987',
      email: 'ananya.parent@email.com',
      address: 'Village Govindpur',
      subjects: ['Science', 'English', 'Math'],
      recentScore: 89
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case 'Excellent':
        return 'bg-success/10 text-success border-success/20';
      case 'Very Good':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Good':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'Needs Attention':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-secondary/10 text-secondary-foreground border-secondary/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-surface pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <div className="app-header p-6 mb-6 slide-up">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Student Management</h1>
              <p className="text-muted-foreground text-sm">Track progress & manage students</p>
            </div>
            <Button variant="premium" size="icon" className="rounded-full">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-0"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <Card className="glass-card border-0 shadow-lg interactive-hover">
            <CardContent className="p-4 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <User className="h-6 w-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{students.length}</p>
              <p className="text-xs text-muted-foreground">Total Students</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0 shadow-lg interactive-hover">
            <CardContent className="p-4 text-center">
              <div className="bg-success/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-success" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">89%</p>
              <p className="text-xs text-muted-foreground">Avg Performance</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0 shadow-lg interactive-hover">
            <CardContent className="p-4 text-center">
              <div className="bg-warning/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="h-6 w-6 text-warning" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">1</p>
              <p className="text-xs text-muted-foreground">Needs Attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Students List */}
        <div className="space-y-4">
          {filteredStudents.map((student, index) => (
            <Card key={student.id} className="glass-card border-0 shadow-lg interactive-hover slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.grade}</p>
                    </div>
                  </div>
                  <Badge className={getPerformanceBadge(student.performance)}>
                    {student.performance}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-success mx-auto mb-1" />
                    <p className="text-lg font-bold text-success">{student.attendance}%</p>
                    <p className="text-xs text-muted-foreground">Attendance</p>
                  </div>
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <Award className="h-4 w-4 text-primary mx-auto mb-1" />
                    <p className="text-lg font-bold text-primary">{student.recentScore}</p>
                    <p className="text-xs text-muted-foreground">Latest Score</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{student.address}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {student.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;