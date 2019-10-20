answer = 6

print("Your guess? ", end="")
guess = int(input())

if answer == guess:
    print("Bingo!")
else:
    print("Boo...")