# India Venture Index (IND-V) Dashboard

A Next.js dashboard for tracking the performance of the India Venture Index - a benchmark index tracking VC-backed Indian startup companies listed on NSE/BSE.

## Features

- **Interactive Line Chart**: Compare IND-V performance against Nifty 50 (both rebased to 100)
- **Time Range Filters**: Toggle between 1Y, 3Y, 5Y, and ALL time views
- **Summary Cards**: Display current index level, YTD returns, and last update date
- **Methodology Page**: Detailed explanation of index construction and calculation
- **Dark Mode UI**: Financial terminal aesthetic with emerald green accents

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Data Parsing**: PapaParse

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd india-venture-dashboard
```

2. Install dependencies (already done):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
india-venture-dashboard/
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Dashboard page (home)
│   ├── methodology/
│   │   └── page.tsx        # Methodology explanation page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── IndexChart.tsx      # Line chart component
│   └── SummaryCard.tsx     # Stats card component
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   └── parseData.ts        # CSV parsing and data utilities
└── public/
    └── index_data.csv      # Index time-series data
```

## Data Format

The dashboard reads from `public/index_data.csv` with the following structure:

```csv
Date,Nifty 50,Nifty 50 (base to 100),India Venture index
31-Mar-21,14690.70,100,100
30-Jun-21,15721.50,107,102
...
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

### Build for Production

```bash
npm run build
npm run start
```

## Updating Data

To update the index data:

1. Replace `public/index_data.csv` with your updated CSV file
2. Ensure the CSV follows the same format (Date, Nifty 50, Nifty 50 rebased, India Venture index)
3. The dashboard will automatically load the new data

## Index Methodology

The India Venture Index (IND-V):
- **Base Date**: January 1, 2021
- **Base Value**: 100.00
- **Universe**: ~30 VC-backed Indian companies
- **Weighting**: Total Market Capitalization (Note: Nifty 50 uses Free-Float Market Cap)
- **Calculation**: Chain-Link Method (Same Store Growth)

For detailed methodology, visit the Methodology page in the dashboard.

## Learn More

To learn more about Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## License

This project is for educational and informational purposes.
