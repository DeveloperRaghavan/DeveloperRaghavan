#  List in python

a=[1,2,3,4,5]
print(a)
print(type(a))

a[1]="raghul"
print(a)

a=[1,True,'ram',2.3,[1,2,3,4,5]]
print(a[0], "Type is ", type(a[0]))
print(a[1], "Type is ", type(a[1]))
print(a[2], "Type is ", type(a[2]))
print(a[3], "Type is ", type(a[3]))
print(a[4], "Type is ", type(a[4]))


print("___________________________________")
a=[1,2,3,4,5,6,7,8,9]
b=a.copy()
print(b)

print(a.count(4))
print(a.index(6))

print(len(a))
print(min(a))
print(max(a))