def delete_order():
    file_name = 'ordenes.txt'
    fhandler = open(file_name, 'r')
    lines = fhandler.readlines()
    fhandler.close()

    for i in range(1,5):
        
        if (1 <= len(lines)):
            del lines[0]

            fhandler = open(file_name, 'w')
            for line in lines:
                fhandler.write(line)
            fhandler.close()
        else:
            print(f'La linea NO existe en el archivo')

