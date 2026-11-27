import cv2
import os

current_directory = os.getcwd()

image_path = os.path.join(current_directory, "Astronaut.jpg")

image1 = cv2.imread(image_path, cv2.IMREAD_COLOR)
image2 = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
image3 = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)

if image1 is None:
    print("Error: Image not found or unable to read.")
else:
    print("Image loaded successfully!")
if image2 is None:
    print("Error: Image not found or unable to read.")
else:
    print("Image loaded successfully!")
if image3 is None:
    print("Error: Image not found or unable to read.")
else:
    print("Image loaded successfully!")

cv2.imshow("Color Image", image1)
cv2.imshow("Greyscale Image", image2)
cv2.imshow("Unchanged Image", image3)

cv2.waitKey(0)
cv2.destroyAllWindows()