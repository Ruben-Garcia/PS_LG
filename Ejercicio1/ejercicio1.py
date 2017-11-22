#-------------------------------------------------------------------------------
# Funcion que calcula los divisores propios positivos de un numero dado
#-------------------------------------------------------------------------------
def calcularDivisoresPropiosPositivos(numero) :
    resultado = []
    for num in range(1, numero/2 + 1) :
        if ( numero % num ) == 0 :
            resultado.append(num)
    return resultado

#-------------------------------------------------------------------------------
# Funcion que suma los elemento de una lista
#-------------------------------------------------------------------------------
def sumarLista(lista) :
    resultado = 0
    for num in lista :
        resultado += num
    return resultado

#-------------------------------------------------------------------------------
# Funcion que indica mediante una cadena de texto si el numero es "abundante",
# "perfecto" o "defectivo"
#-------------------------------------------------------------------------------
def clasificarNumero(numero) :
    suma = sumarLista(calcularDivisoresPropiosPositivos(numero))
    if suma > numero :
        return "abundante"
    elif suma < numero :
        return "defectivo"
    else :
        return "perfecto"

#-------------------------------------------------------------------------------
# Funcion clasifica cada elemento de una lista devolviendo una tupla
# ( numero, tipificacion )
#-------------------------------------------------------------------------------
def clasificarLista(lista) :
    resultado = []
    for num in lista :
        resultado.append((num, clasificarNumero(num)))
    return resultado
