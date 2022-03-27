NoOfDays = int(input("Enter The Days : "))

if (NoOfDays == 0):
    print("Good No Fine")

elif NoOfDays >= 1 and NoOfDays <= 5:
    print("Fine Amount :", NoOfDays * 0.5)
elif NoOfDays >= 5 and NoOfDays <= 10:
    print("Fine Amount :", NoOfDays * 1)

elif NoOfDays >= 10 and NoOfDays <= 30:
    print("Fine Amount :", NoOfDays * 5)

else:
    print("Membership Cancel")
