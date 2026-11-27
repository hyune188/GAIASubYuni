x = 10

def without_global():
    x = 5 # This creates a new local variable, doesnt affect the global x
    print(f"Local x: {x}")

without_global() #Output: Local x: 5
print(f"Global x: {x}") #Output: Global x: 10

#Q= How to access Global x variable from inside without_global def?
#use the global function => global = x