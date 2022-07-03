<template>
  <header class="main-header">
    <a href="https://www.direct2doc.com.br/" class="main-header__logo">
     <img height="45" style="filter: brightness(0) invert(1);" src="../../../public/health.png">
    </a>
  
    <nav class="navbar navbar-static-top" role="navigation">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
      </a>
      <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <li class="dropdown user user-menu">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img width="30" style="filter: brightness(0) invert(1);" src="https://www.direct2doc.com.br/assets/uploads/files/admin/tele/411/94098bd8c4b75b48a24f2d196e6993e1.png">
            <b>Tele</b>
            <span class="hidden-xs">Rede Meridional</span>
          </a>
              <ul class="dropdown-menu">
                <li class="user-header">
                  <img class="main-header__logo" style="filter: brightness(0) invert(1);" src="https://www.direct2doc.com.br/assets/uploads/files/admin/tele/411/94098bd8c4b75b48a24f2d196e6993e1.png">                                                                                                                                                         
                    <p>
                      Rede Meridional                                    
                      <small>Último login  02/07/2022 11:36</small>
                    </p>
                    </li>
                    <li class="user-footer">
                      <div class="pull-left">
                          <a href="https://www.direct2doc.com.br/profile" class="btn-default btn-flat">Perfil</a>
                      </div>
                      
                      <!--Botão com função dark mode-->
                      <div class="pull-center">
                          <a href="#" class="btn btn-default btn-flat inner-switch lg-off"> </a>
                      </div>
                      <div class="pull-right">
                          <a href="https://www.direct2doc.com.br/logout" class="btn-default btn-flat">Sair</a>
                      </div>
                    </li>
                </ul>
              </li>
            <li>
            <a href="https://www.direct2doc.com.br/logout" style="padding-top: 18px"><i class="fa fa-sign-out" aria-hidden="true"></i> Sair</a>
            </li>
        </ul>
      </div>
            
      </nav>
        
    </header>
</template>

<script lang="ts">
export default {
  name: 'header'
}
</script>

<style lang="scss" scoped>
.main-header {
	background-color: #222d32;
	display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1rem;
  width: 100%;

  &__logo {
    width: 6rem;
  }

  .navbar-custom-menu {
    background-color: #222d32;
    display: none;

  }

  .user-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2rem 1rem;
    font-size: 14px;
  }

  .user-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
    background-color: #f9f9f9;
    padding: 10px;
    color: var(--gray-500);
  }

  .dropdown-menu {
    position: absolute;
    right: 5%;
    left: auto;
    border: 1px solid #ddd;
    background-color: #222d32;
  }
}

</style>