def evaluate_answers(answers):
    strengths = []
    improvements = []

    for idx, ans in enumerate(answers):
        if len(ans.strip()) > 20:
            strengths.append(f"Answer {idx + 1} was clear and structured")
        else:
            improvements.append(f"Answer {idx + 1} needs more detail")

    if not strengths:
        strengths.append("Attempted all questions")

    if not improvements:
        improvements.append("Good overall performance")

    return {
        "strengths": strengths,
        "improvements": improvements
    }
