#Basic syntax
name ="John"
age = 25
height = 1.75
is_student = True

print(f"Name: {name}, Age: {age}, Height: {height}, Student: {is_student}")


#Strings
x = "Welcome"
print(x[0])
print(x[3:6])
print(x[3:])
print(x[:5])
print(x.upper())
print(x.lower())
print(len(x))
print("come" in x)
print("come1" in x)
print(x.replace("Welc", "H"))

#Numbers
x = 3
y = 2.5
print(x + y) #5.5
print(x - y) #0.5
print(x * y) #7.5
print(x / y) #1.2

import math
z = 3.14159
print(round(z, 2)) #3.14
print(math.floor(z)) #3
print(math.ceil(z)) #4
print(f"{z:.2f}") #3.14

#cast
num1 = input("Enter the first number: ")
num2 = input("Enter the second number: ")
print(num1 + num2) #54
print(int(num1) + int(num2)) #9

x = 42
y = 3.99
z = 0
print(int(x)) #42
print(int(y)) #3
print(float(x)) #42.0
print(str(y)) #'3.99'
print(bool(z)) #False
print(bool(x)) #True

num = input("Enter your input in celsius: ")
A = print((int(num)*9/5) + 32)
print(int(A))