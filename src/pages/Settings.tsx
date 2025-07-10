import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Settings as SettingsIcon, 
  Bell, 
  Moon, 
  Globe, 
  Shield, 
  Download,
  HelpCircle,
  LogOut,
  Smartphone,
  Volume2,
  Vibrate,
  ChevronRight,
  User,
  Database,
  Wifi
} from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);

  const settingsSections = [
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        {
          label: 'Push Notifications',
          description: 'Receive alerts for classes and reminders',
          toggle: true,
          value: notifications,
          onChange: setNotifications
        },
        {
          label: 'Sound',
          description: 'Play notification sounds',
          toggle: true,
          value: soundEnabled,
          onChange: setSoundEnabled
        },
        {
          label: 'Vibration',
          description: 'Vibrate for notifications',
          toggle: true,
          value: vibrationEnabled,
          onChange: setVibrationEnabled
        }
      ]
    },
    {
      title: 'Appearance',
      icon: Moon,
      items: [
        {
          label: 'Dark Mode',
          description: 'Switch to dark theme',
          toggle: true,
          value: darkMode,
          onChange: setDarkMode
        },
        {
          label: 'Language',
          description: 'English (IN)',
          toggle: false,
          action: () => console.log('Language settings')
        }
      ]
    },
    {
      title: 'Data & Storage',
      icon: Database,
      items: [
        {
          label: 'Auto Sync',
          description: 'Automatically sync data when connected',
          toggle: true,
          value: autoSync,
          onChange: setAutoSync
        },
        {
          label: 'Offline Mode',
          description: 'Work without internet connection',
          toggle: true,
          value: offlineMode,
          onChange: setOfflineMode
        },
        {
          label: 'Clear Cache',
          description: 'Free up storage space',
          toggle: false,
          action: () => console.log('Clear cache')
        }
      ]
    },
    {
      title: 'Account',
      icon: User,
      items: [
        {
          label: 'Edit Profile',
          description: 'Update your personal information',
          toggle: false,
          action: () => console.log('Edit profile')
        },
        {
          label: 'Privacy Settings',
          description: 'Manage your privacy preferences',
          toggle: false,
          action: () => console.log('Privacy settings')
        },
        {
          label: 'Backup Data',
          description: 'Backup your lessons and student data',
          toggle: false,
          action: () => console.log('Backup data')
        }
      ]
    },
    {
      title: 'Support',
      icon: HelpCircle,
      items: [
        {
          label: 'Help Center',
          description: 'Get help and tutorials',
          toggle: false,
          action: () => console.log('Help center')
        },
        {
          label: 'Contact Support',
          description: 'Reach out to our support team',
          toggle: false,
          action: () => console.log('Contact support')
        },
        {
          label: 'Report Issue',
          description: 'Report bugs or problems',
          toggle: false,
          action: () => console.log('Report issue')
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <div className="app-header p-6 mb-6 slide-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <SettingsIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-1">Settings</h1>
              <p className="text-muted-foreground text-sm">Customize your app experience</p>
            </div>
          </div>
        </div>

        {/* App Info */}
        <Card className="glass-card border-0 shadow-lg mb-6 slide-up">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Smartphone className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-lg">Sahayak</h3>
                <p className="text-sm text-muted-foreground mb-1">Teaching Companion App</p>
                <p className="text-xs text-muted-foreground">Version 1.0.0</p>
              </div>
              <Button variant="glass" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Update
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Settings Sections */}
        <div className="space-y-4">
          {settingsSections.map((section, sectionIndex) => (
            <Card key={section.title} className="glass-card border-0 shadow-lg slide-up" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-3 bg-card/50 rounded-lg interactive-hover">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    {item.toggle ? (
                      <Switch
                        checked={item.value}
                        onCheckedChange={item.onChange}
                        className="ml-4"
                      />
                    ) : (
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={item.action}
                        className="ml-4"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* App Info Footer */}
        <Card className="glass-card border-0 shadow-lg mt-6 slide-up" style={{ animationDelay: '600ms' }}>
          <CardContent className="p-4">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Made with ❤️ for teachers everywhere
              </p>
              <p className="text-xs text-muted-foreground">
                © 2024 Sahayak. All rights reserved.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Button variant="glass" size="sm">
                  Terms of Service
                </Button>
                <Button variant="glass" size="sm">
                  Privacy Policy
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sign Out */}
        <Button 
          variant="destructive" 
          className="w-full mt-6 slide-up" 
          style={{ animationDelay: '700ms' }}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Settings;