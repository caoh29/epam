def display_orders():
    file_name = 'ordenes.txt'
    fhandler = open(file_name, 'r')
    lines = fhandler.readlines()
    fhandler.close()

    for line in lines:
        print(line)