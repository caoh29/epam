#teams = 3
#participants_per_team = 4
#attempts_per_participant = 3

#points range from 1 to 60

attemps = 3

max_score = 60
min_score = 1

team_yellow = {
    "camilo" : [],
    "paula" : [],
    "liz" : [],
    "chloe" : []
}

team_blue = {
    "ricardo" : [],
    "sammy" : [],
    "edilma" : [],
    "x" : []
}

team_red = {
    "carlos" : [],
    "johana" : [],
    "mariana" : [],
    "maggie" : []
}

teams = [team_yellow, team_blue, team_red]

def main():

    for team in teams:

        for participant in team:

            scores = []

            for i in range(attemps):

                score = int(input(f'Ingrese el puntaje del lanzamiento del jugador {participant}: '))

                if score <= max_score and score >= min_score:
                    scores.append(score)
                else:
                    print('Puntuacion incorrecta, ha perdido el tiro')
                    scores.append(0)

            team[participant] = scores

    for team in teams:

        for participant in team:
            
            participant_values = team[participant]

            largest_number = participant_values[0]

            for score in participant_values:
                if score > largest_number:
                    largest_number = score

            team[participant] = largest_number


    largest_number = 0
    winner = ''
    for team in teams:

        for participant in team:

            if team[participant] > largest_number:
                largest_number = team[participant]
                winner = participant

    print(f'El ganador es {winner} con el puntaje de {largest_number}')

if __name__ == '__main__':
    main()