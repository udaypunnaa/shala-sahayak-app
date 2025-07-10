
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Users, BookOpen, Calendar, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const navigate = useNavigate();

  const attendanceData = [
    { date: 'July 8', present: 32, absent: 3, percentage: 91 },
    { date: 'July 9', present: 30, absent: 5, percentage: 86 },
    { date: 'July 10', present: 28, absent: 7, percentage: 80 },
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', avgScore: 78, trend: 'up' },
    { subject: 'Hindi', avgScore: 85, trend: 'up' },
    { subject: 'Science', avgScore: 72, trend: 'down' },
    { subject: 'Social Studies', avgScore: 80, trend: 'stable' },
  ];

  const topPerformers = [
    { name: 'आर्या शर्मा', score: 95, subject: 'Mathematics' },
    { name: 'राहुल कुमार', score: 92, subject: 'Hindi' },
    { name: 'प्रिया पटेल', score: 89, subject: 'Science' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Reports</h1>
            <p className="text-gray-600">Performance analytics and insights</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">35</p>
              <p className="text-sm text-gray-600">Total Students</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">85%</p>
              <p className="text-sm text-gray-600">Avg Attendance</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">79%</p>
              <p className="text-sm text-gray-600">Avg Performance</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <Calendar className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-sm text-gray-600">Teaching Days</p>
            </CardContent>
          </Card>
        </div>

        {/* Attendance Trends */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Attendance Trends (Last 7 Days)</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {attendanceData.map((day, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-medium text-gray-600 min-w-[60px]">
                      {day.date}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-green-600 text-sm">Present: {day.present}</span>
                        <span className="text-red-600 text-sm">Absent: {day.absent}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${day.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900">{day.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subject Performance */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Subject-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectPerformance.map((subject, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-gray-900">{subject.subject}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{subject.avgScore}%</div>
                      <div className="text-xs text-gray-600">Class Average</div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      subject.trend === 'up' ? 'bg-green-100 text-green-800' :
                      subject.trend === 'down' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {subject.trend === 'up' ? '↗ Up' : subject.trend === 'down' ? '↘ Down' : '→ Stable'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
          <CardHeader>
            <CardTitle>This Week's Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      #{index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-orange-600">{student.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
