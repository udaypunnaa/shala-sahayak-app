import React, { useState } from 'react';
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
  Zap,
  Edit,
  Play,
  MapPin,
  Video,
  X
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([
    { id: 1, text: 'Grade Math test papers', type: 'urgent', completed: false },
    { id: 2, text: 'Prepare Science lesson plan', type: 'urgent', completed: false },
    { id: 3, text: 'Send parent meeting reminders', type: 'upcoming', completed: false },
    { id: 4, text: 'Update student records', type: 'upcoming', completed: false },
    { id: 5, text: 'Submit monthly report', type: 'completed', completed: true },
  ]);

  const teacher = {
    name: 'Sarah Johnson',
    designation: 'Primary School Teacher',
    organization: 'Sunrise Primary School',
    employeeId: 'TE001'
  };
  
  const todayClasses = [
    { 
      time: '09:00', 
      subject: 'Mathematics', 
      grade: 'Class 5', 
      status: 'upcoming',
      location: 'Room 12',
      type: 'offline'
    },
    { 
      time: '10:30', 
      subject: 'Hindi Literature', 
      grade: 'Class 3-4', 
      status: 'current',
      location: 'Room 8',
      type: 'offline'
    },
    { 
      time: '12:00', 
      subject: 'Science', 
      grade: 'Class 5', 
      status: 'upcoming',
      location: 'Science Lab',
      type: 'offline'
    },
    { 
      time: '14:00', 
      subject: 'Online English', 
      grade: 'Class 4', 
      status: 'upcoming',
      location: 'Virtual',
      type: 'online'
    }
  ];

  const upcomingClasses = [
    { date: 'Tomorrow', subject: 'Art & Craft', grade: 'Class 3', time: '10:00' },
    { date: 'Friday', subject: 'Physical Education', grade: 'Class 5', time: '11:30' },
  ];

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed, type: todo.completed ? 'upcoming' : 'completed' }
        : todo
    ));
  };

  const getTodosByType = (type: string) => todos.filter(todo => todo.type === type);

  return (
    <div className="min-h-screen bg-gradient-surface pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Top Header Card - Teacher Info */}
        <Card className="glass-card border-0 shadow-lg mb-6 slide-up">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SJ</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">{teacher.name}</h1>
                  <p className="text-sm text-muted-foreground">{teacher.designation}</p>
                  <p className="text-xs text-muted-foreground">{teacher.organization}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <Button variant="ghost" size="icon-sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Badge variant="outline" className="text-xs">
                  ID: {teacher.employeeId}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Classes */}
        <Card className="glass-card border-0 shadow-lg mb-6 slide-up" style={{ animationDelay: '100ms' }}>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Classes
              </div>
              <Badge className="bg-primary/10 text-primary">
                {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayClasses.map((class_, index) => (
              <div key={index} className="p-4 rounded-xl bg-card/50 border border-border/50 interactive-hover">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center bg-primary/10 rounded-lg p-2 min-w-[60px]">
                      <Clock className="h-4 w-4 text-primary mb-1" />
                      <span className="text-xs font-medium text-primary">{class_.time}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{class_.subject}</h3>
                      <p className="text-xs text-muted-foreground">{class_.grade}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge 
                      variant={class_.status === 'current' ? 'default' : 'secondary'}
                      className={class_.status === 'current' ? 'bg-primary text-primary-foreground pulse-glow' : 'bg-secondary/50'}
                    >
                      {class_.status === 'current' ? '▶ Live' : 'Upcoming'}
                    </Badge>
                    {class_.status === 'current' && (
                      <Button size="sm" variant="premium" className="h-6 text-xs">
                        <Play className="h-3 w-3 mr-1" />
                        Join
                      </Button>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  {class_.type === 'online' ? (
                    <div className="flex items-center gap-1">
                      <Video className="h-3 w-3" />
                      Virtual Class
                    </div>
                  ) : (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {class_.location}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Classes */}
        <Card className="glass-card border-0 shadow-lg mb-6 slide-up" style={{ animationDelay: '200ms' }}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-4 w-4 text-accent" />
              Upcoming Classes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {upcomingClasses.map((class_, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-foreground">{class_.subject}</p>
                  <p className="text-xs text-muted-foreground">{class_.grade}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-primary">{class_.date}</p>
                  <p className="text-xs text-muted-foreground">{class_.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 3-Section To-Do List */}
        <Card className="glass-card border-0 shadow-lg mb-6 slide-up" style={{ animationDelay: '300ms' }}>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              My Tasks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Urgent Tasks */}
            <div>
              <h3 className="text-sm font-semibold text-destructive mb-3 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Urgent ({getTodosByType('urgent').length})
              </h3>
              <div className="space-y-2">
                {getTodosByType('urgent').map((todo) => (
                  <div key={todo.id} className="flex items-center justify-between p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleTodo(todo.id)}
                        className="w-5 h-5 rounded-full border-2 border-destructive flex items-center justify-center"
                      >
                        {todo.completed && <CheckCircle className="h-3 w-3 text-destructive" />}
                      </button>
                      <span className={`text-sm ${todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {todo.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div>
              <h3 className="text-sm font-semibold text-warning mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Upcoming ({getTodosByType('upcoming').length})
              </h3>
              <div className="space-y-2">
                {getTodosByType('upcoming').map((todo) => (
                  <div key={todo.id} className="flex items-center justify-between p-3 bg-warning/5 border border-warning/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleTodo(todo.id)}
                        className="w-5 h-5 rounded-full border-2 border-warning flex items-center justify-center"
                      >
                        {todo.completed && <CheckCircle className="h-3 w-3 text-warning" />}
                      </button>
                      <span className={`text-sm ${todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {todo.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed Tasks */}
            <div>
              <h3 className="text-sm font-semibold text-success mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Completed ({getTodosByType('completed').length})
              </h3>
              <div className="space-y-2">
                {getTodosByType('completed').map((todo) => (
                  <div key={todo.id} className="flex items-center justify-between p-3 bg-success/5 border border-success/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm line-through text-muted-foreground">
                        {todo.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;