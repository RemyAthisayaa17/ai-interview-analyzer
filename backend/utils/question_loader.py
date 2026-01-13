import json
import os
import random

BASE = os.path.join(os.path.dirname(__file__), "..", "data", "questions")

def load_questions(round_type, domain, count):
    if round_type == "HR":
        path = os.path.join(BASE, "hr", "common.json")
    elif round_type == "DSA":
        path = os.path.join(BASE, "dsa", "dsa.json")
    else:
        path = os.path.join(BASE, "technical", f"{domain.lower()}.json")

    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    return random.sample(data, min(count, len(data)))
