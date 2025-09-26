import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MessageCircle, Brain, History, Heart } from "lucide-react";

const navigationItems = [
  {
    title: "Chat",
    url: createPageUrl("Chat"),
    icon: MessageCircle,
  },
  {
    title: "Emotion Insights",
    url: createPageUrl("Insights"),
    icon: Brain,
  },
  {
    title: "Session History",
    url: createPageUrl("History"),
    icon: History,
  },
];

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Sidebar */}
      <div className="w-64 border-r border-slate-200/60 bg-white/80 backdrop-blur-sm hidden md:flex flex-col">
        <div className="border-b border-slate-200/60 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-xl text-slate-800">Aura</h2>
              <p className="text-xs text-slate-500 font-medium">Mental Health Support</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex-1">
          <div className="mb-6">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
              Support Tools
            </div>
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                    location.pathname === item.url 
                      ? 'bg-blue-50 text-blue-700 shadow-sm' 
                      : 'hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-3">
              Emotional Wellness
            </div>
            <div className="px-1 space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">Safe Space Active</span>
                </div>
                <p className="text-xs text-slate-600">Your conversations are private and secure</p>
              </div>
              
              <div className="text-center p-3">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Remember: You're not alone in this journey. Every step forward matters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200/60 p-4">
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-2">Need immediate help?</p>
            <div className="p-2 bg-red-50 border border-red-100 rounded-lg">
              <p className="text-xs text-red-600 font-medium">Crisis Hotline: 112</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 px-6 py-4 md:hidden">
          <div className="flex items-center gap-4">
            <button className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
              </svg>
            </button>
            <h1 className="text-xl font-bold text-slate-800">Aura</h1>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}