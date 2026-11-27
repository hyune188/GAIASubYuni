from ultralytics import YOLO
import random
import os

model_path = os.path.join("runs", "detect", "train2", "weights", "best.pt")

model = YOLO(model_path)

metrics = model.val()
print(metrics.box.map)
print(metrics.box.map50)
print(metrics.box.map75)
print(metrics.box.maps)

val_images_path = "data/images/val"
images = [f for f in os.listdir(val_images_path) if f.lower().endswith(('.jpg', '.png', '.jpeg', '.bmp', '.tiff'))]
if images:
    random_image = random.choice(images)
    image_path = os.path.join(val_images_path, random_image)
    print(f"Predicting on random ")