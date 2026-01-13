# 🎤 AI Interview Analyzer

The **AI Interview Analyzer** is an end-to-end automated interview evaluation system that simulates structured interview rounds, evaluates candidate performance, generates a professional multi-page PDF report, and **automatically emails the report using UiPath RPA**.

The project is intentionally designed without paid APIs and focuses on **system design, automation, and scalability**, with a clear upgrade path toward AI-based evaluation.

---

## 📌 Project Status

**Current State:** Stable Core System (Public GitHub Repository)  
**Freeze Level:** Core flow frozen, extensions allowed  
**Last Verified Working:** January 2026  

This repository represents a **fully working system**, not a prototype.

---

## 🎯 Project Vision

This project demonstrates how a modern interview evaluation system can be built by combining:

- Frontend interview simulation
- Backend evaluation & reporting
- **Enterprise-style automation using UiPath**
- AI-readiness without premature complexity

The goal is correctness, stability, and extensibility — not hype.

---

## 🔁 End-to-End Working Flow

### 1️⃣ Candidate Entry
- Candidate provides:
  - Name
  - Email
- Data stored in frontend session context
- No database dependency at this stage

---

### 2️⃣ Interview Configuration
- Candidate selects:
  - Interview domain (HR / Technical / DSA)
  - Programming language (for Technical interviews)
  - Question count (3 / 5 / 7 / 10)
- Configuration is locked and safely passed forward

---

### 3️⃣ Interview Execution
- Questions fetched dynamically from backend
- Questions displayed **one by one**
- Camera and microphone enabled
- Candidate responses captured
- Flow completes without refresh or data loss

---

### 4️⃣ Backend Evaluation
- Backend receives:
  - Candidate details
  - Interview configuration
  - Captured answers
- Applies **rule-based evaluation logic**
- Generates:
  - Strengths
  - Improvement areas
  - Overall feedback
- Evaluation engine is modular and AI-upgrade-ready

---

### 5️⃣ PDF Report Generation ✅
- Multi-page professional PDF generated using **ReportLab**
- Current structure:
  - **Page 1:** Candidate details & interview configuration
  - **Page 2:** Evaluation summary (scores, strengths, weaknesses)
  - **Page 3:** Appreciation & encouragement message
- PDF generation is:
  - Fully automated
  - Backend-driven
  - Verified working

---

### 6️⃣ UiPath Automation – Email Delivery 🚀 (Key Differentiator)

- A **UiPath RPA bot** monitors the generated PDF output
- Automatically:
  - Picks the generated report
  - Emails it to the candidate
- No email logic is embedded inside backend code

This clean separation demonstrates:
- RPA integration
- Enterprise-style automation
- Proper separation of application logic and automation workflows

---

## 🛠 Tech Stack (Confirmed)

### Frontend
- React (Vite)
- React Router
- Context API (session management)
- Axios
- Modular component architecture

### Backend
- Python
- Flask
- Flask-CORS
- ReportLab (PDF generation)

### Automation
- **UiPath RPA**
  - Automated email delivery
  - File pickup and distribution

### Storage (Phase 1)
- In-memory / JSON-based
- No database (intentional)

---

## ✅ Completed & Locked Features

✔ Candidate → Config → Interview → Completion flow  
✔ Stable session handling  
✔ Dynamic question fetching  
✔ Interview execution  
✔ Rule-based backend evaluation  
✔ Multi-page PDF report generation  
✔ **UiPath-based email automation**  
✔ Public GitHub deployment  

This system is **fully operational**.

---

## ⏳ Deferred by Design (Not Missing)

The following are intentionally excluded in the current phase:

- Resume parsing
- Resume vs interview comparison
- Database integration
- UI/UX polish
- AI / ML evaluation
- Emotion, confidence, or sentiment analysis

---

## 🔜 Planned Roadmap

### Phase 2 – Evaluation Engine Upgrade
- Enhanced rule-based scoring
- Confidence estimation
- More granular feedback logic

### Phase 3 – Resume Utilization
- Resume parsing
- Skill and keyword extraction
- Resume vs interview alignment

### Phase 4 – Database Integration
- Persistent storage
- Candidate history
- Optional report archival

### Phase 5 – AI Upgrade (Future)
- Replace rule-based logic with AI models
- Preserve existing API contracts
- Zero frontend breaking changes

---

## 🧹 Data & Privacy Design

- Camera data and raw answers are temporary
- PDF is generated and emailed
- Long-term storage is optional and configurable
- Designed to minimize storage usage and privacy risk

---

## ⚠️ Development Rules

- Never refactor a working flow casually
- Always commit before major changes
- One phase at a time
- Logic before UI
- Stability > Features > Aesthetics

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Author

**Remy Athisayaa**  
Aspiring AI Optimization Specialist  
GitHub: https://github.com/RemyAthisayaa17
