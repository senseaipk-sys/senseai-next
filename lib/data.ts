export const company = {
  name: "SenseAI",
  tagline: "AI • Sensors • Health • Research",

  summary:
  "SenseAI builds intelligent systems at the intersection of machine learning, sensor data, and healthcare. We specialize in EMR/EHR data engineering and analytics—FHIR/HL7 integration, terminology mapping (SNOMED CT, LOINC, ICD-10), governed ETL/ELT, de-identification, cohorting, quality measures, and predictive modeling for care delivery and operations.",
  //summary:
  //  "SenseAI builds intelligent systems at the intersection of machine learning, sensor data, and assistive health technologies. We design practical AI for wearables, healthcare, and enterprise analytics.",
  email: "adeelnisar@gmail.com",
  location: "Lahore, Pakistan",
  founder: {
    name: "Dr. Muhammad Adeel Nisar",
    roles: [
      //"Assistant Professor (PUCIT, University of the Punjab)",
      "AI Architect",
      "Machine Learning and GenAI Expert",
      "Researcher: Human Activity Recognition, Emotion Recognition, Cognitive Analysis and Health Informatics"
    ],
    interests: [
      "Time-series analysis",
      "Wearable devices & multimodal sensing",
      "HAR (Human Activity Recognition)",
      "Audio/Video/EEG emotion recognition",
      "Digital twins & predictive modeling"
    ]
  },
  social: [
    //{ label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dr-muhammad-adeel-nisar" },
    //{ label: "X/Twitter", href: "https://x.com/your-handle" }
  ]
};

export type Project = {
  slug: string;
  title: string;
  brief: string;
  details: string[];
  tags: string[];
  status?: "Live" | "Pilot" | "Research" | "Prototype";
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "har-pipeline",
    title: "Real-time HAR Pipeline",
    brief: "Human Activity Recognition using multi-device wearable sensors (watch, glasses, phone).",
    details: [
      "Bluetooth streaming to smartphone, Wi‑Fi to local server (RabbitMQ/AMQP).",
      "9+ sensor modalities (20–200 Hz), feature engineering + deep models.",
      "Realtime demo for activity inference and visualization."
    ],
    tags: ["Sensors", "HAR", "Time-series", "Edge"],
    status: "Prototype"
  },
  {
    slug: "audio-emotion-attention",
    title: "Attention-based Audio Emotion Recognition",
    brief: "Speech emotion detection for call centers and clinical datasets.",
    details: [
      "Exploration across >25 papers; robust preprocessing and augmentation pipeline.",
      "CNN/Transformer encoders with attention pooling for robust emotion cues.",
      "Evaluation on multi-class emotions; domain adaptation planned."
    ],
    tags: ["Audio", "Emotion", "Attention", "NLP"],
    status: "Research"
  },
  {
    slug: "digital-twin-health",
    title: "AI-driven Digital Twin for Health Monitoring",
    brief: "Predictive modeling and process optimization using sensor-driven twins.",
    details: [
      "Integrates wearable streams for anomaly detection and personalized insights.",
      "Real-time simulation layer to forecast trajectories and interventions."
    ],
    tags: ["Digital Twin", "Prediction", "Simulation"],
    status: "Research"
  },
  {
    slug: "eeg-flow-detection",
    title: "EEG-based Flow & Cognitive State Detection",
    brief: "Multimodal detection of flow using EEG and physiological signals.",
    details: [
      "Signal processing + time-frequency features + deep temporal models.",
      "Applications in learning, productivity, and mental-wellbeing."
    ],
    tags: ["EEG", "Cognitive State", "Time-series"],
    status: "Research"
  },
  {
    slug: "cgm-glucose-analytics",
    title: "CGM-based Glucose–Food–Activity Analytics",
    brief: "Correlating glucose variability with diet and physical activity for personalized recommendations.",
    details: [
      "Continuous glucose monitoring fused with activity & nutrition logs.",
      "Goal: derive optimal food choices using glucose generation curves."
    ],
    tags: ["Health", "CGM", "Analytics"],
    status: "Research"
  },
  {
    slug: "mis-pos-analytics",
    title: "MIS / POS Analytics",
    brief: "Management Information System dashboards with POS data pipelines.",
    details: [
      "KPIs, cohort analysis, and forecasting for retail decision-making.",
      "ETL, model serving, and dashboarding for stakeholders."
    ],
    tags: ["Analytics", "Retail", "Dashboards"],
    status: "Pilot"
  },
  {
    slug: "people-analytics-vision",
    title: "People Analytics via Vision",
    brief: "Camera-based occupancy, seat-time, and movement analytics (Tkxel initiative).",
    details: [
      "Built-in models for detection/tracking; privacy-aware metrics.",
      "Heatmaps and utilization insights for space planning."
    ],
    tags: ["Vision", "Analytics", "Edge"],
    status: "Prototype"
  },
  {
    slug: "smart-traffic-offline",
    title: "Smart Traffic Analysis (Offline)",
    brief: "Complete offline pipeline using saved videos for congestion estimation.",
    details: [
      "Object detection + tracking + spatiotemporal features; no cloud dependency.",
      "Dashboard summarizing congestion scores, flow, and bottlenecks."
    ],
    tags: ["Traffic", "Vision", "Offline"],
    status: "Prototype"
  },

  {
  slug: "magic-box-ehr-analytics",
  title: "Magic Box — EMR/EHR Analytics Platform",
  brief: "Interoperable clinical data lakehouse with governed pipelines and predictive insights for providers.",
  details: [
    "Connectors for FHIR R4, HL7 v2 ADT/ORM/ORU, CDA/CCD; terminology services for SNOMED CT, LOINC, ICD-10",
    "ETL/ELT with dbt/Airflow/PySpark; data contracts, lineage, and QA (completeness, conformance, uniqueness)",
    "Cohort builder for outcomes & utilization; HEDIS & custom KPIs; clinician/ops dashboards",
    "Predictive models (readmission, LOS, sepsis/EWS) with calibration, bias checks, and post-deployment drift monitors",
    "Deployable on AWS/Azure/GCP or on-prem; PHI-safe workflows, DUAs, and access controls"
  ],
  tags: ["EHR","FHIR","HL7","Analytics","Prediction"],
  status: "Pilot"
  },
  {
    slug: "humcare",
    title: "humCare — Assistive Health Research",
    brief: "Supervised more then 15 students on sensor-based assistive health tasks under humCare.",
    details: [
      "Range of HAR, sleep-stage classification, and emotion recognition tasks.",
      "Emphasis on real-world data collection, annotation, and evaluation."
    ],
    tags: ["Research", "Assistive Tech", "Sensors"],
    status: "Research"
  }
];

export const services = [
  {
    title: "AI Consulting & Prototyping",
    bullets: [
      "Use-case discovery, feasibility & ROI estimates",
      "Rapid POCs for time-series, vision, and audio"
    ]
  },
  {
    title: "Wearable & Sensor AI",
    bullets: [
      "Data collection frameworks and pipelines",
      "On-device/edge inference and dashboards"
    ]
  },
  {
    title: "Generative AI & RAG",
    bullets: [
      "LLM-powered assistants for knowledge bases",
      "Evaluation harnesses and safety/guardrails"
    ]
  },
  {
    title: "Analytics Dashboards",
    bullets: [
      "KPIs, forecasting, cohort analysis",
      "Secure deployment on Vercel/Cloud"
    ]
  },

  {
  title: "EMR/EHR Integration & Interoperability",
  bullets: [
    "FHIR R4, HL7 v2, CDA/CCD; Mirth Connect/Redox gateways",
    "EMPI patient matching; SNOMED CT, LOINC, ICD-10 mapping"
  ]
},
{
  title: "Clinical Data Engineering (ETL/ELT)",
  bullets: [
    "Python/SQL/PySpark, dbt/Airflow; schema harmonization & validation",
    "Data quality checks, lineage, and reproducible pipelines"
  ]
},
{
  title: "Privacy, De-ID & Governance",
  bullets: [
    "HIPAA/GDPR-aligned PHI handling, DUAs, role-based access",
    "k-anonymity, l-diversity, differential privacy options"
  ]
},
{
  title: "Clinical & Operational Analytics",
  bullets: [
    "Cohorting, outcomes & utilization; HEDIS/quality measures",
    "Dashboards for clinicians, admin, payers; A/B & causal analysis"
  ]
},
{
  title: "Predictive Modeling for Care",
  bullets: [
    "Readmission, LOS, sepsis/EWS, no-show & churn modeling",
    "Time-series/event modeling; calibration & drift monitoring"
  ]
},
{
  title: "Healthcare Cloud & MLOps",
  bullets: [
    "AWS HealthLake / Azure API for FHIR / GCP Healthcare API",
    "CI/CD, model registry, observability, and secure deployments"
  ]
}

];
