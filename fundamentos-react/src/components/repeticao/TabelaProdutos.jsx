import React from "react";
import produtos from "../../data/produtos";

export default props => {
    const produtosLi = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>
                    {produto.id}
                </td>
                <td>
                    {produto.nome}
                </td>
                <td>
                    {produto.preco}
                </td>
            </tr>
        )
    })
    return (
        <div >
            <table border="1">
                <thead>
                    <th>
                        Id
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Preço
                    </th>
                </thead>
                <tbody>
                    {produtosLi}

                </tbody>

            </table>
        </div>
    )
}