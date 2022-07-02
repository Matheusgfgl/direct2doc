<template>
	<aside class="main-sidebar" style="padding-top: 60px;">
		<section class="sidebar" id="menuSidebar" style="height: auto;">
				<ul class="sidebar-menu list" id="menuSub">
					<li class="header">TELE</li>
					<li class="sidebar-menu__item" id="convenios">
						<a href="https://www.direct2doc.com.br/convenios" class="name">
							<i class="fa fa-medkit" aria-hidden="true"></i>
							<span class="label"> Convênios </span>
						</a>
					</li>
					<li class="sidebar-menu__item" id="pacientes">
						<a href="https://www.direct2doc.com.br/pacientes" class="name">
							<i class="fa fa-medkit" aria-hidden="true"></i>
							<span class="label"> Pacientes </span>
						</a>
					</li>
					<li class="sidebar-menu__item" id="tele_exames">
						<a href="https://www.direct2doc.com.br/exame" class="name">
							<i class="fa fa-list-alt" aria-hidden="true"></i>
							<span class="label">Consultas</span>
						</a>
					</li>
					<li class="sidebar-menu__item" id="customer">
						<a href="https://www.direct2doc.com.br/customer" class="name">
							<i class="fa fa-child" aria-hidden="true"></i> 
							<span class="label">Clínicas // Hospitais </span>
							</a>
					</li>
					<li class="sidebar-menu__item" id="user">
						<a href="https://www.direct2doc.com.br/user" class="name">
							<i class="fa fa-users" aria-hidden="true"></i> 
							<span class="label">Usuários</span>
						</a>
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