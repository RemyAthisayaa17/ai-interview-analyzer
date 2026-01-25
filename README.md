🎤 AI Interview Analyzer

The AI Interview Analyzer is an end-to-end automated interview evaluation system that simulates structured interview rounds, evaluates candidate performance, generates a professional three-page PDF report, and automatically emails the report using UiPath RPA.

The project is intentionally designed without paid APIs, focusing on system design, automation, modularity, and scalability, with a clear upgrade path toward AI-driven evaluation.

📌 Project Status

Current State: Stable Core System (Version 2)
Freeze Level: Core interview flow frozen, internal improvements allowed
Last Verified Working: January 2026

This repository represents a fully functional system, not a prototype or UI demo.

🎯 Project Vision

This project demonstrates how a modern interview evaluation platform can be built by combining:

Frontend interview simulation

Backend evaluation & reporting

Enterprise-style automation using UiPath

AI readiness without premature complexity

The focus is on correctness, stability, and extensibility, not hype-based AI claims.

🔁 End-to-End Working Flow
1️⃣ Candidate Entry

Candidate provides:

Name

Email

Data is maintained via frontend session state

No database dependency in the current phase

2️⃣ Interview Configuration

Candidate selects:

Interview domain (HR / Technical / DSA)

Programming language (for Technical interviews)

Question count (3 / 5 / 7 / 10)

Configuration is locked and safely passed forward

3️⃣ Interview Execution

Questions are fetched dynamically from the backend

Questions are presented one at a time

Camera and microphone are enabled for simulation purposes

Candidate responses are captured

Flow completes without refresh or session loss

4️⃣ Backend Evaluation

Backend receives:

Candidate details

Interview configuration

Submitted answers

Applies rule-based evaluation logic

Generates:

Strengths

Areas for improvement

Overall feedback

Evaluation engine is modular and designed for AI replacement without API changes

5️⃣ PDF Report Generation ✅ (Verified – Version 2)

Professional three-page PDF generated using ReportLab

Structure:

Page 1: Candidate information & interview configuration

Page 2: Evaluation summary (scores, strengths, improvement areas)

Page 3: Appreciation & encouragement message

PDF generation is:

Backend-driven

Fully automated

Verified stable in Version 2

6️⃣ UiPath Automation – Email Delivery 🚀 (Key Differentiator)

A UiPath RPA bot monitors the generated PDF output directory

Automatically:

Picks the newly generated report

Emails it to the candidate

No email logic exists inside backend code

This separation demonstrates:

Real-world RPA integration

Enterprise-style automation

Clean separation between application logic and automation workflows

🛠 Tech Stack (Confirmed – Version 2)
Frontend

React (Vite)

React Router

Context API (session handling)

Axios

Modular component-based architecture

Backend

Python

Flask

Flask-CORS

ReportLab (PDF generation)

Automation

UiPath RPA

Automated email delivery

File pickup and distribution

Storage (Phase 1)

In-memory / JSON-based

No database (intentional design choice)

✅ Completed & Locked Features

✔ Candidate → Configuration → Interview → Completion flow
✔ Stable session handling
✔ Dynamic question fetching
✔ Interview execution with camera & mic simulation
✔ Rule-based backend evaluation
✔ Three-page professional PDF report generation
✔ UiPath-based automated email delivery
✔ Cleaned repository (no virtual environment tracked)

This system is fully operational and reproducible.

⏳ Deferred by Design (Not Missing)

The following are intentionally excluded in the current phase:

Resume parsing

Resume-to-interview comparison

Database integration

Advanced UI/UX polish

AI / ML-based evaluation

Emotion, confidence, or sentiment analysis

🔜 Planned Roadmap
Phase 2 – Evaluation Engine Enhancement

Improved rule-based scoring

More granular feedback

Confidence estimation logic

Phase 3 – Resume Integration

Resume parsing

Skill and keyword extraction

Resume vs interview alignment

Phase 4 – Database Integration

Persistent storage

Candidate history

Optional report archival

Phase 5 – AI Upgrade (Future)

Replace rule-based logic with AI models

Preserve existing API contracts

Zero frontend breaking changes

🧹 Data & Privacy Design

Camera and microphone are used only for live simulation

No video or audio data is stored

PDFs are generated and emailed

Long-term storage is optional and configurable

Designed to minimize privacy risk

⚠️ Development Rules

Never refactor a working flow casually

Always commit before major changes

One phase at a time

Logic before UI

Stability > Features > Aesthetics

📜 License

This project is licensed under the MIT License.

👩‍💻 Author

Remy Athisayaa
GitHub: https://github.com/RemyAthisayaa17



It matches exactly what Version 2 does

It doesn’t overpromise, and tha
