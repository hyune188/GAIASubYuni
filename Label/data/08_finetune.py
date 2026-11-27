from ultralytics import YOLO

model = YOLO("yolo26n.yaml")
model = YOLO("yolo26n.pt")
model = YOLO("yolo26n.yaml").load("yolo26n.pt")

results = model.train(data = "data\data.yaml", epochs=10, imgsz=640)