<template>
	<div>
		<!-- <div id="myCarousel" class="carousel slide" data-ride="carousel">

		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			<li data-target="#myCarousel" data-slide-to="1"></li>
			<li data-target="#myCarousel" data-slide-to="2"></li>
		</ol>

		<div class="carousel-inner" role="listbox">
			<div class="item active">
				<img :src="storageURL+'images/slide/slide1.png'" style="max-height: 350px">
			</div>

			<div class="item">
				<img :src="storageURL+'images/slide/slide2.png'" style="max-height: 350px">
			</div>

			<div class="item">
				<img :src="storageURL+'images/slide/slide3.png'" style="max-height: 350px">
			</div>
		</div>

		<a class="left carousel-control" href="#myCarousel" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control" href="#myCarousel" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
			<span class="sr-only">Next</span>
		</a>
	</div> -->

		<!-- <div style="text-align: left;">
		<category-card 
			v-for="(category, index) in categories"
			:name="category.category_name"
			:src="storageURL+category.category_image"
			:id="category.id"
			:key="category.id">
			{{ category.category_description }}
		</category-card>
	</div> -->
		<div class="fondo-lista">
			<div class="row justify-content-center">
				  <div class="col-sm-3" style="background-color: #fefefe">
				  	<ul>
				  		Categorias
				  		<a v-for="cat in categories" :href="`/#/category/${cat.id}`"><li>{{cat.category_name}}</li></a>
				  	</ul>
				  </div>
				<div id="crud" class="col-sm-8">
					<div class="custom-card text-center">
						<div class="card-header text-center row justify-content-md-center align-items-center"
							style="border-radius: 15px; background-color: #ff4f93">
							<div class="row" style="padding-left: 20%;">
								<div class="col-md-2" style="display: inline-flex">
									
									<h2 class="letra-boldfont"
										style="align-self: center; color: white; font-size: 1.2em">Buscar:</h2>
								</div>
								<div class="col-md-5">
									<input class="form-control" style="display: inline-flex;border: white;border-radius: 5px;margin-top: 9px;" type="text"
									placeholder="Buscar por categoria o nombe" v-model="filter" />
								</div>
								<div class="col-md-1">
									<button class="btn btn-primary" style="display: inline-flex; margin-top: 8px;"
										@click="GetSchedulesByName()">Buscar</button>
								</div>
								
								
							</div>

						</div>
						<div class="padding-20">
							<div class="row">
								<div class="col-12" style="display: flex; justify-content: flex-end; padding: 5px">
									<div class="text-left" style="max-width: 200px">
										<span>Ordenar por:</span>
										<select class="form-control" @change="onChange($event)" v-model="order_by">
											<option value="ts.individual_rate desc">Precio mayor</option>
											<option value="ts.individual_rate asc">Precio menor</option>
											<option value="score_desc">Calificación mayor</option>
											<option value="score_asc">Calificación menor</option>
										</select>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-10">
									<products-card v-for="product in productsAllArray" :key="product.id"
										:value="product"></products-card>
								</div>
							</div>
						</div>
						<!-- <div v-if="schedules.length > 8 && schedules.length % 9 == 0 && !isMaximum">
            <button @click="GetMoreSchedules()" class="btn btn-trikele letra-boldfont">{{ loading ? "Cargando..." : "Ver más" }}</button>
          </div> -->
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import productsVue from '../mycomponents/cards/products.vue';

	export default {
		data: function () {
			return {
				storageURL: data.getStorageURL(),
				productsAllArray: [],
				baseURL: 'http://127.0.0.1:8000/',
				order_by: "",
				filter: "",
			}
		},
		created() {
			this.getAllProducts();
		},

		computed: {
			categories() {
				return data.getCategories();
				console.log
			},
		},
		methods: {
			getAllProducts() {
				console.log('Hola');
				var vm = this;
				axios.get(vm.baseURL + '/api/v1/allProducts')
					.then(function (response) {
						$.notifyClose();
						vm.productsAllArray = response.data;
					})
					.catch(function (error) {
						console.log('aqui');
						// util.notify('An error occured, try to refresh', 'error');
						// util.showResult(error);
					})
			},
		}
	}
</script>

<style>
	.carousel-inner>.item>img,
	.carousel-inner>.item>a>img {
		margin: auto;
	}

	#myCarousel {
		margin-top: -20px;
	}

	.fondo-lista {
		min-height: 80vh;
		background-image: url("/uploads/home/fondopaticas.png");
		background-size: contain;
	}
</style>