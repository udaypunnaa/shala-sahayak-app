
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Sparkles, BookOpen, FileText, Image, Mic, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContentGenerator = () => {
  const navigate = useNavigate();
  const [contentType, setContentType] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const contentTypes = [
    { value: 'lesson', label: 'Lesson Plan', icon: BookOpen },
    { value: 'worksheet', label: 'Worksheet', icon: FileText },
    { value: 'story', label: 'Story/Example', icon: BookOpen },
    { value: 'diagram', label: 'Visual Aid', icon: Image },
  ];

  const handleGenerate = async () => {
    if (!prompt || !contentType) return;
    
    setIsGenerating(true);
    
    // Simulate AI content generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleContent = {
      lesson: `# पाठ योजना: गणित - भिन्न संख्याएं\n\n## उद्देश्य:\n- छात्र भिन्न संख्याओं को समझेंगे\n- दैनिक जीवन में उनका उपयोग सीखेंगे\n\n## गतिविधियां:\n1. रोटी के टुकड़ों से समझाना\n2. चॉकलेट बांटकर अभ्यास\n3. खेल के माध्यम से सीखना`,
      
      worksheet: `# कार्यपत्रक: भिन्न संख्याएं\n\n**नाम:** _________________ **कक्षा:** 5\n\n## प्रश्न 1: सही उत्तर चुनें\n1/2 + 1/4 = ?\nक) 1/6  ख) 3/4  ग) 2/6\n\n## प्रश्न 2: रिक्त स्थान भरें\nएक पिज्जा के _____ हिस्से खाए गए।`,
      
      story: `# कहानी: राजू और आम के पेड़\n\nराजू के बगीचे में एक आम का पेड़ था। उसमें 12 आम लगे थे। राजू ने अपने 3 दोस्तों को बुलाया और कहा, "आओ, हम सब मिलकर आम बांटते हैं।"\n\nउन्होंने 12 आमों को 4 बराबर हिस्सों में बांटा। हर किसी को 3-3 आम मिले।`,
      
      diagram: `# चित्र विवरण: भिन्न संख्या चार्ट\n\n[वृत्त का चित्र]\n- पूरा वृत्त = 1\n- आधा वृत्त = 1/2\n- चौथाई वृत्त = 1/4\n\n[सुझाव: ब्लैकबोर्ड पर रंगीन चाक से बनाएं]`
    };
    
    setGeneratedContent(sampleContent[contentType as keyof typeof sampleContent] || 'Content generated successfully!');
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI Content Generator</h1>
            <p className="text-gray-600">Create personalized teaching materials</p>
          </div>
        </div>

        {/* Content Type Selection */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-green-600" />
              What would you like to create?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {contentTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={contentType === type.value ? 'default' : 'outline'}
                  className={`h-20 flex-col gap-2 ${
                    contentType === type.value ? 'bg-green-500 hover:bg-green-600 text-white' : ''
                  }`}
                  onClick={() => setContentType(type.value)}
                >
                  <type.icon className="h-6 w-6" />
                  <span className="text-sm">{type.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Input Section */}
        <Card className="mb-6 bg-white/80 backdrop-blur-sm border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Describe what you need</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Textarea
                placeholder="Example: Create a math lesson about fractions for Class 5 students, using local examples like sharing rotis or mangoes..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="flex-1"
              />
              <Button variant="outline" className="px-3">
                <Mic className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex gap-4">
              <Select defaultValue="hindi">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="bengali">Bengali</SelectItem>
                  <SelectItem value="tamil">Tamil</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="grade5">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Grade Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="grade3">Class 3</SelectItem>
                  <SelectItem value="grade4">Class 4</SelectItem>
                  <SelectItem value="grade5">Class 5</SelectItem>
                  <SelectItem value="mixed">Mixed Grades</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              className="w-full h-12 bg-green-600 hover:bg-green-700"
              onClick={handleGenerate}
              disabled={!prompt || !contentType || isGenerating}
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                  Generating Content...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" />
                  Generate Content
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated Content */}
        {generatedContent && (
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Generated Content</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-wrap text-sm">
                {generatedContent}
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  Copy Text
                </Button>
                <Button variant="outline" size="sm">
                  Edit Content
                </Button>
                <Button variant="outline" size="sm">
                  Share with Students
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ContentGenerator;
