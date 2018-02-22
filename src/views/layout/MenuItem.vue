<<template>
  <div>
    <div :class="[ isOpen ? 'active' : '', 'nav-menu-item' ]" @click="updateMenu(menuItem)">
      <i :class="classes"></i>
      <span>{{ menuItem.title }}</span>
      <i :class="[ isOpen ? 'active' : '', 'fa-right fa fa-chevron-left' ]" v-if="menuItem.children.length"></i>
      <span v-if="isOpen" class="selected"></span>
    </div>
    <el-collapse-transition>
      <div class="nav-menu-item-children" v-if="isOpen">
        <div class="child" v-for="child in menuItem.children" @click="goTo(child.to)">{{ child.title }}</div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';
import MenuItemInterface from '@/interfaces/MenuItem.ts';

@Component
export default class MenuItem extends Vue {

    @Prop({ required: true })
    menuItem!: MenuItemInterface;

    @Prop({ required: true })
    openMenuItem!: string;

    get isOpen (): boolean {
      return this.menuItem.title === this.openMenuItem;
    }
    get classes (): object {
      return {
        fa: true,
        [this.menuItem.icon]: true
      }
    }

    goTo (name: string): void {
      this.$router.push({ name })
    }

    updateMenu (menuItem: MenuItemInterface): void {
      if (menuItem.children.length === 0) {
        console.log(menuItem)
        this.goTo(menuItem.to)
      }
      this.updateMenuItem(menuItem.title)
    }

    @Emit()
    updateMenuItem (value: string): void {}
}
</script>

<style scoped>
.fa-chevron-left {
  font-size: 12px;
}
.nav-menu-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  border-bottom: 1px solid #586271;
}
.nav-menu-item i {
  width: 42px;
}
.nav-menu-item.active {
  border-bottom: none;
  background: #36c6d3;
  color: #fff;
}
.fa-right {
  position: absolute;
  right: 20px;
  transition: all 0.5s;
}
.fa-right.active {
  transform: rotate(-90deg);
}
.nav-menu-item:hover {
  box-shadow: inset 0 0 100px 100px rgba(0, 0, 0, 0.1);
}
.nav-menu-item-children {
  cursor: pointer;
  border-bottom: 1px solid #586271;
}
.nav-menu-item-children .child:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}
.nav-menu-item > * {
  padding: 10px;
}
span.selected {
  display: block;
  float: right;
  position: absolute;
  right: 0;
  top: 2px;
  background: 0 0;
  width: 0;
  height: 0;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-right: 18px solid #fff;
  padding: 0;
}
.child {
  text-align: left;
  padding: 5px 5px 5px 53px;
}
</style>
