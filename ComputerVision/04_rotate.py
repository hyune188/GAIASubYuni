import cv2 as cv
import os

CURRENT_DIR = os.getcwd()

DATA_PATH = os.path.join(CURRENT_DIR, "data")
image_path = os.path.join(DATA_PATH, "Astronaut.png")

if os.path.exists(image_path):
    img = cv.imread(image_path)

height, width = img.shape[:2]

center = (width // 2, height // 2)

angle = 45

rotation_matrix = cv.getRotationMatrix2D(center, angle, 1.0)

rotated_img = cv.warpAffine(img, rotation_matrix, (width, height))

cv.imshow("Original Image", img)
cv.imshow("Rotated Image", rotated_img)

cv.waitKey(0)
cv.destroyAllWindows()