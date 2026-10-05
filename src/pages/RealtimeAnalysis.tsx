import { useState } from 'react';
import { Send, Smile, Frown, Meh } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export function RealtimeAnalysis() {
  const [text, setText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    if (!text.trim()) return;
    setAnalyzing(true);
    
    // Mock ML processing delay
    setTimeout(() => {
      const lower = text.toLowerCase();
      const isPositive = lower.includes('great') || lower.includes('love') || lower.includes('good') || lower.includes('amazing');
      const isNegative = lower.includes('bad') || lower.includes('hate') || lower.includes('terrible') || lower.includes('worst');
      
      setResult({
        score: isPositive ? 0.89 : isNegative ? -0.75 : 0.12,
        sentiment: isPositive ? 'Positive' : isNegative ? 'Negative' : 'Neutral',
        confidence: 0.94,
        emotions: [
          { name: 'Joy', value: isPositive ? 75 : isNegative ? 5 : 20 },
          { name: 'Anger', value: isNegative ? 60 : 5 },
          { name: 'Sadness', value: isNegative ? 30 : 10 },
          { name: 'Surprise', value: 15 },
        ],
        keywords: lower.split(' ').filter(w => w.length > 4).slice(0, 5) // Mock keywords
      });
      setAnalyzing(false);
    }, 1200);
  };

  const COLORS = ['#10b981', '#ef4444', '#3b82f6', '#f59e0b'];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Input Text for AI Analysis</label>
        <div className="relative">
          <textarea
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste customer reviews, tweets, or feedback here... (Try using words like 'great' or 'terrible')"
            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none transition-all"
          />
          <button 
            onClick={handleAnalyze}
            disabled={analyzing || !text.trim()}
            className="absolute bottom-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 flex items-center gap-2"
          >
            {analyzing ? 'Processing NLP...' : 'Analyze Sentiment'} <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-6">Primary Sentiment</h3>
            <div className="flex items-center gap-6">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${
                result.sentiment === 'Positive' ? 'bg-green-100 text-green-600' :
                result.sentiment === 'Negative' ? 'bg-red-100 text-red-600' :
                'bg-slate-100 text-slate-600'
              }`}>
                {result.sentiment === 'Positive' ? <Smile className="w-12 h-12" /> :
                 result.sentiment === 'Negative' ? <Frown className="w-12 h-12" /> :
                 <Meh className="w-12 h-12" />}
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">{result.sentiment}</p>
                <p className="text-slate-500 mt-1">Confidence Score: {(result.confidence * 100).toFixed(1)}%</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {result.keywords.map((kw: string, i: number) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium border border-slate-200">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-800 mb-2">Emotion Vector Breakdown</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={result.emotions} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {result.emotions.map((_entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-sm">
              {result.emotions.map((em: any, i: number) => (
                <div key={i} className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[i % COLORS.length]}}></div>
                  <span className="text-slate-600">{em.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
