def count_orders():
    file_name = 'ordenes.txt'

    counter = 0

    fhandler = open(file_name, 'r')
    for line in fhandler:
        if line.startswith('-'):
            counter+=1
    fhandler.close()

    print(f'\nEl número de ordenes en la lista es de {counter}')
