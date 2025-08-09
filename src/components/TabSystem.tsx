import React, { useState } from 'react';
import { RetroButton } from './ui/retro-button';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: string;
}

interface TabSystemProps {
  tabs: Tab[];
  defaultTab?: string;
}

export const TabSystem: React.FC<TabSystemProps> = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 150);
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      <div className="window-chrome bg-card p-2">
        <div className="flex flex-wrap gap-1">
          {tabs.map((tab) => (
            <RetroButton
              key={tab.id}
              variant={activeTab === tab.id ? 'primary' : 'default'}
              size="sm"
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "pixel-font text-xs transition-all duration-200",
                activeTab === tab.id && "retro-glow"
              )}
            >
              {tab.icon && <span className="mr-1">{tab.icon}</span>}
              {tab.label}
            </RetroButton>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className={cn(
        "transition-all duration-150",
        isTransitioning && "opacity-50 scale-95"
      )}>
        {activeTabContent}
      </div>
    </div>
  );
};