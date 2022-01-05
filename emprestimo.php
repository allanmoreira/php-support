<?php require_once 'templates/header.php'; ?>
<?php require_once 'templates/login_pf.php'; ?>

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
        <script src="static//js/jquery.mask.min.js"></script>
        <script src="static//js/jquery.maskMoney.min.js"></script>
        <script src="static//js/plugins/js.cookie.min.js"></script>
        <script src="static//js/plugins/bootstrap-notify.js"></script>
        <script src="static//js/plugins/urls_planilha_financeira.js"></script>
        <script src="static//js/plugins/token_planilha_financeira.js"></script>
        <script src="static//js/plugins/notificacao.js"></script>
        <script src="static//js/plugins/aguardar_carregamento_ajax.js"></script>
        <script src="static//js/plugins/funcoes_gerais.js"></script>
        <script src="static//js/paginas/emprestimo.js"></script>
<?php require_once 'templates/footer.php'; ?>