<div class="col-lg-2">
    <h4><strong>Token</strong></h4>
    <label>Auth</label>
    <select id="auth" class="form-control">
        <option value="AUTH">Auth</option>
        <option value="ATENDIMENTO">Atendimento</option>
        <option value="INTERNO">Interno</option>
    </select>

    <label>Ambiente Token</label>
    <select id="tipo_token" class="form-control">
        <option value="NEW">New</option>
        <option value="OLD">Old</option>
    </select>

    <label>Ambiente</label>
    <select id="ambiente" class="form-control">
        <option value="LOCAL">Local</option>
        <option value="HTI">HTI</option>
        <option value="HK">HK</option>
        <option value="PROD">Produção</option>
    </select>

    <br>
    <button class="btn btn-success" id="btn_atualizar_token">Atualizar token</button>
</div>