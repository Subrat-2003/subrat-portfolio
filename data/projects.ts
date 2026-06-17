export const projects = [
    {
      title: "FDEWS | Financial Distress Prediction",
      subtitle: "60GB+ SEC filings, 4.5x lift, XGBoost, FinBERT, SHAP",
      description:
        "Processed 60GB+ of SEC EDGAR filings to build a financial distress prediction system that achieved 38% precision and 87% recall on an 8.4% base crash-rate dataset.",
      metrics: ["60GB+ SEC Data", "4.5x Lift", "87% Recall", "38% Precision"],
      stack: ["Polars", "Parquet", "FinBERT", "XGBoost", "SHAP", "Streamlit"],
      github: "https://github.com/Subrat-2003/Financial-distress-early-warning-system",
      live: "https://huggingface.co/spaces/Sk-Jena/sec-risk-dashboard",
      image: "/projects/fdews-dashboard.png",
    },
    {
      title: "Freelancer Risk Center",
      subtitle: "30-day financial runway forecasting for freelancers",
      description:
        "Projected 30-day runway for freelancers with a variance-based cashflow engine built in FastAPI, XGBoost, Random Forest, Supabase, and Next.js.",
      metrics: ["30-Day Runway", "Sub-200ms Views", "FastAPI Backend", "Next.js Frontend"],
      stack: ["FastAPI", "XGBoost", "Random Forest", "Supabase", "Next.js", "Recharts"],
      github:
        "https://github.com/Subrat-2003/Cashflow-Forecasting-and-Risk-Simulation-for-Freelancers",
      live: "https://cashflow-forecasting-and-risk-simul.vercel.app/",
      image: "/projects/freelancer-dashboard.png",
    },
    {
      title: "Loan Approval Prediction",
      subtitle: "Reliable credit risk modeling through validation audits",
      description:
        "Achieved 0.71 rejected-class F1 and 0.81 macro F1 after re-architecting validation to remove pre-split resampling noise.",
      metrics: ["Macro F1 0.81", "Rejected F1 0.71", "11 Models", "100 Runs"],
      stack: ["Pandas", "Scikit-Learn", "CatBoost", "XGBoost", "imbalanced-learn"],
      github: "https://github.com/Subrat-2003/Loan-Approval-Prediction-ML",
      live: "",
      image: "/projects/loan-project.png",
    },
    {
      title: "Global Water Vulnerability Dashboard",
      subtitle: "Tableau dashboard for water risk and infrastructure analysis",
      description:
        "Built a Tableau dashboard analyzing global water vulnerability, infrastructure gaps, and regional disparities across countries.",
      metrics: ["Tableau Dashboard", "Global Dataset", "Water Risk", "Regional Insights"],
      stack: ["Tableau", "Excel", "Data Cleaning", "Dashboarding"],
      github: "",
      live: "",
      image: "/projects/water-dashboard.png",
    },
  ];