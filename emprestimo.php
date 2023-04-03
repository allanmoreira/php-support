<?php require_once 'templates/header.php'; ?>
<?php require_once 'templates/login_planilha_financeira.php'; ?>

        <div style="margin-left: 10px; margin-right: 10px; margin-top: 10px" class="row">
            <?php require_once 'templates/login_planilha_financeira.php'; ?>

            <div class="col-lg-6">
                <h4><strong>Endpoint</strong></h4>
                <label>Dados Validar</label>
                <select id="dados_validar" class="form-control">
                    <option value="emprestado">Emprestado</option>
                    <option value="atual">Atual</option>
                </select>
            </div>
        </div>

        <hr/>

        <div style="margin-left: 10px">
            <h4><strong>Mensagem:</strong> <span id="mensagem"></span></h4>
        </div>

        <hr/>

        <div class="row col-lg-6">
            <h4><strong>Retorno</strong></h4>
            <table id="tabela" class="table table-bordered">
                <tbody>
                    <tr>
                        <td colspan="6" class="text-center"><strong>Entradas</strong></td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Projeção</strong></td>
                        <td class="text-center" id="entradas_projecao">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Recebido</strong></td>
                        <td class="text-center" id="entradas_recebido">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Pendente</strong></td>
                        <td class="text-center" id="entradas_pendente">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td colspan="6" class="text-center"><strong>Dívidas</strong></td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Total</strong></td>
                        <td class="text-center" id="total_total">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Pago</strong></td>
                        <td class="text-center" id="total_pago">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Saldo Devedor</strong></td>
                        <td class="text-center" id="total_saldo_devedor">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td colspan="6" class="text-center"><strong>Saldo</strong></td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Atual</strong></td>
                        <td class="text-center" id="atual_atual">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Projeção Mês</strong></td>
                        <td class="text-center" id="atual_projecao_mes">R$ 0,00</td>
                    </tr>
                    <tr>
                        <td class="text-center"><strong>Projeção Atual Mês</strong></td>
                        <td class="text-center" id="atual_projecao_atual_mes">R$ 0,00</td>
                    </tr>
                </tbody>
            </table>
        </div>

<?php require_once 'templates/scripts.php'; ?>
        <script src="static//js/plugins/urls_planilha_financeira.js"></script>
        <script src="static//js/plugins/token_planilha_financeira.js"></script>
        <script src="static//js/paginas/emprestimo.js"></script>
<?php require_once 'templates/footer.php'; ?>