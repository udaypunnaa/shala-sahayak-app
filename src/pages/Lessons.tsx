import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Plus,
  Play,
  CheckCircle,
  AlertCircle,
  Users,
  Target,
  FileText
} from 'lucide-react';

const Lessons = () => {
  const [activeTab, setActiveTab] = useState('today');

  const lessons = [
    {
      id: 1,
      title: 'Introduction to Fractions',
      subject: 'Mathematics',
      grade: 'Class 4-5',
      time: '09:00 - 09:45',
      status: 'completed',
      students: 28,
      duration: 45,
      objectives: ['Understand basic fractions', 'Compare fractions', 'Add simple fractions'],
      materials: ['Fraction strips', 'Whiteboard', 'Practice sheets'],
      progress: 100
    },
    {
      id: 2,
      title: 'Hindi Vowels Practice',
      subject: 'Hindi Language',
      grade: 'Class 3',
      time: '10:30 - 11:15',
      status: 'current',
      students: 22,
      duration: 45,
      objectives: ['Identify vowels', 'Pronunciation practice', 'Writing practice'],
      materials: ['Hindi alphabet chart', 'Practice notebooks'],
      progress: 65
    },
    {
      id: 3,
      title: 'Plant Life Cycle',
      subject: 'Science',
      grade: 'Class 5',
      time: '12:00 - 12:45',
      status: 'upcoming',
      students: 25,
      duration: 45,
      objectives: ['Understand plant growth', 'Identify stages', 'Draw life cycle'],
      materials: ['Plant specimens', 'Magnifying glass', 'Drawing sheets'],
      progress: 0
    },
    {
      id: 4,
      title: 'Our Community Helpers',
      subject: 'Social Studies',
      grade: 'Class 3-4',
      time: '14:00 - 14:45',
      status: 'upcoming',
      students: 30,
      duration: 45,
      objectives: ['Identify community helpers', 'Understand their roles', 'Show appreciation'],
      materials: ['Picture cards', 'Role-play props'],
      progress: 0
    }
  ];

  const weeklyLessons = [
    {
      day: 'Monday',
      lessons: ['Basic Addition', 'Hindi Stories', 'Animal Habitats']
    },
    {
      day: 'Tuesday',
      lessons: ['Subtraction', 'English Rhymes', 'Water Cycle']
    },
    {
      day: 'Wednesday',
      lessons: ['Fractions', 'Hindi Vowels', 'Plant Life Cycle']
    },
    {
      day: 'Thursday',
      lessons: ['Geometry', 'Story Writing', 'Weather Patterns']
    },
    {
      day: 'Friday',
      lessons: ['Mental Math', 'Reading Comprehension', 'My Family']
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'current':
        return 'bg-primary/10 text-primary border-primary/20 pulse-glow';
      case 'upcoming':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-secondary/10 text-secondary-foreground border-secondary/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'current':
        return <Play className="h-4 w-4" />;
      case 'upcoming':
        return <Clock className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-surface pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <div className="app-header p-6 mb-6 slide-up">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Lesson Plans</h1>
              <p className="text-muted-foreground text-sm">Manage daily lessons & curriculum</p>
            </div>
            <Button variant="premium" size="icon" className="rounded-full">
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2">
            <Button
              variant={activeTab === 'today' ? 'premium' : 'glass'}
              size="sm"
              onClick={() => setActiveTab('today')}
              className="flex-1"
            >
              Today's Lessons
            </Button>
            <Button
              variant={activeTab === 'weekly' ? 'premium' : 'glass'}
              size="sm"
              onClick={() => setActiveTab('weekly')}
              className="flex-1"
            >
              Weekly Plan
            </Button>
          </div>
        </div>

        {activeTab === 'today' && (
          <>
            {/* Daily Overview */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <Card className="glass-card border-0 shadow-lg interactive-hover">
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">4</p>
                  <p className="text-xs text-muted-foreground">Total Lessons</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 shadow-lg interactive-hover">
                <CardContent className="p-4 text-center">
                  <div className="bg-success/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">1</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-0 shadow-lg interactive-hover">
                <CardContent className="p-4 text-center">
                  <div className="bg-warning/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-warning" />
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">3</p>
                  <p className="text-xs text-muted-foreground">Remaining</p>
                </CardContent>
              </Card>
            </div>

            {/* Today's Lessons */}
            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <Card key={lesson.id} className="glass-card border-0 shadow-lg interactive-hover slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground">{lesson.title}</h3>
                          <Badge className={getStatusBadge(lesson.status)}>
                            {getStatusIcon(lesson.status)}
                            <span className="ml-1 capitalize">{lesson.status}</span>
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{lesson.subject} • {lesson.grade}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{lesson.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{lesson.students} students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {lesson.status === 'current' && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-muted-foreground">{lesson.progress}%</span>
                        </div>
                        <Progress value={lesson.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Target className="h-3 w-3" />
                          Learning Objectives
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {lesson.objectives.map((objective, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {objective}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                          <FileText className="h-3 w-3" />
                          Materials Needed
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {lesson.materials.map((material, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {material}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {lesson.status === 'current' && (
                      <Button variant="premium" className="w-full mt-4">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Lesson
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === 'weekly' && (
          <div className="space-y-4">
            {weeklyLessons.map((day, index) => (
              <Card key={day.day} className="glass-card border-0 shadow-lg interactive-hover slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {day.lessons.map((lesson, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-card/50 rounded-lg">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;