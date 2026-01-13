'use client';

import { useState } from 'react';

interface GameRecord {
  id: string;
  date: string;
  difficulty: 'easy' | 'medium' | 'hard';
  result: 'won' | 'lost';
  time: number;
}

interface GameHistoryProps {
  games: GameRecord[];
  isLoading: boolean;
}

export function GameHistory({ games, isLoading }: GameHistoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-green-900/60 to-green-800/60 rounded-2xl p-6 border-2 border-green-500/50 shadow-2xl backdrop-blur-sm animate-pulse">
        <div className="h-48 bg-green-700/30 rounded"></div>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const recentGames = games.slice(-5).reverse();
  const allGames = isExpanded ? games.slice().reverse() : recentGames;

  const stats = {
    total: games.length,
    wins: games.filter(g => g.result === 'won').length,
    losses: games.filter(g => g.result === 'lost').length,
  };

  const winRate = stats.total > 0 ? Math.round((stats.wins / stats.total) * 100) : 0;

  return (
    <div className="bg-gradient-to-br from-green-900/60 to-green-800/60 rounded-2xl p-6 border-2 border-green-500/50 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold metallic-text text-green-300">
          📜 Game History
        </h2>
        <div className="text-xs text-green-400 bg-black/20 px-2 py-1 rounded">
          {stats.total} games
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-green-800/40 rounded-lg p-2 text-center border border-green-600/30">
          <div className="text-lg font-bold text-green-300">{stats.wins}</div>
          <div className="text-xs text-green-400">Wins 🏆</div>
        </div>
        <div className="bg-green-800/40 rounded-lg p-2 text-center border border-green-600/30">
          <div className="text-lg font-bold text-red-300">{stats.losses}</div>
          <div className="text-xs text-green-400">Losses 💔</div>
        </div>
        <div className="bg-green-800/40 rounded-lg p-2 text-center border border-green-600/30">
          <div className="text-lg font-bold text-green-300">{winRate}%</div>
          <div className="text-xs text-green-400">Win Rate 📊</div>
        </div>
      </div>

      {/* Games List */}
      {games.length === 0 ? (
        <div className="text-center text-green-300 py-6">
          <div className="text-3xl mb-2">🎮</div>
          <p className="text-sm">No games played yet</p>
          <p className="text-xs text-green-400 mt-1">Start your first game!</p>
        </div>
      ) : (
        <>
          <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
            {allGames.map((game) => (
              <div
                key={game.id}
                className={`flex items-center justify-between p-2 rounded-lg border ${
                  game.result === 'won'
                    ? 'bg-green-900/40 border-green-500/30'
                    : 'bg-red-900/20 border-red-500/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">
                    {game.result === 'won' ? '✅' : '❌'}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-green-200 capitalize">
                      {game.difficulty}
                    </div>
                    <div className="text-xs text-green-400">
                      {new Date(game.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-bold ${
                    game.result === 'won' ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {game.result === 'won' ? '+ Won' : '- Lost'}
                  </div>
                  <div className="text-xs text-green-400">
                    {formatTime(game.time)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {games.length > 5 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mt-3 py-2 text-sm text-green-300 hover:text-green-200 transition-colors"
            >
              {isExpanded ? 'Show less ▲' : `Show all ${games.length} games ▼`}
            </button>
          )}
        </>
      )}
    </div>
  );
}
