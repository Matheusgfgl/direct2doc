<template>
	<aside class="main-sidebar" style="padding-top: 60px;">
		<section class="sidebar" id="menuSidebar" style="height: auto;">
				<ul class="sidebar-menu list" id="menuSub">
					<li class="header">TELE</li>
					<li class="sidebar-menu__item" id="convenios">
						<router-link 
							:to="{ name: 'Agreements' }"
							class="name"
						>
							<i class="fa fa-medkit" aria-hidden="true"></i>
							<span class="label"> Convênios </span>
						</router-link>
					</li>
					<li class="sidebar-menu__item" id="pacientes">
						<router-link 
							:to="{ name: 'Patients' }" 
							class="name"
						>
							<i class="fa fa-medkit" aria-hidden="true"></i>
							<span class="label"> Pacientes </span>
						</router-link>
					</li>
					<li class="sidebar-menu__item" id="tele_exames">
						<router-link 
							:to="{ name: 'Appointments' }"
							class="name"
						>
							<i class="fa fa-list-alt" aria-hidden="true"></i>
							<span class="label">Consultas</span>
						</router-link>
					</li>
					<li class="sidebar-menu__item" id="customer">
						<router-link 
							:to="{ name: 'Customer' }" 
							class="name"
						>
							<i class="fa fa-child" aria-hidden="true"></i> 
							<span class="label">Clínicas // Hospitais </span>
							</router-link>
					</li>
					<li class="sidebar-menu__item" id="user">
						<router 
							:to="{ name: 'User' }" 
							class="name"
						>
							<i class="fa fa-users" aria-hidden="true"></i> 
							<span class="label">Usuários</span>
						</router>
					</li>
				</ul>
		</section>
	</aside>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.main-sidebar {
	background-color: #222d32;
	width: 20%;
	color: #b8c7ce;

	.sidebar-menu {
		&__item {
			display: flex;
			align-items: center;
			padding: 0.8rem 5px 0.8rem 1rem;

			.label {
				margin-left: 1rem;
			}
		}
	}
}

</style>