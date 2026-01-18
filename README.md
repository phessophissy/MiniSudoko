# 🎮 MiniSudoku - Farcaster MiniApp Game

A competitive Sudoku game on Base chain as a Farcaster miniApp. Players pay $0.30 USDC to play, with $0.10 going to a prize pool and $0.20 to the creator. The player with the most wins in 24 hours takes the entire pool!

## 🌟 Features

- 🎮 **Interactive Sudoku Game**: Three difficulty levels (Easy, Medium, Hard)
- 💰 **x402 Payments**: Seamless USDC payments on Base via Farcaster
- 🏆 **Prize Pool**: 24-hour competitive rounds with winner-takes-all
- 📊 **Live Leaderboard**: Real-time player rankings
- 🎨 **Sleek UI**: Leaf green theme with metallic text
- 🔗 **Farcaster Integration**: Full miniApp support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

See `QUICKSTART_NOW.md` for detailed setup instructions.

## 📖 Documentation

- **QUICKSTART_NOW.md** - Get started in 5 minutes
- **DEPLOYMENT_GUIDE.md** - Step-by-step deployment
- **LAUNCH_CHECKLIST.md** - Complete launch checklist
- **BUILD_COMPLETE.md** - Full feature overview

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Smart Contract**: Solidity 0.8.20, Hardhat, OpenZeppelin
- **Blockchain**: Base (Ethereum L2)
- **Payment**: x402, USDC
- **Web3**: Viem, Wagmi

## 📝 License

MIT License

---

## 🤝 Contributing

We welcome contributions to the MiniSudoku game! Here's how you can help:

### Ways to Contribute
- **Game Features**: Add new Sudoku puzzles, difficulty levels, or gameplay modes
- **UI/UX Improvements**: Enhance the user interface, animations, or user experience
- **Smart Contract**: Improve gas optimization, add new features, or enhance security
- **Testing**: Add more comprehensive tests for contracts and frontend
- **Documentation**: Improve README, add tutorials, or create usage guides
- **Performance**: Optimize frontend performance or contract gas usage

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and ensure tests pass
4. Run the test suite: `npm run compile && npm test`
5. Submit a pull request with a clear description

### Code Standards
- Follow existing code patterns and TypeScript/Solidity best practices
- Add tests for new functionality
- Update documentation for significant changes
- Ensure backward compatibility where possible

### Smart Contract Guidelines
- Use OpenZeppelin contracts for security
- Add comprehensive test coverage
- Optimize for gas efficiency
- Include proper error handling

### Frontend Guidelines
- Use TypeScript for type safety
- Follow React best practices
- Ensure mobile responsiveness
- Test on multiple wallet connections

### Testing
- All smart contract functions should have unit tests
- Frontend should have integration tests
- Test on both testnet and mainnet

---

Built with ❤️ for the Farcaster community
