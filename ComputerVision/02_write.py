import os
import cv2

CURRENT_DIR = os.getcwd()

DATA_PATH = os.path.join(CURRENT_DIR, "data")
image_path = os.path.join(DATA_PATH, "Astronaut.png")

image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

if image is not None:
    cv2.imwrite(os.path.join(DATA_PATH, "Astronaut_grey.png"), image)
    print("Grayscale image saved successfully!")