<!Doctype HTML>
<html>
<head>
	<title>Cuenta</title>
	<link rel="stylesheet" href="{{ asset('css/bootstrap/dist/css/bootstrap.min.css') }}">
	<link rel="stylesheet" href="{{ asset('css/font-awesome/css/font-awesome.min.css') }}">
	<style type="text/css">
		body{
			padding: 50px 5px;
		}
	</style>
</head>
<body>

<div id="signup_app" class="col-md-5 col-md-offset-3">
<div class="panel panel-default">
	<div class="panel-heading">
		<h4>Crear Cuenta</h4>
	</div>

	<div class="panel-body">
		<form 
			:action="baseURL+'api/v1/user/customer'" 
			method="POST" 
			@submit.prevent="submit" 
			id="signup_form">
			
			<div class="form-group">
				<label for="name">Nombre Completo</label>
				<input type="text" name="name" class="form-control" required/>
			</div>
			
			<div class="form-group">
				<label for="username">Nombre de usuario</label>
				<input type="text" name="username" class="form-control" required/>
			</div>

			<div class="form-group">
				<label for="email">Correo</label>
				<input type="email" name="email" class="form-control" required/>
			</div>

			<div class="form-group">
				<label for="password">Contraseña</label>
				<input type="password" name="password" class="form-control" required/>
			</div>

			<div class="form-group">
				<label for="confirmpassword">Confirmar Contraseña</label>
				<input type="password" name="confirmpassword" class="form-control" required/>
			</div>

			<input type="submit" class="btn btn-primary form-control" value="Guardar" />

			<center>
				<h6>Tienes cuenta? Login <a :href="baseURL+'login?ref='+ref">Aqui</a></h6>
			</center>

		</form>
	</div>
</div>
<div id="error"></div>
</div>

<script src="{{ asset('js/Vue.js') }}"></script>
<script src="{{ asset('js/vue-router.js') }}"></script> 
<script src="{{ asset('js/axios.js') }}"></script>
<script src="{{ asset('js/jquery/dist/jquery.min.js') }}"></script>
<script src="{{ asset('js/jquery.form.js') }}"></script>
<script src="{{ asset('css/bootstrap/dist/js/bootstrap.min.js') }}"></script> 
<script src="{{ asset('js/bootstrap-notify.js') }}"></script>
<script src="{{ asset('js/util.js') }}"></script>
<script src="{{ asset('js/data.js') }}"></script>
<script>
//config
var util = new util(true);
data.setBaseURL("{{ asset('') }}");
var app = new Vue({
	el: '#signup_app',
	data:{
		baseURL:data.getBaseURL(),
		ref:'{{ $request->ref }}',
		value:'Guardar'
	},
	
	methods:{
		submit: function() {
			var vm = this;
			
			if ($('[type=password]')[0].value != $('[type=password]')[1].value)
				return util.notify('Contraseña no coincide', 'error');

			util.notify('Creando cuenta por favor espere', 'loading');

			axios.post(this.baseURL+'api/v1/user/customer', $('#signup_form').serialize())
				.then( function(response){
					console.log(response)
					if(response.data.status == 'success') {	
						util.notify(util.messageToString(response.data.message),'success');
						location.href = vm.baseURL+'login?ref='+vm.ref;
					} else {
						util.notify(util.messageToString(response.data.message), 'error');
					}
				})
				.catch(function(error){
					util.showResult(error);
				})
		}
	}
})

</script>

</body>
</html>