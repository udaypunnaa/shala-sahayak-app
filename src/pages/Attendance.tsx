
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Users, CheckCircle, XCircle, Mic, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('Class 5 - Mathematics');
  const [attendance, setAttendance] = useState<Record<string, 'present' | 'absent' | null>>({});
  
  const students = [
    { id: 1, name: 'आर्या शर्मा', rollNo: '001' },
    { id: 2, name: 'राहुल कुमार', rollNo: '002' },
    { id: 3, name: 'प्रिया पटेल', rollNo: '003' },
    { id: 4, name: 'अमित सिंह', rollNo: '004' },
    { id: 5, name: 'सीता देवी', rollNo: '005' },
    { id: 6, name: 'रमेश यादव', rollNo: '006' },
    { id: 7, name: 'गीता कुमारी', rollNo: '007' },
    { id: 8, name: 'विकास गुप्ता', rollNo: '008' },
  ];

  const handleAttendance = (studentId: number, status: 'present' | 'absent') => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const presentCount = Object.values(attendance).filter(status => status === 'present').length;
  const absentCount = Object.values(attendance).filter(status => status === 'absent').length;
  const totalMarked = presentCount + absentCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
            <p className="text-gray-600">{selectedClass} • Today</p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{students.length}</p>
              <p className="text-sm text-gray-600">Total Students</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{presentCount}</p>
              <p className="text-sm text-gray-600">Present</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-4 text-center">
              <XCircle className="h-6 w-6 text-red-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{absentCount}</p>
              <p className="text-sm text-gray-600">Absent</p>
            </CardContent>
          </Card>
        </div>

        {/* Voice Input Option */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">Voice Attendance</h3>
                <p className="text-sm text-gray-600">Tap and say student names for quick marking</p>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Mic className="h-4 w-4" />
                <span>Start Voice Input</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Student List */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Mark Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                      {student.rollNo}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-600">Roll No: {student.rollNo}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={attendance[student.id] === 'present' ? 'default' : 'outline'}
                      className={attendance[student.id] === 'present' ? 'bg-green-500 hover:bg-green-600' : ''}
                      onClick={() => handleAttendance(student.id, 'present')}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Present
                    </Button>
                    
                    <Button
                      size="sm"
                      variant={attendance[student.id] === 'absent' ? 'default' : 'outline'}
                      className={attendance[student.id] === 'absent' ? 'bg-red-500 hover:bg-red-600' : ''}
                      onClick={() => handleAttendance(student.id, 'absent')}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Absent
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        {totalMarked > 0 && (
          <div className="sticky bottom-4">
            <Button 
              className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                console.log('Attendance saved:', attendance);
                navigate('/');
              }}
            >
              <Save className="h-5 w-5 mr-2" />
              Save Attendance ({totalMarked}/{students.length})
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
