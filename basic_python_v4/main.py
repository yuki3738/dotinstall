import random

answer = random.randint(1, 10)

print("Your guess? ", end="")
guess = int(input())

if answer == guess:
    print("Bingo!")
elif answer > guess:
    print("Bigger!")
else:
    print("Smaller!")

print("[Answer: %i]" %answer)