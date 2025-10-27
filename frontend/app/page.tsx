"use client";

import { Flame, Newspaper, BookOpen, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MacroMate
            </h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-full">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">
              7 Streak
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-8 space-y-6 pb-24">
        {/* Today's Brief */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <Newspaper className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Today's Brief</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-md">
                  금융시장
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">2분 전</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                연준 금리 동결... 인플레이션 주시
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                미국 연방준비제도가 기준금리를 5.25~5.50%로 동결했습니다.
                지속되는 인플레이션 압력에도 불구하고 경제 성장세를 고려한 결정입니다.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium">💡 연결 개념:</span> 기준금리, 인플레이션
              </p>
            </div>
          </div>
        </section>

        {/* Today's Concept */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <BookOpen className="w-5 h-5" />
            <h2 className="text-lg font-semibold">오늘의 이론</h2>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-90">1/150</span>
              <button className="text-sm hover:underline opacity-90">Skip →</button>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl">📈</div>
              <h3 className="text-3xl font-bold">GDP (국내총생산)</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  💡 3줄 개념
                </h4>
                <p className="text-sm leading-relaxed opacity-95">
                  한 나라가 일정 기간 동안 생산한 모든 재화와 서비스의 시장 가치 총합입니다.
                  경제 규모를 측정하는 가장 기본적인 지표로, 분기별·연간 단위로 발표됩니다.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  🌍 실제 사례
                </h4>
                <p className="text-sm leading-relaxed opacity-95">
                  2024년 한국의 GDP 성장률은 2.1%로 예상됩니다.
                  이는 내수 침체와 수출 둔화를 반영한 수치로, 정부의 경기 부양책이 필요한 시점입니다.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  ✅ 한 줄 요약
                </h4>
                <p className="text-sm font-medium">
                  "경제 규모의 건강검진표"
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-medium transition-colors">
                ← 이전
              </button>
              <button className="flex-1 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
                다음 →
              </button>
            </div>
          </div>
        </section>

        {/* Quiz Entry */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">AI Quiz</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">3문제 대기중</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium transition-colors">
              도전하기 →
            </button>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-blue-600 dark:text-blue-400">
            <Flame className="w-6 h-6" />
            <span className="text-xs font-medium">홈</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">학습</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500">
            <Target className="w-6 h-6" />
            <span className="text-xs font-medium">인사이트</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-medium">설정</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
