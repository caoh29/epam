from prices import pizza_values
from pizzas import pizzas



def order():
    while True:
        try:
            global pizza_type
            pizza_type = int(input('\n¿Qué sabor de pizza desea ordernar?\n'
                f'1) {pizzas[1]}\n'
                f'2) {pizzas[2]}\n'
                f'3) {pizzas[3]}\n'
                f'4) {pizzas[4]}\n'
                f'5) {pizzas[5]}\n'
                f'6) {pizzas[6]}\n'
            ))
            break
        except:
            print('Opción Invalida, Intentelo nuevamente')
    
    while True:
        try:
            global pizza_amount
            pizza_amount = int(input('\n¿Cuantas porciones de pizza desea ordernar?\n'))
            if pizza_amount >= 1:
                break
            else:
                print('Valor Incorrecto')
        except:
            print('Opción Invalida, Intentelo nuevamente')
    return pizzas[pizza_type], str(pizza_amount)

def get_customer_data():
    name = input('\nIngrese su nombre y apellido: ').title()
    address = input('Ingrese su direccion: ').capitalize()
    return name, address

def charge():
    global due
    due = pizza_values[pizza_type] * pizza_amount
    return str(due)

def write_file(pizza, due, *args):
    fhandler = open('ordenes.txt', 'a')
    fhandler.write('-'*80+'\n')
    for arg in args:
        fhandler.writelines(f'{arg}\n')
    fhandler.writelines(pizza[0] + ' : ' + pizza[1] + '\n')
    fhandler.write(f'${due}\n')
    fhandler.close()