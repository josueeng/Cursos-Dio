operacao = input('Digite a operação: \n 1 - Depositar \n 2 - Sacar \n 3 - Extrato \n 4 - Sair \n')
if operacao == '1':
    valor = float(input('digite o valor a ser depositado: '))
    if valor > 0:
        with open('extrato.txt', 'a') as extrato:
            extrato.write(f'Deposito: {valor}\n')
        print(f'Deposito de {valor} realizado com sucesso!')
elif operacao == '2':
    valor = float(input('digite o valor a ser sacado: '))   
    if valor > 0:
        saldo = 0
        try:
            with open('extrato.txt', 'r') as extrato:
                conteudo = extrato.read()
                saldo  = sum(float(line.split(':')[1]) for line in conteudo.splitlines() if 'Deposito' in line) - \
                        sum(float(line.split(':')[1]) for line in conteudo.splitlines() if 'Saque' in line)
        except FileNotFoundError:
            saldo = 0
        if saldo < valor:
            print('Saldo insuficiente para realizar o saque.')
        else:
            with open('extrato.txt', 'a') as extrato:
                extrato.write(f'Saque: {valor}\n')
            print(f'Saque de {valor} realizado com sucesso!')
elif operacao == '3':
    try:
        with open('extrato.txt', 'r') as extrato:
            conteudo = extrato.read()
            if conteudo:
                print('Extrato:')
                print(conteudo)
                saldo  = sum(float(line.split(':')[1]) for line in conteudo.splitlines() if 'Deposito' in line) - \
                        sum(float(line.split(':')[1]) for line in conteudo.splitlines() if 'Saque' in line)
                print(f'Saldo atual: {saldo}')
                
            else:
                print('Extrato vazio.')
    except FileNotFoundError:
        print('Extrato não encontrado.')
    