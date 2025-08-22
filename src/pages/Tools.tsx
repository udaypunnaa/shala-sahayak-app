import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  UserCheck, 
  Mail, 
  FileText, 
  Bell,
  Users,
  Download,
  Send,
  Copy,
  CheckCircle,
  X,
  Plus,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Tools = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('followup');
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: 'Aarav Sharma', status: 'present' },
    { id: 2, name: 'Priya Patel', status: 'present' },
    { id: 3, name: 'Arjun Kumar', status: 'absent' },
    { id: 4, name: 'Anaya Singh', status: 'leave' },
    { id: 5, name: 'Vihaan Gupta', status: 'present' },
  ]);

  const [followupTasks, setFollowupTasks] = useState([
    {
      id: 1,
      task: 'Math Assignment Collection',
      deadline: '2024-01-15',
      students: ['Aarav', 'Priya', 'Arjun'],
      submitted: ['Priya'],
      pending: ['Aarav', 'Arjun']
    }
  ]);

  const [permissionRequests] = useState([
    {
      id: 1,
      student: 'Aarav Sharma',
      reason: 'Medical appointment',
      date: '2024-01-12',
      status: 'pending'
    },
    {
      id: 2,
      student: 'Anaya Singh',
      reason: 'Family function',
      date: '2024-01-13',
      status: 'pending'
    }
  ]);

  const updateAttendance = (id: number, status: string) => {
    setAttendanceData(prev => 
      prev.map(student => 
        student.id === id ? { ...student, status } : student
      )
    );
  };

  const generateAttendanceReport = () => {
    const present = attendanceData.filter(s => s.status === 'present').length;
    const absent = attendanceData.filter(s => s.status === 'absent').length;
    const leave = attendanceData.filter(s => s.status === 'leave').length;
    
    const reportText = `Attendance Report - ${new Date().toLocaleDateString()}
Present: ${present}
Absent: ${absent}
On Leave: ${leave}
Total: ${attendanceData.length}

Students Present:
${attendanceData.filter(s => s.status === 'present').map(s => `• ${s.name}`).join('\n')}

Students Absent:
${attendanceData.filter(s => s.status === 'absent').map(s => `• ${s.name}`).join('\n')}

Students on Leave:
${attendanceData.filter(s => s.status === 'leave').map(s => `• ${s.name}`).join('\n')}`;

    navigator.clipboard.writeText(reportText);
    toast({
      title: "Report copied!",
      description: "Attendance report copied to clipboard",
    });
  };

  const sendFollowupEmail = (taskId: number) => {
    toast({
      title: "Email sent!",
      description: "Follow-up reminders sent to pending students",
    });
  };

  const handlePermissionRequest = (id: number, action: 'accept' | 'reject') => {
    toast({
      title: action === 'accept' ? "Request approved" : "Request rejected",
      description: `Permission request has been ${action}ed`,
    });
  };

  const toolCards = [
    {
      id: 'followup',
      title: 'Follow-Up Tool',
      description: 'Track assignments and auto-send reminders',
      icon: UserCheck,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'attendance',
      title: 'Attendance Report',
      description: 'Quick attendance marking and reporting',
      icon: Users,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      id: 'notifications',
      title: 'Class Notifications',
      description: 'Set up class reminders and alerts',
      icon: Bell,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      id: 'permissions',
      title: 'Permission Requests',
      description: 'Manage student leave requests',
      icon: FileText,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <div className="app-header p-6 mb-6 slide-up">
          <h1 className="text-2xl font-bold text-foreground mb-1">Teaching Tools</h1>
          <p className="text-muted-foreground text-sm">Automate and streamline your workflow</p>
        </div>

        {activeTab === 'main' && (
          <div className="grid grid-cols-2 gap-4">
            {toolCards.map((tool, index) => (
              <Card 
                key={tool.id} 
                className="glass-card border-0 shadow-lg interactive-hover cursor-pointer slide-up" 
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveTab(tool.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${tool.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <tool.icon className={`h-8 w-8 ${tool.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{tool.title}</h3>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Follow-up Tool */}
        {activeTab === 'followup' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('main')}>
                ← Back
              </Button>
              <h2 className="text-lg font-semibold">Follow-up Tool</h2>
              <Button variant="premium" size="sm">
                <Plus className="h-4 w-4 mr-1" />
                New Task
              </Button>
            </div>

            {followupTasks.map((task) => (
              <Card key={task.id} className="glass-card border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base">{task.task}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      <Calendar className="h-3 w-3 mr-1" />
                      Due: {task.deadline}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-success mb-2">Submitted ({task.submitted.length})</h4>
                    <div className="flex flex-wrap gap-1">
                      {task.submitted.map((student, idx) => (
                        <Badge key={idx} className="bg-success/10 text-success text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {student}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-destructive mb-2">Pending ({task.pending.length})</h4>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {task.pending.map((student, idx) => (
                        <Badge key={idx} className="bg-destructive/10 text-destructive text-xs">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {student}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      size="sm" 
                      variant="default"
                      onClick={() => sendFollowupEmail(task.id)}
                      className="w-full"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Reminder Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Attendance Tool */}
        {activeTab === 'attendance' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('main')}>
                ← Back
              </Button>
              <h2 className="text-lg font-semibold">Attendance</h2>
              <Badge className="bg-primary/10 text-primary">
                Today
              </Badge>
            </div>

            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-base">Mark Attendance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {attendanceData.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-3 bg-card/50 rounded-lg">
                    <span className="font-medium text-sm">{student.name}</span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={student.status === 'present' ? 'success' : 'outline'}
                        onClick={() => updateAttendance(student.id, 'present')}
                        className="h-8 px-3 text-xs"
                      >
                        Present
                      </Button>
                      <Button
                        size="sm"
                        variant={student.status === 'absent' ? 'destructive' : 'outline'}
                        onClick={() => updateAttendance(student.id, 'absent')}
                        className="h-8 px-3 text-xs"
                      >
                        Absent
                      </Button>
                      <Button
                        size="sm"
                        variant={student.status === 'leave' ? 'warning' : 'outline'}
                        onClick={() => updateAttendance(student.id, 'leave')}
                        className="h-8 px-3 text-xs"
                      >
                        Leave
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="default" onClick={generateAttendanceReport}>
                <Copy className="h-4 w-4 mr-2" />
                Copy Report
              </Button>
              <Button variant="success">
                <Send className="h-4 w-4 mr-2" />
                Email Report
              </Button>
            </div>
          </div>
        )}

        {/* Notifications Tool */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('main')}>
                ← Back
              </Button>
              <h2 className="text-lg font-semibold">Notifications</h2>
              <div></div>
            </div>

            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-base">Class Reminders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Before class starts</p>
                    <p className="text-xs text-muted-foreground">Get notified 10 minutes before each class</p>
                  </div>
                  <Button variant="success" size="sm">
                    Enabled
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Assignment reminders</p>
                    <p className="text-xs text-muted-foreground">Daily summary of pending assignments</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-card/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">Attendance alerts</p>
                    <p className="text-xs text-muted-foreground">When students are absent for 3+ days</p>
                  </div>
                  <Button variant="success" size="sm">
                    Enabled
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Permission Requests Tool */}
        {activeTab === 'permissions' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('main')}>
                ← Back
              </Button>
              <h2 className="text-lg font-semibold">Permission Requests</h2>
              <Badge className="bg-warning/10 text-warning">
                {permissionRequests.filter(r => r.status === 'pending').length} Pending
              </Badge>
            </div>

            <div className="space-y-4">
              {permissionRequests.map((request) => (
                <Card key={request.id} className="glass-card border-0 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-sm text-foreground">{request.student}</h3>
                        <p className="text-xs text-muted-foreground">{request.reason}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {request.date}
                      </Badge>
                    </div>
                    
                    {request.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="success"
                          onClick={() => handlePermissionRequest(request.id, 'accept')}
                          className="flex-1"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Accept
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handlePermissionRequest(request.id, 'reject')}
                          className="flex-1"
                        >
                          <X className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tools;