import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, MessageCircle } from 'lucide-react';

const data = [
  { date: 'Mon', positive: 400, negative: 240, neutral: 240 },
  { date: 'Tue', positive: 300, negative: 139, neutral: 221 },
  { date: 'Wed', positive: 200, negative: 980, neutral: 229 },
  { date: 'Thu', positive: 278, negative: 390, neutral: 200 },
  { date: 'Fri', positive: 189, negative: 480, neutral: 218 },
  { date: 'Sat', positive: 239, negative: 380, neutral: 250 },
  { date: 'Sun', positive: 349, negative: 430, neutral: 210 },
];

export function Dashboard() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 font-medium text-sm">Total Mentions Analyzed</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">24,592</h3>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <MessageCircle className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-emerald-600 font-medium flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +12.5% from last week
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-slate-500 font-medium text-sm">Brand Sentiment Score</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">78.4 <span className="text-lg text-slate-400">/ 100</span></h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-emerald-600 font-medium flex items-center gap-1">
            <TrendingUp className="w-4 h-4" /> +2.1 pts this month
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-800">7-Day Sentiment Trends</h3>
          <p className="text-sm text-slate-500">Volume of positive vs negative sentiment over time</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorNeg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="date" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
              <Area type="monotone" dataKey="positive" name="Positive Sentiment" stroke="#10b981" fillOpacity={1} fill="url(#colorPos)" strokeWidth={3} />
              <Area type="monotone" dataKey="negative" name="Negative Sentiment" stroke="#ef4444" fillOpacity={1} fill="url(#colorNeg)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
