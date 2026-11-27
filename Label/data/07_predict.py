from ultralytics import YOLO
import os

model_path = os.path.join("runs", "detect", "train", "weights", "best.pt")

model = YOLO(model_path)

results = model("https://ultralytics.com/images/bus.jpg", save=True)

results[0].show()