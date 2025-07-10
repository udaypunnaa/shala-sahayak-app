import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Users, 
  BookOpen, 
  BarChart3, 
  GraduationCap,
  Calendar,
  Settings,
  User
} from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/attendance', icon: Users, label: 'Attendance' },
    { path: '/content', icon: BookOpen, label: 'Content' },
    { path: '/students', icon: GraduationCap, label: 'Students' },
    { path: '/lessons', icon: Calendar, label: 'Lessons' },
    { path: '/reports', icon: BarChart3, label: 'Reports' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-xl border-t border-border/50 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.slice(0, 4).map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            size="icon-sm"
            className={`flex-col gap-1 h-auto py-2 px-3 rounded-xl transition-all duration-200 ${
              isActive(item.path) 
                ? 'bg-primary/10 text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => navigate(item.path)}
          >
            <item.icon className={`h-5 w-5 ${isActive(item.path) ? 'scale-110' : ''}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;