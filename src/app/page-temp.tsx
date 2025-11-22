'use client';

import { useState, useEffect } from 'react';
import sdk from '@farcaster/frame-sdk';
import SudokuBoard from '@/components/SudokuBoard';
import PoolStats from '@/components/PoolStats';
import Leaderboard from '@/components/Leaderboard';
import { SudokuGrid } from '@/lib/sudoku';
import { PoolInfo, Difficulty } from '@/types/game';

export default function Home() {
  const [puzzle, setPuzzle] = useState<SudokuGrid | null>(null);
  const [sessionId, setSessionId] = useState<string>('');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [wins, setWins] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [poolInfo, setPoolInfo] = useState<PoolInfo | null>(null);
  const [leaderboard, setLeaderboard] = useState<{ address: string; wins: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [showPayment, setShowPayment] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  // Initialize Farcaster SDK
  useEffect(() => {
    const load = async () => {
      try {
        const context = await sdk.context;
        console.log('Farcaster context:', context);
        sdk.actions.ready();
        setIsSDKLoaded(true);
      } catch (error) {
        console.error('Error loading Farcaster SDK:', error);
      }
    };
    load();
  }, []);

  useEffect(() => {
    fetchPoolInfo();
    fetchLeaderboard();
    const interval = setInterval(() => {
      fetchPoolInfo();
      fetchLeaderboard();
    }, 30000);

    return () => clearInterval(interval);
  }, []);
