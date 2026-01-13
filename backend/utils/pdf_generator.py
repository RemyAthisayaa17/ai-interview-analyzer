from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from datetime import datetime
import os

def generate_pdf(candidate, config, evaluation):
    if not os.path.exists("reports"):
        os.makedirs("reports")

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"interview_report_{timestamp}.pdf"
    path = os.path.join("reports", filename)

    c = canvas.Canvas(path, pagesize=A4)
    width, height = A4

    y = height - 50

    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, y, "AI Interview Analysis Report")

    y -= 40
    c.setFont("Helvetica", 12)
    c.drawString(50, y, f"Name: {candidate['name']}")
    y -= 20
    c.drawString(50, y, f"Email: {candidate['email']}")

    y -= 30
    c.drawString(50, y, f"Round: {config['round']}")
    y -= 20
    c.drawString(50, y, f"Domain: {config['domain']}")
    y -= 20
    c.drawString(50, y, f"Questions Count: {config['count']}")

    y -= 40
    c.drawString(50, y, f"Score: {evaluation['score']}%")

    y -= 30
    c.drawString(50, y, "Strengths:")
    y -= 20
    for s in evaluation["strengths"]:
        c.drawString(70, y, f"- {s}")
        y -= 15

    y -= 20
    c.drawString(50, y, "Improvements:")
    y -= 20
    for i in evaluation["improvements"]:
        c.drawString(70, y, f"- {i}")
        y -= 15

    c.save()
    return path
