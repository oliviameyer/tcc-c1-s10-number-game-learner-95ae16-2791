# Setup
import random
random_number = random.randint(1, 100)
user_guess = False
attempts = 0 

# Game loop
while user_guess := True:

    # Get user input
    answer = input ("enter a number btw 1 and 100")
   
   
    # Check the user input
    try:
        answer_number = int (answer)
    except:
            print("Error: please enter a valid number")
            quit

   



    # Increase attempt count

    attempts += 1

    # Check the user answer againt the secret number
    if answer_number == random_number:
        user_guess = True
    elif answer_number > random_number:
         print("The correct answer is smaller!")
    else:
         print("The correct answer is bigger!")
     
# Get the spelling of the "attempt" word
if attempts == 1:
    attempt_spell = "attempt"
else:
    attempt_spell = "attempts"

# Display the result
print("You won the answer is correct")




