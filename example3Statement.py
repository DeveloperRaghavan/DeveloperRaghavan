M1 = int(input("Enter The Mark 1 : "))
M2 = int(input("Enter The Mark 2 : "))
M3 = int(input("Enter The Mark 3 : "))

total = M1+M2+M3
average=total/3.0

print("Total :", total)
print("Average :", average)

if M1>=35 and M2>=35 and M3>=35:
    print("Result : Pass")

    if average>= 90 and average<=100:
        print("grade : a")

else:
    print("Result : Fail")
