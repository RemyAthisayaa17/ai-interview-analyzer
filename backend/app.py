from flask import Flask, request, jsonify
from flask_cors import CORS
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
import os
import uuid
from datetime import datetime

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REPORT_DIR = os.path.join(BASE_DIR, "reports")
os.makedirs(REPORT_DIR, exist_ok=True)


# ------------------ HEALTH CHECK ------------------
@app.route("/ping", methods=["GET"])
def ping():
    return "pong", 200


# ------------------ QUESTIONS API ------------------
@app.route("/get-questions", methods=["POST"])
def get_questions():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Invalid payload"}), 400

    round_type = data.get("round")
    domain = data.get("domain")
    count = int(data.get("count", 3))

    if not round_type:
        return jsonify({"error": "Round missing"}), 400

    # Dummy questions (stable, predictable)
    questions_bank = {
        "HR": [
            "Tell me about yourself",
            "What are your strengths?",
            "Where do you see yourself in 5 years?",
            "How do you handle pressure?",
        ],
        "Technical": [
            "Explain OOP concepts",
            "What is REST API?",
            "Explain your last project",
            "What is time complexity?",
        ]
    }

    questions = questions_bank.get(round_type, [])[:count]

    return jsonify({"questions": questions}), 200


# ------------------ SUBMIT + PDF ------------------
@app.route("/submit-interview", methods=["POST"])
def submit_interview():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Invalid payload"}), 400

    candidate = data.get("candidate", {})
    config = data.get("config", {})
    answers = data.get("answers", [])

    filename = f"Interview_Report_{uuid.uuid4().hex}.pdf"
    filepath = os.path.join(REPORT_DIR, filename)

    c = canvas.Canvas(filepath, pagesize=A4)
    width, height = A4
    y = height - 50

    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, y, "AI Interview Report")
    y -= 40

    c.setFont("Helvetica", 11)
    c.drawString(50, y, f"Name: {candidate.get('name', 'N/A')}")
    y -= 20
    c.drawString(50, y, f"Email: {candidate.get('email', 'N/A')}")
    y -= 20
    c.drawString(50, y, f"Round: {config.get('round', 'N/A')}")
    y -= 20
    c.drawString(50, y, f"Domain: {config.get('domain', 'N/A')}")
    y -= 30

    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, y, "Answers:")
    y -= 20

    c.setFont("Helvetica", 11)
    for idx, ans in enumerate(answers, start=1):
        c.drawString(50, y, f"{idx}. {ans}")
        y -= 20
        if y < 50:
            c.showPage()
            y = height - 50

    c.save()

    return jsonify({
        "message": "Interview submitted",
        "report": filename
    }), 200


# ------------------ START SERVER ------------------
if __name__ == "__main__":
    app.run(debug=True, port=5000)
