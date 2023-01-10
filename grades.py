grades = input("Enter the grades for the test: ").split()

for grade in sorted(set(grades)):
    print(f'Number of ratings {grade} = {grades.count(grade)}')