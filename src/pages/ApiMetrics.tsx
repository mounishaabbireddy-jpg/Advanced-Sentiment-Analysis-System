import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Activity, Clock, Zap, CheckCircle2 } from 'lucide-react';

const latencyData = [
  { time: '10:00', latency: 45 },
  { time: '10:05', latency: 52 },
  { time: '10:10', latency: 48 },
  { time: '10:15', latency: 120 }, // Spike
  { time: '10:20', latency: 42 },
  { time: '10:25', latency: 38 },
  { time: '10:30', latency: 45 },
];

const requestData = [
  { day: 'Mon', requests: 12000 },
  { day: 'Tue', requests: 15000 },
  { day: 'Wed', requests: 11000 },
  { day: 'Thu', requests: 18000 },
  { day: 'Fri', requests: 22000 },
  { day: 'Sat', requests: 9000 },
  { day: 'Sun', requests: 8500 },
];

export function ApiMetrics() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">Total Requests</p>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">1.2M</h3>
          <p className="text-xs text-emerald-600 mt-1 font-medium">+5.4% this week</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">Avg Latency</p>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">42ms</h3>
          <p className="text-xs text-emerald-600 mt-1 font-medium">-2ms improvement</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">Success Rate</p>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">99.9%</h3>
          <p className="text-xs text-slate-400 mt-1 font-medium">Last 30 days</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Activity className="w-5 h-5" />
            </div>
            <p className="text-sm font-medium text-slate-500">Tokens Processed</p>
          </div>
          <h3 className="text-2xl font-bold text-slate-800">84.5M</h3>
          <p className="text-xs text-emerald-600 mt-1 font-medium">+12% this month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="mb-6">
            <h3 className="font-bold text-slate-800">API Latency (Last 30 Mins)</h3>
            <p className="text-sm text-slate-500">Real-time inference response times in milliseconds</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={latencyData} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="latency" name="Latency (ms)" stroke="#3b82f6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="mb-6">
            <h3 className="font-bold text-slate-800">Weekly Request Volume</h3>
            <p className="text-sm text-slate-500">Total API calls made to the NLP engine per day</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={requestData} margin={{ top: 5, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="requests" name="API Requests" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
