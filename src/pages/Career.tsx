import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  BookOpen, 
  Brain, 
  Sparkles, 
  Newspaper,
  Play,
  Download,
  Star,
  Clock,
  Users,
  Target,
  Lightbulb,
  FileText,
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Career = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('main');
  const [quizTopic, setQuizTopic] = useState('');
  const [contentKeywords, setContentKeywords] = useState('');
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const [generatedContent, setGeneratedContent] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Modern Teaching Techniques',
      provider: 'EduPro Academy',
      duration: '4 weeks',
      rating: 4.8,
      students: 2400,
      thumbnail: '📚',
      progress: 60,
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Digital Classroom Management',
      provider: 'TechEdu Institute',
      duration: '3 weeks',
      rating: 4.9,
      students: 1800,
      thumbnail: '💻',
      progress: 0,
      status: 'not-started'
    },
    {
      id: 3,
      title: 'Child Psychology in Education',
      provider: 'MindGrow University',
      duration: '6 weeks',
      rating: 4.7,
      students: 3200,
      thumbnail: '🧠',
      progress: 100,
      status: 'completed'
    }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'New Education Policy 2024: Key Changes for Primary Schools',
      source: 'Education Today',
      time: '2 hours ago',
      category: 'Policy',
      excerpt: 'The latest education policy introduces significant changes in primary education curriculum...'
    },
    {
      id: 2,
      title: 'AI in Classroom: How Teachers Can Embrace Technology',
      source: 'EdTech News',
      time: '5 hours ago',
      category: 'Technology',
      excerpt: 'Artificial Intelligence is transforming education. Learn how to integrate AI tools effectively...'
    },
    {
      id: 3,
      title: 'Student Engagement Strategies That Actually Work',
      source: 'Teaching Excellence',
      time: '1 day ago',
      category: 'Teaching Tips',
      excerpt: 'Research-backed methods to increase student participation and learning outcomes...'
    }
  ];

  const generateQuiz = () => {
    if (!quizTopic.trim()) {
      toast({
        title: "Please enter a topic",
        description: "Enter a subject or topic to generate quiz questions",
        variant: "destructive"
      });
      return;
    }

    // Simulated AI-generated quiz
    const sampleQuiz = {
      topic: quizTopic,
      questions: [
        {
          id: 1,
          question: `What is the most important aspect of ${quizTopic}?`,
          options: ['Option A', 'Option B', 'Option C', 'Option D'],
          correct: 0,
          type: 'MCQ'
        },
        {
          id: 2,
          question: `${quizTopic} is primarily concerned with...`,
          options: ['True', 'False'],
          correct: 0,
          type: 'True/False'
        },
        {
          id: 3,
          question: `Name two key principles of ${quizTopic}`,
          type: 'Short Answer'
        }
      ]
    };

    setGeneratedQuiz(sampleQuiz);
    toast({
      title: "Quiz generated!",
      description: `Created ${sampleQuiz.questions.length} questions for ${quizTopic}`,
    });
  };

  const generateContent = () => {
    if (!contentKeywords.trim()) {
      toast({
        title: "Please enter keywords",
        description: "Enter keywords to generate teaching content",
        variant: "destructive"
      });
      return;
    }

    // Simulated AI-generated content
    const sampleContent = {
      keywords: contentKeywords,
      lessonOutline: [
        'Introduction to the topic',
        'Key concepts and definitions',
        'Practical examples and applications',
        'Interactive activities',
        'Assessment and review'
      ],
      mcqs: [
        `Which of the following best describes ${contentKeywords}?`,
        `What is the primary purpose of ${contentKeywords}?`,
        `How does ${contentKeywords} relate to student learning?`
      ],
      notes: `Key points about ${contentKeywords}:\n\n• Important concept 1\n• Important concept 2\n• Important concept 3\n\nTeaching tips:\n• Use visual aids\n• Encourage participation\n• Provide real examples`
    };

    setGeneratedContent(sampleContent);
    toast({
      title: "Content generated!",
      description: `Created lesson materials for "${contentKeywords}"`,
    });
  };

  const careerCards = [
    {
      id: 'courses',
      title: 'Courses',
      description: 'Professional development courses',
      icon: BookOpen,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'quiz',
      title: 'AI Quiz Generator',
      description: 'Generate quiz questions instantly',
      icon: Brain,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      id: 'content',
      title: 'AI Content Creator',
      description: 'Create lesson plans and materials',
      icon: Sparkles,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      id: 'news',
      title: 'News & Blogs',
      description: 'Latest education insights',
      icon: Newspaper,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface pb-20">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <div className="app-header p-6 mb-6 slide-up">
          <h1 className="text-2xl font-bold text-foreground mb-1">Career Growth</h1>
          <p className="text-muted-foreground text-sm">Learn, grow, and excel in your teaching journey</p>
        </div>

        {/* Main Menu */}
        {activeTab === 'main' && (
          <div className="grid grid-cols-2 gap-4">
            {careerCards.map((card, index) => (
              <Card 
                key={card.id} 
                className="glass-card border-0 shadow-lg interactive-hover cursor-pointer slide-up" 
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveTab(card.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${card.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    <card.icon className={`h-8 w-8 ${card.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Courses Section */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('main')}>
                ← Back
              </Button>
              <h2 className="text-lg font-semibold">My Courses</h2>
              <div></div>
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <Card key={course.id} className="glass-card border-0 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{course.thumbnail}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{course.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{course.provider}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {course.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {course.students}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-warning" />
                            {course.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {course.status === 'in-progress' && (
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      {course.status === 'completed' && (
                        <Badge className="bg-success/10 text-success">
                          <Award className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                      
                      <Button 
                        size="sm" 
                        variant={course.status === 'in-progress' ? 'default' : 'outline'}
                        className="ml-auto"
                      >
                        {course.status === 'completed' ? (
                          <>
                            <Download className="h-4 w-4 mr-1" />
                            Certificate
                          </>
                        ) : course.status === 'in-progress' ? (
                          <>
                            <Play className="h-4 w-4 mr-1" />
                            Continue
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-1" />
                            Start
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* AI Quiz Generator */}
        {activeTab === 'quiz' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('main')}>
                ← Back
              </Button>
              <h2 className="text-lg font-semibold">AI Quiz Generator</h2>
              <div></div>
            </div>

            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-success" />
                  Generate Quiz Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Subject/Topic</label>
                  <Input
                    placeholder="e.g., Mathematics, Science, History..."
                    value={quizTopic}
                    onChange={(e) => setQuizTopic(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <Button onClick={generateQuiz} className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  Generate Quiz
                </Button>
              </CardContent>
            </Card>

            {generatedQuiz && (
              <Card className="glass-card border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-base">Generated Quiz: {generatedQuiz.topic}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {generatedQuiz.questions.map((q, index) => (
                    <div key={q.id} className="p-3 bg-card/50 rounded-lg">
                      <p className="font-medium text-sm mb-2">Q{index + 1}. {q.question}</p>
                      <Badge variant="outline" className="text-xs">{q.type}</Badge>
                      {q.options && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          Options: {q.options.join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Quiz
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* AI Content Creator */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('main')}>
                ← Back
              </Button>
              <h2 className="text-lg font-semibold">AI Content Creator</h2>
              <div></div>
            </div>

            <Card className="glass-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-warning" />
                  Create Teaching Materials
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Keywords/Topic</label>
                  <Textarea
                    placeholder="Enter keywords or topics for lesson content..."
                    value={contentKeywords}
                    onChange={(e) => setContentKeywords(e.target.value)}
                    className="mt-1"
                    rows={3}
                  />
                </div>
                
                <Button onClick={generateContent} className="w-full">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Generate Content
                </Button>
              </CardContent>
            </Card>

            {generatedContent && (
              <div className="space-y-4">
                <Card className="glass-card border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-base">Lesson Outline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {generatedContent.lessonOutline.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Target className="h-3 w-3 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-base">Teaching Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="text-sm text-foreground whitespace-pre-wrap">
                      {generatedContent.notes}
                    </pre>
                  </CardContent>
                </Card>

                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Export All Content
                </Button>
              </div>
            )}
          </div>
        )}

        {/* News & Blogs */}
        {activeTab === 'news' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('main')}>
                ← Back
              </Button>
              <h2 className="text-lg font-semibold">News & Blogs</h2>
              <div></div>
            </div>

            <div className="space-y-4">
              {newsArticles.map((article) => (
                <Card key={article.id} className="glass-card border-0 shadow-lg interactive-hover">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.time}</span>
                    </div>
                    
                    <h3 className="font-semibold text-foreground mb-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.source}</span>
                      <Button size="sm" variant="outline">
                        Read More
                      </Button>
                    </div>
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

export default Career;