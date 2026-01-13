from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from datetime import datetime
import os


def generate_pdf(candidate, config, evaluation):
    os.makedirs("reports", exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"interview_report_{timestamp}.pdf"
    path = os.path.join("reports", filename)

    c = canvas.Canvas(path, pagesize=A4)
    width, height = A4

    # -------- Page 1 --------
    c.setFont("Helvetica-Bold", 18)
    c.drawString(50, height - 50, "AI Smart Interview Analyzer")

    c.setFont("Helvetica", 12)
    c.drawString(50, height - 100, f"Name: {candidate['name']}")
    c.drawString(50, height - 130, f"Email: {candidate['email']}")
    c.drawString(50, height - 160, f"Round: {config['round']}")
    c.drawString(50, height - 190, f"Domain: {config['domain']}")
    c.drawString(50, height - 220, f"Questions: {config['count']}")

    c.showPage()

    # -------- Page 2 --------
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, height - 50, "Performance Evaluation")

    c.setFont("Helvetica", 12)
    y = height - 100
    for point in evaluation["strengths"]:
        c.drawString(50, y, f"✔ {point}")
        y -= 30

    y -= 20
    for point in evaluation["improvements"]:
        c.drawString(50, y, f"✘ {point}")
        y -= 30

    c.showPage()

    # -------- Page 3 --------
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, height - 50, "Final Note")

    c.setFont("Helvetica", 12)
    c.drawString(
        50,
        height - 100,
        "Thank you for attending the interview. Keep improving and all the best!"
    )

    c.save()

    return path
