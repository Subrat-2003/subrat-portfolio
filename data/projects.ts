export const projects = [
  {
    slug: "fdews",
    title: "FDEWS | Financial Distress Prediction",
    subtitle: "60GB+ SEC filings, 4.5x lift, XGBoost, FinBERT, SHAP",
    description:
      "Processed 60GB+ of SEC EDGAR filings to build a financial distress prediction system that achieved 38% precision and 87% recall on an 8.4% base crash-rate dataset.",
    impact:
      "Built a scalable SEC data pipeline using Polars, Parquet, FinBERT sentiment, XGBoost, and SHAP explainability for 12-month corporate distress forecasting.",
    metrics: ["60GB+ SEC Data", "4.5x Lift", "87% Recall", "38% Precision"],
    stack: ["Polars", "Parquet", "FinBERT", "XGBoost", "SHAP", "Streamlit"],
    github: "https://github.com/Subrat-2003/Financial-distress-early-warning-system",
    live: "https://huggingface.co/spaces/Sk-Jena/sec-risk-dashboard",
    image: "/projects/fdews-dashboard.png",
    caseStudy: {
      problem:
        "Corporate distress prediction is difficult because financial warning signs are scattered across structured ratios, SEC filings, and management commentary. The project aimed to detect insolvency signals up to 12 months in advance.",
      data:
        "Processed 60GB+ SEC EDGAR filings and transformed 4.9M+ intermediate records into company-level inference records using Polars Lazy Evaluation and Parquet-backed out-of-core processing.",
      approach: [
        "Parsed non-standard SEC HTML filings with inconsistent tags, numeric formats, and missing fiscal markers.",
        "Engineered 17 financial ratios covering liquidity, leverage, profitability, efficiency, and cashflow risk.",
        "Extracted MD&A sentiment using FinBERT and fused it with structured financial ratios.",
        "Benchmarked XGBoost against LSTM for distress classification under class imbalance.",
        "Used SHAP to explain model outputs and trace predictions back to financial and sentiment drivers.",
      ],
      results: [
        "Achieved 38% precision and 87% recall on an 8.4% base crash-rate dataset.",
        "Produced a 4.5x lift over random screening for identifying high-risk companies.",
        "Reduced false-positive volume compared to LSTM benchmarks while maintaining strong recall.",
        "Deployed an interactive dashboard on Hugging Face Spaces.",
      ],
      lessons: [
        "Out-of-core processing is essential when raw data exceeds normal memory limits.",
        "XGBoost handled sparse quarterly financial data better than LSTM for this use case.",
        "Feature order locking is critical because column mismatch can silently corrupt inference.",
      ],
    },
  },
  {
    slug: "freelancer-risk-center",
    title: "Freelancer Risk Center",
    subtitle: "30-day financial runway forecasting for freelancers",
    description:
      "Projected 30-day runway for freelancers with a variance-based cashflow engine built in FastAPI, XGBoost, Random Forest, Supabase, and Next.js.",
    impact:
      "Built a full-stack forecasting dashboard to visualize projected balance, pending invoice pressure, and short-term survival windows under irregular payment cycles.",
    metrics: ["30-Day Runway", "Sub-200ms Views", "FastAPI Backend", "Next.js Frontend"],
    stack: ["FastAPI", "XGBoost", "Random Forest", "Supabase", "Next.js", "Recharts"],
    github:
      "https://github.com/Subrat-2003/Cashflow-Forecasting-and-Risk-Simulation-for-Freelancers",
    live: "https://cashflow-forecasting-and-risk-simul.vercel.app/",
    image: "/projects/freelancer-dashboard.png",
    caseStudy: {
      problem:
        "Freelancers deal with irregular payments, delayed invoices, and unstable monthly cashflow. Static budgeting tools do not reflect that uncertainty well.",
      data:
        "The platform uses transaction records, invoice status, income patterns, and recent financial behavior to forecast short-term runway.",
      approach: [
        "Combined XGBoost and Random Forest to model volatile income patterns and baseline spending behavior.",
        "Derived scenario ranges from rolling forecast-error variance rather than fixed percentage buffers.",
        "Built FastAPI endpoints for prediction logic and Supabase for data persistence.",
        "Designed Next.js dashboards with Recharts to show projected balance and invoice pressure.",
        "Added workflow logic for retraining after forecast-error and drift checks pass.",
      ],
      results: [
        "Built a live full-stack forecasting platform with FastAPI, Supabase, and Next.js.",
        "Created dashboard views for survival windows, projected balance, and pending invoice pressure.",
        "Maintained sub-200ms query response across dashboard views.",
      ],
      lessons: [
        "Forecasting uncertainty is more useful than showing a single fragile prediction.",
        "Retraining should be triggered by validation conditions, not blindly scheduled every night.",
        "Financial dashboards should show risk windows, not just historical transactions.",
      ],
    },
  },
  {
    slug: "loan-approval-prediction",
    title: "Loan Approval Prediction",
    subtitle: "Reliable credit risk modeling through validation audits",
    description:
      "Achieved 0.71 rejected-class F1 and 0.81 macro F1 after re-architecting validation to remove pre-split resampling noise.",
    impact:
      "Benchmarked 11 classifiers across repeated randomized validation runs, selecting CatBoost for stable performance and explainable credit approval decisions.",
    metrics: ["Macro F1 0.81", "Rejected F1 0.71", "11 Models", "CatBoost"],
    stack: ["Pandas", "Scikit-Learn", "CatBoost", "XGBoost", "imbalanced-learn"],
    github: "https://github.com/Subrat-2003/Loan-Approval-Prediction-ML",
    live: "",
    image: "/projects/loan-project.png",
    caseStudy: {
      problem:
        "The project focused on building a reliable loan approval classifier while avoiding misleading evaluation caused by class imbalance and data leakage.",
      data:
        "Used a structured loan approval dataset containing applicant income, loan amount, credit history, property area, and approval status.",
      approach: [
        "Rebuilt the validation workflow to isolate the test set before resampling.",
        "Applied balancing only to training data to avoid leakage into evaluation.",
        "Benchmarked 11 classifiers across randomized validation runs.",
        "Selected CatBoost based on average performance and stability rather than a single high-scoring split.",
        "Used feature importance to identify key approval drivers.",
      ],
      results: [
        "Achieved macro F1 of 0.81 on leakage-free validation.",
        "Achieved rejected-class F1 of 0.71 on the harder minority class.",
        "Credit History, Loan Amount, and Applicant Income emerged as top drivers.",
      ],
      lessons: [
        "Accuracy alone is weak for imbalanced lending datasets.",
        "Validation design matters as much as model choice.",
        "Stable minority-class performance is more valuable than inflated headline metrics.",
      ],
    },
  },
  {
    slug: "global-water-vulnerability-dashboard",
    title: "Global Water Vulnerability Dashboard",
    subtitle: "Tableau dashboard for water risk and infrastructure analysis",
    description:
      "Built a Tableau dashboard analyzing global water vulnerability, infrastructure gaps, and regional disparities across countries.",
    impact:
      "Created visual insights around water access, climate stress, and infrastructure gaps to support regional comparison and public-data storytelling.",
    metrics: ["Tableau Dashboard", "Global Dataset", "Water Risk", "Regional Insights"],
    stack: ["Tableau", "Excel", "Data Cleaning", "Dashboarding"],
    github: "",
    live: "",
    image: "/projects/water-dashboard.png",
    caseStudy: {
      problem:
        "Water vulnerability is not evenly distributed across regions. The goal was to build a dashboard that makes infrastructure gaps and regional risk patterns easier to compare.",
      data:
        "Used public water access, vulnerability, and infrastructure indicators across countries and regions.",
      approach: [
        "Cleaned and structured public data for dashboard analysis.",
        "Built Tableau views for regional comparison, vulnerability ranking, and infrastructure gap analysis.",
        "Designed visual summaries for non-technical interpretation.",
      ],
      results: [
        "Created a dashboard showing global and regional water vulnerability patterns.",
        "Highlighted disparities in access, infrastructure, and environmental risk.",
        "Improved storytelling through map views, ranking charts, and KPI summaries.",
      ],
      lessons: [
        "Good dashboards need clear comparison logic, not just charts.",
        "Public datasets require careful cleaning and labeling.",
        "Regional context matters when interpreting global indicators.",
      ],
    },
  },
];