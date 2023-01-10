import sys
from menu import menu
from greeting import greeting
from create_order import write_file , charge , order , get_customer_data
from delete_order import delete_order
from counting import count_orders
from display_orders import display_orders

greeting()


def main():

#METODOS
    def order_loop():
        pizza_name_amount = order()
        due = charge()
        write_file(pizza_name_amount, due, customer_info)
        to_continue()

    def to_continue():
        continuar = int(input('\n¿Desea ordenar algo más? (0-no | 1-sí)\n'))
        if continuar == 1:
            order_loop()
        else:
            main()

# EJECUCION DEL PROGRAMA
    menu()

    while True:
        try:
            decision = int(input())
            break
        except:
            print('Ha ocurrido un error\n')
            main()

    if decision == 0:
        sys.exit()
    elif decision == 1:
        customer_info = get_customer_data()
        order_loop()
        
    elif decision == 2:
        delete_order()
        main()
    elif decision == 3:
        count_orders()
        main()
    elif decision == 4:
        display_orders()
        main()
    else:
        print('Opción Invalida, Intentelo nuevamente')
        main()

if __name__ == '__main__':
    main()