import random

answer = random.randint(1, 10)

while True:
    print("Your guess? ", end="")
    guess = int(input())

    if answer == guess:
        print("Bingo!")
        break
    elif answer > guess:
        print("Bigger!")
    else:
        print("Smaller!")