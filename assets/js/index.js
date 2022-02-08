let boton_calcular = document.getElementById('boton-calcular')

boton_calcular.addEventListener('click', () => {
    generar_tabla()
})

const generar_tabla = () => {
    document.getElementById('table-body').innerHTML = ''
    let select = document.getElementById('cuotas')
    let capital = Number(document.getElementById('capital').value)
    let cuotas = Number(select.options[select.selectedIndex].text)
    let intereses = Number(document.getElementById('intereses').value)

    if (capital > 0) {
        for (iterador = 1; iterador <= cuotas; iterador++) {
            n_ca = capital / cuotas
            d_1 = n_ca.toFixed(2)
            i_2 = ((capital * intereses) / 100) / cuotas
            d_2 = i_2.toFixed(2)
            r_1 = n_ca + i_2
            d_3 = r_1.toFixed(2)
            document.getElementById('table-body').innerHTML = document.getElementById('table-body').innerHTML + `
                <tr>
                    <td> ${iterador} </td>
                    <td> ${Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(d_1)}</td>
                    <td> ${Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(d_2)}</td>
                    <td> ${Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(d_3)}</td> 
                </tr>
            `
        }

        n_1 = capital.toFixed(2)
        t_i = i_2 * cuotas
        d_4 = t_i.toFixed(2)
        t_p = r_1 * cuotas
        d_5 = t_p.toFixed(2)
        document.getElementById('row-1').innerHTML = Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(n_1)
        document.getElementById('row-2').innerHTML = Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(d_4)
        document.getElementById('row-3').innerHTML = Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(d_5)
    } else {
        alert('Falta ingresas un numero')
    }
}