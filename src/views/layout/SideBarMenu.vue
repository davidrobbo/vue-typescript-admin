<<template>
  <div>
    <div class="nav-search">
      <input type="text" placeholder="Search..."/>
      <i class="fa-abs fa fa-search"></i>
    </div>
    <div class="nav-menu">
      <MenuItem
        v-for="item in menuItems"
        :openMenuItem="openItem"
        :menuItem="item"
        @update-menu-item="updateMenu"
        />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
import MenuItem from './MenuItem.vue';
import MenuItemI from '@/interfaces/MenuItem.ts';

@Component({ components: { MenuItem } })
export default class SideBarMenu extends Vue {

  /**
   * Data
   */
   openItem: string;
   menuItems: Array<MenuItemI>;

   constructor () {
     super();
     this.openItem = '';
     this.menuItems = [
       {
         title: 'Dashboard',
         icon: 'fa-dashboard',
         to: 'Dashboard',
         children: [
           { title: 'Stats', to: 'Dashboard Stats' },
         ],
       },
       {
         title: 'Horses',
         icon: 'fa-underline',
         to: 'Horses',
         children: [
           { title: 'Stats', to: 'Dashboard Stats' },
         ],
       },
       {
         title: 'Jockies',
         icon: 'fa-headphones',
         to: 'Jockies',
         children: [
           { title: 'Stats', to: 'Dashboard Stats' },
         ],
       },
       {
         title: 'Trainers',
         icon: 'fa-text-height',
         to: 'Trainers',
         children: [
           { title: 'Stats', to: 'Dashboard Stats' },
         ],
       },
       {
         title: 'Courses',
         icon: 'fa-stumbleupon-circle',
         to: 'Courses',
         children: [
           { title: 'Stats', to: 'Dashboard Stats' },
         ],
       },
       {
         title: 'Meetings',
         icon: 'fa-calendar',
         to: 'Courses',
         children: [
           { title: 'Stats', to: 'Dashboard Stats' },
         ],
       }
     ]
   }

  /**
   * Methods
   */
   updateMenu (item: string): void {
     this.openItem = this.openItem === item ? '' : item;
   }
}
</script>

<style scoped>
.nav-search {
  margin: 20px 0;
  padding: 0 10px;
  width: 100%;
  position: relative;
}
.nav-search input {
  padding: 10px;
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #586271 !important;
  color: #b4bcc8;
}
.nav-search input:focus {
  border: none;
  box-shadow: none;
  outline: none;
}
.nav-search input:active {
  border: none;
  box-shadow: none;
  outline: none;
}
.fa-abs {
  color: #586271;
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
}
.nav-menu {
  color: #b4bcc8;
  font-size: 14px;
}
</style>
