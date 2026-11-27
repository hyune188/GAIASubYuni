import numpy as np
import cv2 as cv
import os

CURRENT_DIR = os.getcwd()

DATA_PATH = os.path.join(CURRENT_DIR, "data")
image_path = os.path.join(DATA_PATH, "Astronaut.png")

if os.path.exists(image_path):
    img = cv.imread(image_path)

height, width = img.shape[:2]

res = cv.resize(img,(2*width, 2*height), interpolation = cv.INTER_CUBIC)

cv.imshow("Original Image", img)
cv.imshow("Resized Image", res)

cv.waitKey(0)
cv.destroyAllWindows()
