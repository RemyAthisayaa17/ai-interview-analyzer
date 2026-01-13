# 🎤 AI Interview Analyzer

A web-based interview simulation system that conducts structured mock interviews and generates a professional, multi-page PDF evaluation report for candidates.

This project is currently **stable and fully functional**, designed to work **without paid APIs** and built with a clear upgrade path for future AI integration.

---

## 📌 Project Status

**Status:** Stable (Frozen)  
**Frozen Date:** January 2026  

The complete end-to-end flow is working as intended.  
The current architecture **must not be restructured without strong justification**, as stability is the top priority.

---

## 🎯 Core Objective

To simulate a structured interview experience and automatically generate a professional evaluation report in PDF format.

This project is intentionally designed to be:
- Academic-safe
- Free-tier compatible
- Stable before intelligent
- Extendable without breaking existing functionality

---

## 🔁 Current Working Flow

1. **Candidate Details**
   - Collects candidate name and email
   - Data stored in session context

2. **Interview Configuration**
   - Domain selection (HR / Technical / DSA)
   - Language selection (where applicable)
   - Question count selection
   - Configuration persists across pages

3. **Interview Session**
   - Questions fetched from backend
   - Camera and microphone enabled
   - Questions displayed one-by-one
   - Candidate responses captured

4. **Backend Processing**
   - Interview data received by backend
   - Basic rule-based evaluation applied
   - Structured evaluation data generated

5. **PDF Report Generation**
   - Multi-page professional PDF
   - Includes:
     - Candidate details
     - Interview configuration
     - Scores and feedback
     - Appreciation message
   - **PDF generation is confirmed working**

---

## 🛠 Tech Stack (Current Implementation)

### Frontend
- React (Vite)
- React Router
- Context API (session handling)
- Axios (API communication)

### Backend
- Python
- Flask
- Flask-CORS
- ReportLab (PDF generation)

### Storage
- In-memory / JSON-based temporary storage
- No database (by design)

> ⚠️ Database persistence is intentionally excluded at this stage to preserve simplicity and stability.

---

## 🚫 Explicit Non-Goals (Current Phase)

The following are **not implemented yet** and are intentionally excluded:

- AI / LLM-based evaluation
- Machine learning models
- Paid APIs
- Database integration
- UI/UX polish
- Resume parsing logic

Adding these prematurely would compromise system stability.

---

## 🔜 Planned Future Phases

### Phase 2 – Evaluation Engine Upgrade
- Enhanced rule-based scoring
- Confidence estimation
- Strengths and improvement area analysis

### Phase 3 – Resume Utilization
- Resume keyword extraction
- Resume vs interview alignment
- Skill gap analysis

### Phase 4 – AI Upgrade (Future)
- Replace rule-based evaluation with AI models
- Preserve existing API contracts
- No frontend restructuring

---

## ⚙️ How to Run Locally

### Clone the Repository
```bash
git clone https://github.com/RemyAthisayaa17/ai-interview-analyzer.git
cd ai-interview-analyzer
```

---

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend runs on:
```
http://localhost:5000
```

---

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## ⚠️ Development Rules

- Do not refactor the working flow casually
- Always commit before making changes
- Implement one feature at a time
- Stability > Perfection

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👩‍💻 Author

**Remy Athisayaa**  
Aspiring AI Optimization Specialist  
GitHub: [RemyAthisayaa17](https://github.com/RemyAthisayaa17)
