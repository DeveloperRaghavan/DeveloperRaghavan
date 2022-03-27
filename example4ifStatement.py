# i = int(input("Enter the Number : "))
#
# while i <= 20:
#     print(i)
#     i += 1
#_____________________________________________

i = int(input("Enter the Number : "))

while i <= 20:
    if i % 2 == 0:
        i = i + 1
        continue;
    print(i)
    i += 1
