import { useState } from 'react';
import { Activity, MessageSquare, BarChart3, Settings, BrainCircuit } from 'lucide-react';
import { Dashboard } from './pages/Dashboard';
import { RealtimeAnalysis } from './pages/RealtimeAnalysis';
import { ApiMetrics } from './pages/ApiMetrics';

export default function App() {
  const [activeTab, setActiveTab] = useState('realtime');

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <BrainCircuit className="w-8 h-8 text-indigo-600" />
          <h1 className="text-xl font-bold text-slate-800">Senti<span className="text-indigo-600">Core</span></h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('realtime')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'realtime' ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}>
            <MessageSquare className="w-5 h-5" /> Live Analysis
          </button>
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}>
            <BarChart3 className="w-5 h-5" /> Historical Trends
          </button>
          <button onClick={() => setActiveTab('metrics')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'metrics' ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}>
            <Activity className="w-5 h-5" /> API Metrics
          </button>
        </nav>
      </aside>
      
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-slate-800">
            {activeTab === 'realtime' ? 'Real-time NLP Analysis' : activeTab === 'metrics' ? 'System API Metrics' : 'Historical Dashboard'}
          </h2>
          <div className="flex gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"><Settings className="w-5 h-5" /></button>
          </div>
        </header>
        
        <div className="p-8">
          {activeTab === 'realtime' && <RealtimeAnalysis />}
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'metrics' && <ApiMetrics />}
        </div>
      </main>
    </div>
  );
}
