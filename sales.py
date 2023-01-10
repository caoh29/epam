max_tickets = 200

any_week = {
    "Monday" : 0,
    "Tuesday" : 0,
    "Wednesday" : 0,
    "Thursday" : 0,
    "Friday" : 0,
    "Saturday" : 0,
    "Sunday" : 0
}

first_week = second_week = third_week = forth_week = any_week

month = [first_week, second_week, third_week, forth_week]

def main():

    counter = 1

    weekly_sales = []

    monthly_sales = []

    price = float(input('Precio del ticket: '))

    for week in month:

        for day in any_week:
            
            while True:
                try:
                    daily_tickets = int(input(f'Ingrese el numero de tickets vendidos ({day}): '))
                    if daily_tickets <= max_tickets:
                        if daily_tickets >= 0:
                            week[day] = daily_tickets
                            break
                except:
                    print('Ha ocurrido un error, intente de nuevo')

        weekly_sum = sum(week.values())
        weekly_sales.append(weekly_sum)
        weekly_max = max(week.values())
        max_day = {i for i in week if week[i] == weekly_max}

        print(f'\nLa semana {counter} se vendieron {weekly_sum} tickets, teniendo un maximo de ventas el día {max_day} de {weekly_max}\n')
        counter = counter + 1

    for i in weekly_sales:
        weekly_revenue = i * price
        monthly_sales.append(weekly_revenue)
    
    monthly_revenue = sum(monthly_sales)

    print(f'El total devengado mensual es de ${monthly_revenue}\n')
    
    print(month)


if __name__ == '__main__':
    main()