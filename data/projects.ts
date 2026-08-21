export const projects = [
  {
    slug: "fdews",
    title: "FDEWS | Financial Distress Prediction",
    subtitle: "60GB+ SEC filings, 4.5x lift, XGBoost, FinBERT, SHAP, Forensic RAG",
    description:
      "Processed 60GB+ of SEC EDGAR filings to build a financial distress prediction and forensic intelligence system combining predictive risk modeling with evidence-grounded investigation.",
    impact:
      "Built a scalable financial-risk pipeline using Polars and Parquet for large-scale SEC processing, XGBoost and SHAP for predictive risk analysis, and Forensic RAG for evidence-grounded financial investigation..",
    metrics: ["60GB+ SEC Data", "4.5x Lift", "87% Recall", "38% Precision"],
    stack: ["Polars", "Parquet", "FinBERT", "XGBoost", "SHAP", "RAG", "Generative AI", "Streamlit"],
    collaborator: [
      {
        name: "Aryan Makka",
        role: "Lead Backend Engineer",
        linkedin: "https://www.linkedin.com/in/aryan-makka-861bb6251/",
      },
    ],
    github: "https://github.com/Subrat-2003/Financial-distress-early-warning-system",
    live: "https://huggingface.co/spaces/Sk-Jena/sec-risk-dashboard",
    image: "/projects/fdews-dashboard.png",
    caseStudy: {
      problem:
        "Corporate distress prediction is difficult because financial warning signs are scattered across structured ratios, SEC filings, and management commentary. The project aimed to detect insolvency signals up to 12 months in advance.",
      myRole: "Project Lead & Lead ML Architect",
      myContribution: [
    "Engineered the multimodal intelligence layer, extracting MD&A executive sentiment via FinBERT and fusing it with 16 financial ratios into a 17-feature Gold feature store.",
    "Benchmarked XGBoost against LSTM on imbalanced distress data, optimizing for 91% recall (0.94 AUC-ROC) and implementing SHAP value interpretability to validate leading risk drivers.",
    "Architected production reliability safeguards, including a Feature Order Lock to eliminate silent prediction drift and a Forensic RAG pipeline (Groq + Llama 3.3 + ChromaDB) for grounded risk explanations.",
       ],
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
       "Achieved 86% precision and 91% recall on an 8.4% base-rate distressed-class dataset.",
       "Produced a 4.5x lift over random screening for identifying high-risk companies.",
       "Reduced false-positive volume compared to LSTM benchmarks while maintaining strong recall.",
       "Added a forensic investigation interface that retrieves relevant financial context and generates evidence-grounded explanations for risk analysis.",
       "Deployed an interactive dashboard on Hugging Face Spaces.",
      ],
      lessons: [
        "Out-of-core processing is essential when raw data exceeds normal memory limits.",
        "XGBoost handled sparse quarterly financial data better than LSTM for this use case.",
        "Feature order locking is critical because column mismatch can silently corrupt inference.",
        "Retrieval-grounded generation adds an evidence layer that connects model-level risk signals with supporting financial-document context.",
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
    collaborator: [
      {
        name: "Gayatri Palai",
        role: "Frontend Engineering",
        linkedin: "https://www.linkedin.com/in/gayatri-palai-a286b6271/",
      },
    ],
    github:
      "https://github.com/Subrat-2003/Cashflow-Forecasting-and-Risk-Simulation-for-Freelancers",
    live: "https://cashflow-forecasting-and-risk-simul.vercel.app/",
    image: "/projects/freelancer-dashboard.png",
    caseStudy: {
      problem:
        "Freelancers deal with irregular payments, delayed invoices, and unstable monthly cashflow. Static budgeting tools do not reflect that uncertainty well.",
      myRole: "Lead AI Engineer & System Architect",
      myContribution: [
        "Engineered a distributed 3-tier architecture with an asynchronous FastAPI intelligence gateway on Render and Next.js cockpit on Vercel, implementing a UUID polling workflow to eliminate serverless API timeouts during heavy inference.",
        "Built a stochastic cashflow simulation engine with rolling forecasting and risk corridors, featuring isolated random number generation (RNG) and custom stress parameters (Liquidity Lag & Expense Warp).",
        "Architected an on-demand intelligence and voice pipeline integrating Groq-hosted Llama 3.3 (structured JSON mode) with edge-tts for low-latency, multilingual (English/Hindi) audio strategic briefings.",
        "Implemented a SHA-256 cryptographic integrity shield with deterministic seeding and tamper-detection gates to cryptographically verify transaction ledgers before inference.",
       ],
      data:
        "The platform uses transaction records, invoice status, income patterns, and recent financial behavior to forecast short-term runway.",
      approach: [
        "Engineered a distributed 3-tier cloud architecture with an asynchronous FastAPI gateway on Render and Next.js frontend on Vercel, utilizing a UUID polling loop to eliminate serverless timeouts.",
        "Constructed an ensemble rolling cashflow forecasting model (XGBoost 60% + Random Forest 40%) to balance sensitivity to economic shifts with structural baseline stability.",
        "Designed a stochastic financial simulation engine with isolated RNG and configurable stress parameters (Liquidity Lag and Expense Warp) to evaluate runway under worst-case liquidity shocks.",
        "Formulated dynamic risk corridors and a deterministic Financial Confidence score to project cash survivability thresholds across 30-day horizons.",
        "Implemented a SHA-256 cryptographic integrity shield with deterministic hashing to detect ledger tampering and prevent corrupt records from entering the inference pipeline.",
        "Built an on-demand strategic briefing and neural voice pipeline using Groq-hosted Llama 3.3 in structured JSON mode integrated with edge-tts for low-latency multilingual audio synthesis.",
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
    live: "https://public.tableau.com/app/profile/subrat.jena/viz/GlobalWaterVulnerabilityIndex/VulnerabilitybyRegion",
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
